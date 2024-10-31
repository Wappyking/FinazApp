import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import IconE from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Ionicons';
import IconF6 from 'react-native-vector-icons/FontAwesome6';
import IconA from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {DarkTheme, DefaultTheme} from '@react-navigation/native';

const Login = ({navigation}) => {
  const CreateAccount = () => {
    return navigation.replace('SignUp');
  };
  return (
    <>
      <View
        style={{
          backgroundColor: DefaultTheme == DarkTheme ? 'black' : 'white',
          flex: 1,
          paddingHorizontal: 15,
          paddingVertical: 50,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            fontWeight: '700',
          }}>
          Welcome!
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
          }}>
          Sign in to continue
        </Text>
        <View
          style={{
            marginTop: 20,
            gap: 20,
          }}>
          <View
            style={{
              marginTop: 20,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '500',
              }}>
              Email
            </Text>
            <TextInput
              style={{
                height: 45,
                width: '100%',
                borderWidth: 1.2,
                borderRadius: 7,
                borderColor: '#003366',
                padding: 7,
                color: 'black',
              }}
              placeholderTextColor={'grey'}
              placeholder="Wappyfresh@gmail.com"
            />
          </View>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '500',
              }}>
              Password
            </Text>
            <TextInput
              style={{
                height: 45,
                width: '100%',
                borderWidth: 1.2,
                borderRadius: 7,
                borderColor: '#003366',
                padding: 7,
                color: 'black',
              }}
              placeholderTextColor={'grey'}
              placeholder="*************"
              secureTextEntry={true}
            />
          </View>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              color: '#003366',
              marginTop: 3,
              fontWeight: '500',
              alignSelf: 'flex-end',
            }}>
            Forget password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#003366',
            height: 45,
            justifyContent: 'center',
            borderRadius: 20,
            marginTop: 30,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
              fontWeight: '500',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            gap: 2,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              marginTop: 3,
              fontWeight: '500',
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={CreateAccount}>
            <Text
              style={{
                color: '#003366',
                marginTop: 3,
                fontWeight: '500',
              }}>
              Create account
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 40,
            gap: 2,
          }}>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: 'grey',
              width: '40%',
            }}></View>
          <Text
            style={{
              color: 'black',
              top: -8,
              fontWeight: '500',
            }}>
            or with
          </Text>
          <View
            style={{
              borderTopWidth: 1,
              width: '40%',
              borderColor: 'grey',
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity>
            <IconA name="google" size={25} color="#003366" />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconA name="facebook-square" size={25} color="#003366" />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconA name="apple1" size={25} color="#003366" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
