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
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import { getDiscoverProducts } from '../services/Api';
import { getProductList } from '../services/Api';
import { useDispatch, useSelector } from "react-redux";

export default function Home({ rout, navigation }) {
  const [product, setProduct] = useState([])
  const dispatch = useDispatch();
  const onAddToCart = (item) => () => {
    dispatch({ type: 'ADD_CART', data: { ...item, quantity: 1 } })
  }
  const onMoveToDetail = (data) => () => {
    navigation.navigate('ProductDetail', { detail: data });
  }
  useEffect(() => {
    const callGetProductList = async () => {
      try {
        console.log('before calling');
        const response = await getProductList();
        console.log('rs', response.data.data);
        setProduct(response.data.data);
      }
      catch (error) {
        console.error(error);
      }
      getProductList();
    }
    callGetProductList();
  }, [])
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={onMoveToDetail(item)}
      style={styles.item}>
      <View>
        <Image style={{ height: 300, width: 300, width: 100, height: 100, borderRadius: 5 }}
          source={{ uri: item.image }}
        />
      </View>
      <View style={styles.introProducts}>
        <Text style={styles.title}>{item.product_name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <TouchableOpacity onPress={onAddToCart(item)}>
        <Text>Thêm vào giỏ</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.up}>
        <View style={styles.greeting}>
          <MaterialCommunityIcons name="weather-partly-cloudy" size={30} color="orange" />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Xin chào Hưng Max DZ...!</Text>
        </View>
        <View style={styles.voucherContainer}>
          <TouchableOpacity style={styles.touchOpVoucher}>
            <MaterialCommunityIcons name="ticket-confirmation-outline" size={25} color="orange" />
            <Text style={{ fontSize: 18 }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchOpBell}>
            <MaterialCommunityIcons name="bell-outline" size={25} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.middle}>
        <ScrollView style={styles.contentContainer}>
          <View>
            <ImageBackground source={{
              uri: 'http://brand.24h.co/uploaded/2018/04/the-coffee-house.jpg',
            }} resizeMode="cover" style={styles.ImgBackground}>
              <View style={styles.customerInForContainer}>
                <View style={styles.inforUp}>
                  <View style={styles.nameCustomer}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Hà Duy Hưng</Text>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>0 BEAN - Mới</Text>
                  </View>
                  <View style={styles.touchOpScoreContainer}>
                    <TouchableOpacity style={styles.touchOpScore}>
                      <FontAwesome name="angle-double-down" size={20} color="white" />
                      <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold', fontSize: 12, marginLeft: 5 }}>
                        Tích điểm
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.inforDown}>
                  <Image style={styles.ImgQR}
                    source={require('./images/QR.jpg')}>
                  </Image>
                  <Text style={{ color: 'gray' }}>
                    M161508128
                  </Text>
                </View>
              </View>
            </ImageBackground>
            <View style={styles.mainContentContainer}>
              <Feather name="minus" size={25} color="gray" />
              <View style={styles.purchaseForm}>
                <TouchableOpacity style={styles.TouchOpPurchaseForm}>
                  <Image
                    style={styles.logoTransport}
                    source={require('./images/PF1.jpg')}
                  />
                </TouchableOpacity>
                <View style={{ borderColor: 'lightgray', borderRadius: 1, borderWidth: 1 }}></View>
                <TouchableOpacity style={styles.TouchOpPurchaseForm}>
                  <Image
                    style={styles.logoTransport}
                    source={require('./images/PF2.jpg')}
                  />
                </TouchableOpacity>
              </View>

            </View>
            <View style={styles.AdSwiper}>
              <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
                <View style={styles.slide}>
                  <Image style={styles.banner}
                    source={require('./images/banner1.jpg')}
                  />
                </View>
                <View style={styles.slide}>
                  <Image style={styles.banner}
                    source={require('./images/banner2.jpg')}
                  />
                </View>
                <View style={styles.slide}>
                  <Image style={styles.banner}
                    source={require('./images/banner3.jpg')}
                  />
                </View>
              </Swiper>
            </View>
            <View style={styles.explorer}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Khám phá thêm
              </Text>
              <View style={styles.explorerTypes}>
                <TouchableOpacity style={styles.TouchOpExplorer}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Ưu đãi đặc biệt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchOpExplorer}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Cập nhật từ nhà</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.TouchOpExplorer}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold' }}>#CoffeeLover</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.listExplorer}>
                <FlatList
                  data={product}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'white',
  },
  up: {
    flex: 2 / 3,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'lightgray',
    paddingHorizontal: 10,
  },
  greeting: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 5,
  },
  voucherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
  },
  touchOpVoucher: {
    borderRadius: 50,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginHorizontal: 3,
    shadowColor: 'black', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 10, // Android
  },
  touchOpBell: {
    borderRadius: 50,
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 4,
    marginHorizontal: 3,
    shadowColor: 'black', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 10, // Android
  },
  middle: {
    flex: 8,
  },
  ImgBackground: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 130,
  },
  customerInForContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'tomato',
    borderRadius: 10,
  },
  inforUp: {
    flexDirection: 'row',
    paddingBottom: 20
  },
  nameCustomer: {
    padding: 10,
    marginRight: 80
  },
  touchOpScoreContainer: {

  },
  touchOpScore: {
    flexDirection: 'row',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#FF6600',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  inforDown: {
    margin: 10,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  ImgQR: {
    width: 200,
    height: 60,
  },
  mainContentContainer: {
    paddingHorizontal: 10,
    borderRadius: 10,
    borderTopWidth: 1,
    borderColor: 'lightgray',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  purchaseForm: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgray',
    padding: 10,
    marginTop: 10,
  },
  logoTransport: {
    width: 70,
    height: 70,
    marginHorizontal: 40,
  },
  AdSwiper: {

  },
  wrapper: {
    height: 220,
  },
  slide: {
    margin: 20,
  },
  banner: {
    width: '100%',
    height: 150,
    borderRadius: 20,
  },
  explorer: {
    paddingHorizontal: 20,
  },
  explorerTypes: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TouchOpExplorer: {
    margin: 5,
  },
  listExplorer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  item: {
    alignItems: 'center',
    backgroundColor: 'orange',
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
  price: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold'
  }
})