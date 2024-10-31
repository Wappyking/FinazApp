import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const Request = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingHorizontal: 15,
          paddingVertical: 50,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            gap: 15,
          }}>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '500',
              }}>
              Recipient Account
            </Text>
            <TextInput
              style={{
                height: 45,
                width: '99.9%',
                borderColor: 'grey',
                borderWidth: 1,
                marginTop: 3,
                borderRadius: 10,
                paddingHorizontal: 10,
              }}
              placeholder="56890543276"
              placeholderTextColor={'grey'}
            />
          </View>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '500',
              }}>
              Recipient Bank
            </Text>
            <TextInput
              style={{
                height: 45,
                width: '99.9%',
                borderColor: 'grey',
                borderWidth: 1,
                marginTop: 3,
                borderRadius: 10,
                paddingHorizontal: 10,
              }}
              placeholder="UBA"
              placeholderTextColor={'grey'}
            />
          </View>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontWeight: '500',
              }}>
              Amount
            </Text>
            <TextInput
              style={{
                height: 45,
                width: '99.9%',
                borderColor: 'grey',
                borderWidth: 1,
                marginTop: 3,
                borderRadius: 10,
                paddingHorizontal: 10,
              }}
              placeholder="$200"
              placeholderTextColor={'grey'}
            />
          </View>
        </View>
        <TouchableOpacity
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
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Request;
