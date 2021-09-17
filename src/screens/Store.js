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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import { getProductList } from '../services/Api';
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";

export default function Store() {

  const [product, setProduct] = useState([])
  const dispatch = useDispatch();
  const onAddToCart = (item) => () => {
    dispatch({ type: 'ADD_CART', data: { ...item, quantity: 1 } })
  }

  useEffect(() => {
    const callGetProductList = async () => {
      try {
        console.log("before calling");
        const response = await getProductList();
        console.log('rs', response.data.data);
        setProduct(response.data.data)
        console.log("after calling");
      } catch (error) {
        console.error(error);
      }
      getProductList()
    }
    callGetProductList()
  }, [])

  const renderItem = ({ item }) => {
    //console.log('item', item)
    return (
      <TouchableOpacity
        onPress={onAddToCart(item)}
        style={styles.item}>
        <View>
          <Image style={{ height: 300, width: 300, width: 100, height: 100, borderRadius: 5 }}
            source={{ uri: item.image }}
          />
        </View>
        <View style={styles.introProducts}>
          <Text style={styles.title}>{item.product_name}</Text>
          <Text style={styles.cost}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    )
  };


  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TextInput
          style={styles.txtIpSearch}
          placeholder="hello"
        />
        <TouchableOpacity style={styles.TouchOpSearch}>
          <Ionicons name="map-outline" size={20} color="black" />
          <Text style={{ fontWeight: 'bold', paddingLeft: 10 }}>
            Bản đồ
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.listExplorerContainer}>
        <View style={styles.listExplorer}>
          <View>
            <Text style={styles.typesCoffee}>
              Các cửa hàng khác
            </Text>
          </View>
          <FlatList
            data={product}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5F5F5',
  },
  location: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  TouchOpLocation: {
    flexDirection: 'row',
  },
  logoLocation: {
    width: 50,
    height: 50,
  },
  chooseLocation: {
    flexDirection: 'column',
  },
  filterContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  txtIpSearch: {
    borderRadius: 5,
    height: 35,
    width: 200,
    color: 'black',
    fontSize: 10,
    backgroundColor: '#E8E8E8',
    marginHorizontal: 5,
  },
  TouchOpSearch: {
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 5,
    paddingHorizontal: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listExplorerContainer: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
  listExplorer: {

  },
  item: {
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 15,
    flexDirection: 'row',
    borderRadius: 5,
    flex: 3,
  },
  typesCoffee: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  introProducts: {
    flex: 1,
    marginLeft: 15,
  },
})
