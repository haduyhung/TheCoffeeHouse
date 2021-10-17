import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView, TextInput } from 'react-native'
import RnIcon from "react-native-vector-icons/Ionicons";
import Swiper from 'react-native-swiper'
import Modal from 'react-native-modal';
import { cfLogin } from '../services/Api'

export default function Login({ navigation }) {
  const [phone, setPhone] = useState()
  const [code, setCode] = useState()
  const [isVisible, setIsVisible] = useState(false)
  const onChangePhone = (val) => setPhone(val)
  const onChangeCode = (val) => setCode(val)

  const onCloseModal = () => {
    setIsVisible(false)
  }

  const onVerifyPhone = async () => {
    try {
      const response = await cfLogin({ phone: phone });
      console.log('rs', response.data.data);
      setIsVisible(true)

    } catch (error) {
      console.error(error.response);
    }
  }
  const onVerifyCode = async () => {
    try {
      const response = await cfLogin({ phone: phone, otp: code });
      console.log('rs', response.data);
      setIsVisible(false);
      navigation.navigate('TapApp');
    } catch (error) {
      console.error(error.response);
    }
  }


  return (
    <SafeAreaView>
      <View>
        <Image
          style={{ height: 230, width: '100%' }}
          source={{ uri: 'https://www.cukcuk.vn/wp-content/uploads/2019/09/foody-mobile-960x600-the-coffee-h-761-636304658264606242-1568800909178126962452-crop-1568800918203296009047.jpg' }}
        />
      </View>
      <View style={{ flex: 1 }}>
        <View style={{
          height: 800,
          marginTop: -30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: 'white'
        }}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20
          }}>
            <Text style={{
              fontSize: 20,
              fontFamily: 'Times New Roman',
              marginTop: 20
            }}>
              Wellcome to
            </Text>
            <Text style={{
              fontSize: 30,
              fontFamily: 'Showcard Gothic',
              fontWeight: 'bold',
              marginBottom: 50
            }}>
              The Coffee House
            </Text>
            <TextInput
              textAlign={'center'}
              maxLength={11}
              clearTextOnFocus={true}
              placeholder="Phone Number"
              secureTextEntry={false}
              value={phone}
              onChangeText={onChangePhone}
              style={{
                height: 60,
                width: '90%',
                fontSize: 24,
                borderColor: 'gray',
                borderWidth: 1,
                marginLeft: 5,
                fontFamily: 'Times New Roman',
                borderRadius: 10,
                marginBottom: 10,
                marginTop: 40
              }}
            />
            <TouchableOpacity
              onPress={onVerifyPhone}
              style={{
                height: 60,
                width: '90%',
                borderColor: 'gray',
                borderWidth: 1,
                marginLeft: 5,
                borderRadius: 10,
                marginBottom: 10,
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "gray"
              }}>
              <Text
                style={{
                  fontSize: 24,
                  color: 'white'
                }}>
                Đăng Nhập
              </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
              <View
                style={{
                  borderWidth: 1,
                  width: '34%',
                  height: 2,
                  marginRight: 10,
                  marginTop: 12,
                  borderColor: "#d8d5d5"
                }}>

              </View>
              <Text style={{ fontSize: 24 }}>Hoặc</Text>
              <View
                style={{
                  borderWidth: 1,
                  width: '34%', height: 2,
                  marginLeft: 10, marginTop: 12,
                  borderColor: "#d8d5d5"
                }}>

              </View>
            </View>
            <TouchableOpacity style={{
              height: 60,
              width: '90%',
              borderColor: 'blue',
              borderWidth: 1, marginLeft: 5,
              borderRadius: 10,
              marginBottom: 20,
              marginTop: 40, justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: "blue"
            }}>
              <Text style={{ fontSize: 24, color: 'white' }}>Tiếp tục bằng Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        testID={'modal'}
        isVisible={isVisible}
        onSwipeComplete={onCloseModal}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={{ justifyContent: 'flex-end', margin: 0 }}
      >
        <View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', height: 700 }}>
          <TouchableOpacity onPress={onCloseModal} style={{ position: 'absolute', top: 0, right: 0 }}>
            <RnIcon name="close" size={50} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 40 }}>nhập mã cho sdt:{phone}</Text>
          <Text style={{ fontSize: 18, marginVertical: 0 }}>Một mã Xác thực gồm 6 chữ số đã được gửi đến số </Text>
          <Text style={{ fontSize: 18, marginBottom: 20, marginVertical: 10 }}>điện thoại:{phone}</Text>
          <TextInput
            textAlign={'center'}
            maxLength={6}
            clearTextOnFocus={true}
            keyboardType="numeric"
            placeholder="Mã OTP"
            secureTextEntry={false}
            value={code}
            onChangeText={onChangePhone}
            style={{
              height: 60,
              width: '90%',
              fontSize: 22,
              borderColor: 'gray',
              borderWidth: 1,
              marginLeft: 5,
              fontFamily: 'Times New Roman',
              borderRadius: 10, marginBottom: 20,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          />
          <TouchableOpacity onPress={onVerifyCode}
            style={{
              height: 60,
              width: '90%',
              borderColor: 'gray',
              borderWidth: 1,
              marginLeft: 5,
              borderRadius: 10,
              marginBottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: "gray"
            }}>
            <Text style={{ fontSize: 22, color: 'white' }}>Xác Nhận</Text>
          </TouchableOpacity>

        </View>
      </Modal>
    </SafeAreaView>
  )
}
