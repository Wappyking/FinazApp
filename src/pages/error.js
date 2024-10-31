import React from 'react';
import {useEffect, useState, onChangeText} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
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

const Error = () => {
  const [isError, setIsError] = useState(null);
  const changeValue = () => {
    setIsError(null);
  };
  return (
    <>
      <ScrollView
        style={{
          backgroundColor: 'white',
          padding: 15,
        }}>
        {/* <TouchableOpacity
          onPress={changeValue}
          style={{
            backgroundColor: 'green',
            width: 70,
            padding: 5,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <IconI name="arrow-back" size={20} color="white" />
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 500,
            }}>
            Back
          </Text>
        </TouchableOpacity> */}

        <View
          style={{
            height: 600,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <IconM name="error" size={100} color="red" />
          <Text
            style={{
              color: 'red',
              fontSize: 30,
              fontWeight: 700,
            }}>
            ERROR
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Error;
