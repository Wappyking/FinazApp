import React from 'react';
import {Image, Text, View} from 'react-native';
import Navbar from './navbar';
import {User} from '../redux';
import {connect} from 'react-redux';

const Profile = ({navigation, AppState}) => {
  const data = AppState.user;

  const changePage = value => {
    navigation.replace(value);
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingHorizontal: 15,
          paddingTop: 50,
        }}>
        <Image
          source={require('../../assets/dp.png')}
          style={{
            height: 75,
            width: 75,
            alignSelf: 'center',
            marginBottom: 30,
          }}
        />
        <View
          style={{
            gap: 20,
          }}>
          <View
            style={{
              borderWidth: 0.7,
              borderColor: 'lightgrey',
              paddingVertical: 10,
              borderRadius: 7,
              paddingHorizontal: 15,
            }}>
            <Text
              style={{
                color: '#003366',
                fontSize: 12,
                position: 'absolute',
                top: -8,
                left: 18,
              }}>
              Name
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
              }}>
              {data.Fullname}
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0.7,
              borderColor: 'lightgrey',
              paddingVertical: 10,
              borderRadius: 7,
              paddingHorizontal: 15,
            }}>
            <Text
              style={{
                color: '#003366',
                fontSize: 12,
                position: 'absolute',
                top: -8,
                left: 18,
              }}>
              Email
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
              }}>
              {data.email}
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0.7,
              borderColor: 'lightgrey',
              paddingVertical: 10,
              borderRadius: 7,
              paddingHorizontal: 15,
            }}>
            <Text
              style={{
                color: '#003366',
                fontSize: 12,
                position: 'absolute',
                top: -8,
                left: 18,
              }}>
              Phone Number
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
              }}>
              {data.PhoneNumber}
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0.7,
              borderColor: 'lightgrey',
              paddingVertical: 10,
              borderRadius: 7,
              paddingHorizontal: 15,
            }}>
            <Text
              style={{
                color: '#003366',
                fontSize: 12,
                position: 'absolute',
                top: -8,
                left: 18,
              }}>
              Date of Birth
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
              }}>
              {data.DOB}
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0.7,
              borderColor: 'lightgrey',
              paddingVertical: 10,
              borderRadius: 7,
              paddingHorizontal: 15,
            }}>
            <Text
              style={{
                color: '#003366',
                fontSize: 12,
                position: 'absolute',
                top: -8,
                left: 18,
              }}>
              Gender
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
              }}>
              {data.Gender}
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0.7,
              borderColor: 'lightgrey',
              paddingVertical: 10,
              borderRadius: 7,
              paddingHorizontal: 15,
            }}>
            <Text
              style={{
                color: '#003366',
                fontSize: 12,
                position: 'absolute',
                top: -8,
                left: 18,
              }}>
              Country
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
              }}>
              {data.Country}
            </Text>
          </View>
        </View>
      </View>
      <Navbar NavColor={'profile'} handleSubmit={changePage} />
    </>
  );
};

const MapStateToProps = state => {
  return {AppState: state.user};
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

export default connect(MapStateToProps, MapDispatchToProps)(Profile);
