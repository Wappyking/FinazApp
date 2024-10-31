import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import IconE from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Ionicons';
import IconF6 from 'react-native-vector-icons/FontAwesome6';
import IconA from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView} from 'react-native-gesture-handler';

const SendMoney = () => {
  return (
    <>
      <ScrollView style={{}}>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 15,
            paddingTop: 50,
          }}>
          <View
            style={{
              paddingVertical: 2,
              borderRadius: 7,
              paddingHorizontal: 5,
              color: 'grey',
              height: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#FAFAFA',
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
          <Text
            style={{
              color: '#003366',
              marginTop: 30,
              fontWeight: '700',
              marginBottom: 5,
            }}>
            Choose transaction
          </Text>
          <View
            style={{
              gap: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#003366',
                height: 90,
                width: 100,
                paddingHorizontal: 10,
                gap: 5,
                paddingVertical: 15,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
              }}>
              <IconFontisto name="credit-card" size={20} color="white" />

              <Text
                style={{
                  color: 'white',
                }}>
                Transfer via card number
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'darkgrey',
                height: 90,
                width: 100,
                paddingRight: 5,
                paddingLeft: 10,
                gap: 5,
                paddingVertical: 15,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
              }}>
              <IconI name="person" size={20} color="white" />

              <Text
                style={{
                  color: 'white',
                }}>
                Transfer to the same bank
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: 'darkgrey',
                height: 90,
                width: 100,
                paddingRight: 5,
                paddingLeft: 10,
                gap: 5,
                paddingVertical: 15,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
              }}>
              <IconF name="bank" size={20} color="white" />

              <Text
                style={{
                  color: 'white',
                }}>
                Transfer to the same bank
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text
              style={{
                color: '#003366',
                fontWeight: '700',
                marginBottom: 5,
              }}>
              Choose beneficiary
            </Text>
            <Text
              style={{
                color: 'skyblue',
                fontWeight: '700',
                marginBottom: 5,
              }}>
              Favorite
            </Text>
          </View>
        </View>
        <ScrollView
          horizontal={true}
          style={{
            gap: 15,
            backgroundColor: 'white',
            paddingLeft: 15,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'darkgrey',
              height: 100,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 15,
              borderRadius: 5,
            }}>
            <IconA name="pluscircle" size={50} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FAFAFA',
              height: 100,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              gap: 5,
              marginRight: 15,
              borderRadius: 5,
            }}>
            <Image
              source={require('../../assets/Emma.png')}
              style={{
                height: 50,
                width: 50,
              }}
            />
            <Text
              style={{
                color: 'black',
              }}>
              Emma
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FAFAFA',
              height: 100,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              gap: 5,
              marginRight: 15,
              borderRadius: 5,
            }}>
            <Image
              source={require('../../assets/justin.png')}
              style={{
                height: 50,
                width: 50,
              }}
            />
            <Text
              style={{
                color: 'black',
              }}>
              Justin
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#FAFAFA',
              height: 100,
              width: 80,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              gap: 5,
              marginRight: 15,
              borderRadius: 5,
            }}>
            <Image
              source={require('../../assets/Emma.png')}
              style={{
                height: 50,
                width: 50,
              }}
            />
            <Text
              style={{
                color: 'black',
              }}>
              Emma
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
            backgroundColor: '#FAFAFA',
            paddingHorizontal: 15,
            paddingBottom: 10,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              gap: 20,
              marginVertical: 10,
              paddingTop: 15,
              paddingHorizontal: 15,
              borderRadius: 15,
            }}>
            <TextInput
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1.2,
                borderRadius: 15,
                borderColor: 'lightgrey',
                padding: 7,
                color: 'black',
              }}
              placeholderTextColor={'grey'}
              placeholder="Full Name"
            />
            <TextInput
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1.2,
                borderRadius: 15,
                borderColor: 'lightgrey',
                padding: 7,
                color: 'black',
              }}
              placeholderTextColor={'grey'}
              placeholder="Account Number"
            />
            <TextInput
              style={{
                height: 40,
                width: '100%',
                borderWidth: 1.2,
                borderRadius: 15,
                borderColor: 'lightgrey',
                padding: 7,
                color: 'black',
              }}
              placeholderTextColor={'grey'}
              placeholder="Amount"
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <IconA name="checksquareo" size={20} color="#003366" />
              <Text
                style={{
                  color: 'black',
                }}>
                Save to directory of beneficiary
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#003366',
                height: 45,
                justifyContent: 'center',
                borderRadius: 20,
                // position: 'absolute',
                width: '100%',
                alignSelf: 'center',
                // bottom: 70,
                marginVertical: 40,
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
        </View>
      </ScrollView>
    </>
  );
};

export default SendMoney;
