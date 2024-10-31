import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {initAuth, User} from '../redux';
import {INITIALIZED} from '../redux/state/types';

const GetStarted = ({navigation, AppState, dispInit}) => {
  const getStarted = () => {
    dispInit();
    return navigation.replace('Login');
  };
  const initialized = AppState.initialized;

  return initialized == true ? (
    navigation.replace('Login')
  ) : (
    <>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            height: '60%',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: 30,
          }}>
          <Image
            source={require('../../assets/getstarted.png')}
            style={{
              height: 320,
              width: 256,
            }}
          />
        </View>
        <View
          style={{
            height: '40%',
            justifyContent: 'space-between',
            paddingBottom: 70,
          }}>
          <View style={{}}>
            <Text
              style={{
                color: 'black',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              Manage your finance effortlessly
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              Secure and easy transactions
            </Text>
          </View>
          <TouchableOpacity
            onPress={getStarted}
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
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const MapStateToProps = state => {
  return {AppState: state.user};
};

const MapDispatchToProps = (dispatch, endcoded) => {
  return {
    dispInit: () => {
      dispatch(initAuth());
    },
    dispSignUp: payload => {
      dispatch(User(payload));
    },
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(GetStarted);
