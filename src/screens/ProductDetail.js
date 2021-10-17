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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import { getProductList } from '../services/Api';
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";

export default function ProductDetail({ route, navigation }) {
  const dispatch = useDispatch();
  const [detailProduct, setDetailProduct] = useState()
  const { detail } = route.params;
  const onAddToCart = (detail) => () => {
    dispatch({ type: 'ADD_CART', data: { ...detail, quantity: 1 } })
  }
  return (
    <View style={styles.Container}>
      <View>
        <Image style={{ height: 300, width: '100%' }}
          source={{ uri: detail.image }}
        />
      </View>
      <View style={styles.productInfor}>
        <View style={styles.vName}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'gray' }}>Tên sản phẩm: </Text>
          <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 18 }}>{detail.product_name}</Text>
        </View>
        <View style={styles.vPrice}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'gray', marginBottom: 10 }}>Giá:</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red', marginBottom: 10 }}>{detail.price} </Text>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18, color: 'gray', fontWeight: 'bold' }}>Miêu tả: </Text>
          <Text style={{ fontSize: 18, color: 'gray' }}>{detail.description}</Text>
        </View>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <TouchableOpacity style={styles.addToCartTouchOpa} onPress={onAddToCart(detail)}>
          <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold' }}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#F5F5F5',
  },
  productInfor: {
    backgroundColor: 'white',
    margin: 15,
    padding: 10,
    borderRadius: 10
  },
  vName: {
    marginBottom: 10,
  },
  vPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addToCartTouchOpa: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    padding: 10,
    width: 280,
    borderRadius: 10
  }
})
