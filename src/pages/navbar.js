import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconE from 'react-native-vector-icons/Entypo';
import IconI from 'react-native-vector-icons/Ionicons';
import IconA from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Navbar = ({handleSubmit, NavColor}) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        paddingHorizontal: 50,
        paddingBottom: 20,
      }}>
      <TouchableOpacity
        onPress={() => {
          handleSubmit('Home');
        }}
        style={{
          alignItems: 'center',
        }}>
        <IconA
          name="home"
          size={25}
          color={NavColor === 'home' ? '#003366' : 'black'}
        />
        <Text
          style={{
            color: NavColor === 'home' ? '#003366' : 'black',
            fontWeight: '500',
          }}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleSubmit('Transfer');
        }}
        style={{
          alignItems: 'center',
        }}>
        <IconMC
          name="bank-transfer"
          size={25}
          color={NavColor === 'transfer' ? '#003366' : 'black'}
        />
        <Text
          style={{
            color: NavColor === 'transfer' ? '#003366' : 'black',
            fontWeight: '500',
          }}>
          Transfer
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          handleSubmit('Profile');
        }}
        style={{
          alignItems: 'center',
        }}>
        <IconI
          name="person-outline"
          size={25}
          color={NavColor === 'profile' ? '#003366' : 'black'}
        />
        <Text
          style={{
            color: NavColor === 'profile' ? '#003366' : 'black',
            fontWeight: '500',
          }}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
