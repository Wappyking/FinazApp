import React from 'react';
import IconE from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Ionicons';
import IconF6 from 'react-native-vector-icons/FontAwesome6';
import IconA from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {User} from '../redux';
import {connect} from 'react-redux';

const AddMoney = ({navigation, AppState}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingHorizontal: 15,
          paddingVertical: 50,
        }}>
        <View
          style={{
            gap: 15,
          }}>
          <View
            style={{
              gap: 3,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '500',
              }}>
              Amount
            </Text>
            <View
              style={{
                paddingVertical: 2,
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 7,
                paddingHorizontal: 5,
                color: 'grey',
                height: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'grey',
                  fontSize: 15,
                }}>
                $10 - $100
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 2,
              borderWidth: 1,
              borderColor: 'grey',
              borderRadius: 7,
              paddingHorizontal: 5,
              color: 'grey',
              height: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'grey',
                fontSize: 15,
              }}>
              VISA **** **** **** 1234
            </Text>
            <IconE name="select-arrows" size={15} color="grey" />
          </View>

          <TextInput
            style={{
              paddingVertical: 2,
              borderWidth: 1,
              borderColor: 'grey',
              borderRadius: 7,
              paddingHorizontal: 3,
              color: 'black',
              height: 40,
            }}
            placeholder="Card Holder Name"
            placeholderTextColor={'grey'}
          />
          <TextInput
            style={{
              paddingVertical: 2,
              borderWidth: 1,
              borderColor: 'grey',
              borderRadius: 7,
              paddingHorizontal: 3,
              color: 'black',
              height: 40,
            }}
            placeholder={'Credit or Debit'}
            placeholderTextColor={'grey'}
          />
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                paddingVertical: 2,
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 7,
                paddingHorizontal: 3,
                color: 'black',
                height: 40,
                width: '70%',
              }}
              placeholder={'Expiration   MM/YY'}
              placeholderTextColor={'grey'}
            />
            <TextInput
              style={{
                paddingVertical: 2,
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 7,
                paddingHorizontal: 3,
                color: 'black',
                height: 40,
                width: '20%',
              }}
              placeholder={'cvv'}
              placeholderTextColor={'grey'}
            />
            <TouchableOpacity>
              <IconA name="questioncircleo" size={15} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#003366',
            height: 45,
            justifyContent: 'center',
            borderRadius: 20,
            position: 'absolute',
            width: '100%',
            alignSelf: 'center',
            bottom: 70,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
              fontWeight: '500',
            }}>
            Add Money
          </Text>
        </TouchableOpacity>
      </View>
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

export default connect(MapStateToProps, MapDispatchToProps)(AddMoney);
