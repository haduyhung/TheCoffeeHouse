
import React from 'react'
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

const DATA = [
  {
    id: '1',
    title: 'Coffee 1',
    cost: '10.00$',
    linkImage: require('./images/ex1.jpg'),
  },
  {
    id: '2',
    title: 'Coffee 2',
    cost: '16.00$',
    linkImage: require('./images/ex2.jpg'),
  },
  {
    id: '3',
    title: 'Coffee 3',
    cost: '12.00$',
    linkImage: require('./images/ex3.jpg'),
  },
  {
    id: '4',
    title: 'Coffee 4',
    cost: '12.00$',
    linkImage: require('./images/ex4.jpg'),
  },
  {
    id: '5',
    title: 'Coffee 5',
    cost: '12.00$',
    linkImage: require('./images/ex3.jpg'),
  },
  {
    id: '6',
    title: 'Coffee 6',
    cost: '12.00$',
    linkImage: require('./images/ex1.jpg'),
  },
];


export default function Order() {

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.introProducts}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.cost}>{item.cost}</Text>
      </View>
      <View>
        <Image style={{ height: 300, width: 300, width: 100, height: 100, borderRadius: 5 }}
          source={item.linkImage}
        />
      </View>
    </View >
  );


  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <TouchableOpacity style={styles.TouchOpLocation}>
          <Image
            style={styles.logoLocation}
            source={require('./images/PF1.jpg')}
          />
          <View style={styles.chooseLocation}>
            <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
              Giao đến
            </Text>
            <Text>
              Từ Sơn - Bắc Ninh
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.filterContainer}>
        <TextInput
          style={styles.txtIpSearch}
          placeholder="hello"
        />
        <TouchableOpacity style={styles.TouchOpSearch}>
          <Ionicons name="search-outline" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchOpSearch}>
          <Ionicons name="heart-outline" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.listExplorerContainer}>
        <View style={styles.listExplorer}>
          <View>
            <Text style={styles.typesCoffee}>
              Cà phê - Cà phê gói uống liền
            </Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.listExplorer}>
          <View>
            <Text style={styles.typesCoffee}>
              Cà phê
            </Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.listExplorer}>
          <View>
            <Text style={styles.typesCoffee}>
              Trà trái cây - Trà sữa
            </Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.listExplorer}>
          <View>
            <Text style={styles.typesCoffee}>
              Đá xay - Chocolate - Matcha
            </Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.listExplorer}>
          <View>
            <Text style={styles.typesCoffee}>
              Bánh mặn - Bánh mặn - Snack
            </Text>
          </View>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.listExplorer}>
          <View>
            <Text style={styles.typesCoffee}>
              Bộ sưu tập quà tặng
            </Text>
          </View>
          <FlatList
            data={DATA}
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
    backgroundColor: '#F5F5F5',
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
    backgroundColor: 'lightgray',
    marginHorizontal: 5,
  },
  TouchOpSearch: {
    borderRadius: 5,
    backgroundColor: 'lightgray',
    marginHorizontal: 5,
    paddingHorizontal: 8,
    justifyContent: 'center',
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
  },
})
