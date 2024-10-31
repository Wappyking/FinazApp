import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
import Signup from './signup';
import {connect} from 'react-redux';
import {User} from '../redux';

const More = ({navigation, AppState}) => {
  const Logout = value => {
    dispLogout(null);
    navigation.replace('Login');
  };

  const profile = () => {
    return navigation.push('Profile');
  };

  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          padding: 15,
          paddingTop: 50,
          flex: 1,
        }}>
        <View
          style={{
            marginTop: 70,
            gap: 15,
          }}>
          <TouchableOpacity
            onPress={profile}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderColor: 'grey',
              borderWidth: 1,
              height: 50,
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 500,
              }}>
              Profile
            </Text>
            <IconA name="right" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderColor: 'grey',
              borderWidth: 1,
              height: 50,
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 500,
              }}>
              Settings
            </Text>
            <IconA name="right" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderColor: 'grey',
              borderWidth: 1,
              height: 50,
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 500,
              }}>
              Support
            </Text>
            <IconA name="right" size={22} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderColor: 'grey',
              borderWidth: 1,
              height: 50,
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 500,
              }}>
              Terms & Conditions
            </Text>
            <IconA name="right" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderColor: 'grey',
              borderWidth: 1,
              height: 50,
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 500,
              }}>
              Privacy Policy
            </Text>
            <IconA name="right" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderColor: 'grey',
              borderWidth: 1,
              height: 50,
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: 500,
              }}>
              Help
            </Text>
            <IconA name="right" size={22} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={Logout}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderColor: 'grey',
              borderWidth: 1,
              height: 50,
              width: '100%',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'red',
                fontSize: 18,
                fontWeight: 500,
              }}>
              Logout
            </Text>
            <IconA name="right" size={22} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const MapStateToProps = state => {
  return {AppState: state.User};
};

const MapDispatchToProps = (dispatch, endcoded) => {
  return {
    disInit: () => {
      dispatch(initAuth());
    },
    dispSignUp: payload => {
      dispatch(User(payload));
    },
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(More);
