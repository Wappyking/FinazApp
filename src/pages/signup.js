import {useEffect, useState, onChangeText} from 'react';
import React from 'react';
import {
  ActivityIndicator,
  Button,
  Image,
  KeyboardAvoidingView,
  StatusBar,
  Switch,
  SwitchBase,
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
import Error from './error';
import Success from './success';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {connect} from 'react-redux';
import {User} from '../redux';
// import {connect} from 'react-redux';
// import {User} from '../redux';

const Signup = ({navigation, route, dispSignUp, AppState}) => {
  const [Fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = useState({});
  const [isError, setIsError] = useState(null);

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Trigger form validation when name,
    // email, or password changes
  }, [Fullname, password, email]);

  const validateForm = () => {
    let errors = {};

    // Validate name field
    if (!Fullname) {
      errors.Fullname = 'Fullname  is required.';
    }

    // Validate email field
    if (!email) {
      errors.email = 'Email is required.';
    } else if (!/@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid.';
    }

    // Validate password field
    if (!password) {
      errors.password = 'password is required.';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    // Set the errors and update form validity
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const changeValue = () => {
    setIsError(null);
  };
  const Login = () => {
    return navigation.replace('Login');
  };

  const handleSubmit = () => {
    if (isFormValid) {
      var UserData = {
        Fullname,
        email,
        password,
        PhoneNumber: '09076001598',
        Gender: 'Male',
        DOB: '27 July, 2000',
        Country: 'Nigeria',
      };
      dispSignUp(UserData);
      setIsError(false);
      navigation.replace('Home');
      // Form is valid, perform the submission logic
      console.log('Form submitted successfully!');
      console.log([email, password]);
      console.log(UserData);
    } else {
      setIsError(true);
      // Form is invalid, d

      console.log('Form has errors. Please correct them.');
    }
  };

  return (
    <>
      <ScrollView
        style={{
          backgroundColor: 'white',
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
          Hello There!
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 16,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            marginTop: 20,
            gap: 5,
          }}>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '500',
              }}>
              Full Name
            </Text>
            <KeyboardAvoidingView>
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
                placeholder="Wappy Robson"
                value={Fullname}
                onChangeText={value => {
                  return validateForm(), setFullname(value);
                }}
              />
            </KeyboardAvoidingView>
            <Text style={{color: 'red'}}>{errors.Fullname}</Text>
          </View>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '500',
              }}>
              Email
            </Text>
            <KeyboardAvoidingView>
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
                value={email}
                onChangeText={value => {
                  return validateForm(), setEmail(value);
                }}
              />
            </KeyboardAvoidingView>
            <Text style={{color: 'red'}}>{errors.email}</Text>
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
            <KeyboardAvoidingView>
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
                value={password}
                onChangeText={value => {
                  return validateForm(), setPassword(value);
                }}
              />
            </KeyboardAvoidingView>
            <Text style={{color: 'red'}}>{errors.password}</Text>
          </View>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontWeight: '500',
              }}>
              Confirm Password
            </Text>
            <KeyboardAvoidingView>
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
                value={password}
                onChangeText={value => {
                  return validateForm(), setPassword(value);
                }}
              />
            </KeyboardAvoidingView>
          </View>
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
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
            Create Account
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
            Already have an account?
          </Text>
          <TouchableOpacity onPress={Login}>
            <Text
              style={{
                color: '#003366',
                marginTop: 3,
                fontWeight: '500',
              }}>
              Login
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
      </ScrollView>
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

export default connect(MapStateToProps, MapDispatchToProps)(Signup);
// export default Signup;
