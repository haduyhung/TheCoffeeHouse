import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  Image,
  FlatList,
  TextInput,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getProductList } from '../services/Api';
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";

export default function Score() {

  const [data, setData] = useState([]);
  const productsList = useSelector((store) => store.cartReducer.products);
  console.log('productsList', productsList);
  const dispatch = useDispatch();

  const totalMoney = productsList.reduce((acc, ele) => acc + Number(ele.price), 0)

  const onChangeQuantity = (type, item) => () => {
    if (type === 'reduce' && item.quantity == 1) {
      dispatch({ type: 'REMOVE_ITEM', data: item })
    }
    else {
      dispatch({ type: 'CHANGE_QUANTITY', data: item, changeQuantityType: type })
    }
  }
  const onRemoveItems = (item) => () => {
    dispatch({ type: 'REMOVE_ITEM', data: item })
  }
  const onRemoveAll = () => {
    dispatch({ type: 'REMOVE_ALL' })
  }
  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <View>
        <Image style={{ height: 100, width: 100, borderRadius: 10 }}
          source={{ uri: item.image }}
        />
      </View>
      <View style={styles.introItem}>
        <View style={{ width: 200, alignItems: 'center' }}>
          <Text style={styles.title}>{item.product_name}</Text>
        </View>
        <Text style={styles.price}>$ {item.price}</Text>
        <View style={styles.productQuantity}>
          <TouchableOpacity onPress={onChangeQuantity('reduce', item)}>
            <AntDesign name="minuscircleo" size={25} color="gray" />
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 5, fontSize: 18 }}>{item.quantity}</Text>
          <TouchableOpacity onPress={onChangeQuantity('increase', item)}>
            <AntDesign name="pluscircleo" size={25} color="gray" />
          </TouchableOpacity>
        </View>
        <Text style={{ marginHorizontal: 5, fontSize: 18 }}>$ 10000</Text>
      </View>
      <TouchableOpacity onPress={onRemoveItems(item)}>
        <Ionicons name="trash-outline" size={25} color="gray" />
      </TouchableOpacity>
    </View >
  );
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={productsList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={
            productsList?.length &&
            <View>
              <TouchableOpacity onPress={onRemoveAll}
                style={{ left: 330 }}
              >
                <Text>
                  remove all
                </Text>
              </TouchableOpacity>
              <View style={{
                margin: 10,
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 5
              }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                  Total items: {productsList?.length}
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
                  Total money: ${totalMoney}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: 'black',
                  borderRadius: 5,
                  height: 30,
                  margin: 10,
                  backgroundColor: 'orange',
                }}
              >
                <Text style={{ fontSize: 18 }}>
                  Thanh Toán
                </Text>
              </TouchableOpacity>
            </View>
          }
        />
        {!productsList?.length &&
          <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Text >
              Nothing here!
            </Text>
          </View>
        }

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#F5F5F5',
  },
  introItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartItem: {
    backgroundColor: 'orange',
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEEBD0',
    marginTop: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  productQuantity: {
    flexDirection: 'row',
  },
  price: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  }
})

