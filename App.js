import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.up}>
        <View>
          <Text>Xin chào Hưng Max DZ!</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.taoVoucher}>

          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.middle}>
        <Ionicons name="home-outline" size={30} color="gray" />
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
    backgroundColor: 'red',
  },
  taoVoucher: {
    borderWidth: 1,

  },
  middle: {
    flex: 8,
    backgroundColor: 'green',
  },
  down: {
    flex: 3 / 4,
    backgroundColor: 'blue',
  },

})