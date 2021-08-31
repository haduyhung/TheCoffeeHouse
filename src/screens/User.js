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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';


export default function User() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.applications}>
          <Text style={styles.title}>
            Tiện ích
          </Text>
          <View style={styles.functions}>
            <TouchableOpacity style={styles.touchOpHistory}>
              <Ionicons name="document-text-outline" size={25} color="orange" />
              <Text style={styles.txtFunctions}>
                Lịch sử đơn hàng
              </Text>
            </TouchableOpacity >
            <View style={styles.musicPlayingAndTerms}>
              <TouchableOpacity style={styles.touchOpMusicPlayingAndTerms}>
                <MaterialIcons name="music-video" size={25} color="green" />
                <Text style={styles.txtFunctions}>
                  Nhạc đang phát
                </Text>
              </TouchableOpacity>
              <View style={{ width: 10 }}>
              </View>
              <TouchableOpacity style={styles.touchOpMusicPlayingAndTerms}>
                <Ionicons name="shield-checkmark-outline" size={24} color="purple" />
                <Text style={styles.txtFunctions}>
                  Điều khoản
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.title}>
            Tiện ích
          </Text>
          <View style={styles.settings}>
            <TouchableOpacity style={styles.touchOpSettings}>
              <FontAwesome name="star-o" size={20} color="#696969" />
              <Text style={styles.txtFunctionsSettings}>Đánh giá đơn hàng</Text>
              <FontAwesome style={styles.angle} name="angle-right" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchOpSettings}>
              <MaterialCommunityIcons name="message-outline" size={20} color="#696969" />
              <Text style={styles.txtFunctionsSettings}>Liên hệ đóng góp ý</Text>
              <FontAwesome style={styles.angle} name="angle-right" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>
            Tài khoản
          </Text>
          <View style={styles.settings}>
            <TouchableOpacity style={styles.touchOpSettings}>
              <Ionicons name="md-person-outline" size={20} color="#696969" />
              <Text style={styles.txtFunctionsSettings}>thông tin cá nhân</Text>
              <FontAwesome style={styles.angle} name="angle-right" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchOpSettings}>
              <Ionicons name="ios-location-outline" size={20} color="#696969" />
              <Text style={styles.txtFunctionsSettings}>Địa chỉ lưu</Text>
              <FontAwesome style={styles.angle} name="angle-right" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchOpSettings}>
              <Ionicons name="settings-outline" size={20} color="#696969" />
              <Text style={styles.txtFunctionsSettings}>Cài đặt</Text>
              <FontAwesome style={styles.angle} name="angle-right" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchOpSettings}>
              <SimpleLineIcons name="logout" size={20} color="#696969" />
              <Text style={styles.txtFunctionsSettings}>Đăng xuất</Text>
              <FontAwesome style={styles.angle} name="angle-right" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  applications: {
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: 25,
  },
  functions: {
    flexDirection: 'column',
  },
  musicPlayingAndTerms: {
    flexDirection: 'row',
  },
  touchOpHistory: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  touchOpMusicPlayingAndTerms: {
    flex: 1,
    padding: 15,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  txtFunctions: {
    fontSize: 15,
    color: '#696969',
    marginTop: 10,
  },
  txtFunctionsSettings: {
    fontSize: 15,
    color: '#696969',
    paddingLeft: 10,
    flex: 1,
  },
  settings: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 10,
  },
  touchOpSettings: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#BEBEBE',
  },
  angle: {
  },
})