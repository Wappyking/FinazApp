import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import IconE from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Ionicons';
import IconF6 from 'react-native-vector-icons/FontAwesome6';
import IconA from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';

const Success = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          paddingHorizontal: 15,
          paddingVertical: 70,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            gap: 30,
            alignItems: 'center',
            marginTop: 70,
          }}>
          <Image
            source={require('../../assets/success.png')}
            style={{
              height: 185,
              width: 320,
            }}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Your transaction is successful!
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#003366',
            height: 45,
            justifyContent: 'center',
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
              fontWeight: '500',
            }}>
            Go Back Home
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Success;
