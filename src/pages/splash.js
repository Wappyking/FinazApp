import React from 'react';
import {Image, StatusBar, View} from 'react-native';

const Splash = () => {
  return (
    <>
      <View
        style={{
          backgroundColor: '#003366',
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/logo.png')}
          style={{
            height: 95,
            width: 120,
          }}
        />
      </View>
      <StatusBar backgroundColor={'#003366'} />
    </>
  );
};

export default Splash;
