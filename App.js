import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.up}>
        <View style={styles.greeting}>
          <MaterialCommunityIcons name="weather-partly-cloudy" size={30} color="orange" />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Xin chào Hưng Max DZ 111!</Text>
        </View>
        <View style={styles.voucherContainer}>
          <TouchableOpacity style={styles.touchVoucher}>
            <MaterialCommunityIcons name="ticket-confirmation-outline" size={25} color="orange" />
            <Text style={{ fontSize: 18 }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchBell}>
            <MaterialCommunityIcons name="bell-outline" size={25} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.middle}>
      </View>
      <View style={styles.down}>
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
  touchVoucher: {
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
  touchBell: {
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
    backgroundColor: 'green',
    paddingHorizontal: 10,
  },
  down: {
    flex: 3 / 4,
    backgroundColor: 'blue',
    paddingHorizontal: 10,
  },

})