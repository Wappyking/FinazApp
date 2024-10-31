import React, {useState, useEffect, onChangeText} from 'react';
import {
  AppState,
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView, State} from 'react-native-gesture-handler';
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
import {User, initAuth} from '../redux';
import {connect} from 'react-redux';

const Login = ({navigation, dispLogin, AppState}) => {
  let UserState = AppState.user;
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = useState({});

  const [isFormValid, setIsFormValid] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    // Trigger form validation when name,
    // email, or password changes
    // validateForm();
  }, [phoneNumber, password]);

  const validateForm = () => {
    let errors = {};

    // Validate name field
    if (!phoneNumber) {
      errors.phoneNumber = 'phone number is required.';
    } else if (phoneNumber.length < 10) {
      errors.phoneNumber = 'phone number must be at least 11 characters.';
    }

    // Validate email field
    // if (!email) {
    //   errors.email = 'Email is required.';
    // } else if (!/\S+@\S+\.\S+/.test(email)) {
    //   errors.email = 'Email is invalid.';
    // }

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

  function Success(back) {
    return (
      <ScrollView
        style={{
          backgroundColor: 'white',
          padding: 15,
        }}>
        <TouchableOpacity
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
        </TouchableOpacity>

        <View
          style={{
            height: 600,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <IconMC
            name="checkbox-marked-circle-outline"
            size={100}
            color="green"
          />
          <Text
            style={{
              color: 'green',
              fontSize: 30,
              fontWeight: 700,
            }}>
            SUCCESS
          </Text>
        </View>
      </ScrollView>
    );
  }

  function Failed(back) {
    return (
      <ScrollView
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 15,
        }}>
        <TouchableOpacity
          onPress={changeValue}
          style={{
            width: 70,
            padding: 5,
            alignItems: 'center',
            flexDirection: 'row',
            gap: 2,
          }}>
          <IconI name="arrow-back" size={20} color="black" />
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: 500,
            }}>
            Back
          </Text>
        </TouchableOpacity>

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
    );
  }

  const handleSubmit = () => {
    if (isFormValid) {
      setIsError(false);
      let userData = {
        Fullname: 'Wappy King',
        email: 'wappyfresh@gmail.com',
        phoneNumber,
        password,
        Referral: 'ghsjhsh',
      };
      dispLogin(userData);
      // Form is valid, perform the submission logic
      console.log('Form submitted successfully!');
      console.log([phoneNumber, password]);
    } else {
      setIsError(true);
      // Form is invalid, d

      console.log('Form has errors. Please correct them.');
    }
  };

  const SignUp = () => {
    navigation.push('SignUp');
  };
  return (
    <>
      {console.log(AppState)}
      {isError == false && navigation.replace('Dashboard')}

      {isError == true && navigation.push('Error')}

      {isError == null && (
        <ScrollView style={{backgroundColor: 'white'}}>
          <View style={{margin: 25}}>
            <Text style={{fontSize: 25, color: 'black'}}> Welcome back,</Text>
            <Text style={{fontSize: 15, color: 'black'}}>
              {' '}
              Enter your credentials to continue
            </Text>
          </View>

          <TextInput
            keyboardType="numeric"
            style={{
              borderColor: 'grey',
              borderWidth: 2,

              borderRadius: 15,
              marginHorizontal: 15,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 15,
              color: 'black',
              height: 45,
            }}
            placeholder="Enter phone number...."
            placeholderTextColor={'grey'}
            value={phoneNumber}
            onChangeText={value => {
              // console.log();
              setPhoneNumber(value);
              validateForm();
            }}
          />
          <Text style={{color: 'red', marginHorizontal: 25, marginBottom: 25}}>
            {errors.phoneNumber}
          </Text>

          <TextInput
            secureTextEntry={true}
            style={{
              borderColor: 'grey',
              borderWidth: 2,
              borderRadius: 15,
              marginHorizontal: 15,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 15,
              color: 'black',
              height: 45,
            }}
            placeholder="enter password"
            placeholderTextColor={'grey'}
            value={password}
            onChangeText={value => {
              // console.log();
              setPassword(value);
              validateForm();
            }}
          />
          <Text style={{color: 'red', marginHorizontal: 25}}>
            {errors.password}
          </Text>

          <TouchableOpacity>
            <Text style={{fontSize: 18, margin: 25, color: 'darkred'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSubmit}
            style={{
              backgroundColor: 'darkred',
              borderRadius: 10,
              margin: 25,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 25,
                margin: 15,
                color: 'white',
                alignSelf: 'center',
              }}>
              Login
            </Text>
          </TouchableOpacity>

          <View
            style={{
              marginHorizontal: 25,
              flexDirection: 'row',
              gap: 5,
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 18, color: 'black'}}>
              Don't have an account?
            </Text>

            <TouchableOpacity onPress={SignUp}>
              <Text style={{fontSize: 18, color: 'darkred'}}>Signup</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
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
    dispLogin: payload => {
      dispatch(User(payload));
    },
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(Login);
