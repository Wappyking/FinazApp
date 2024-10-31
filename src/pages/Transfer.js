import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconE from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Ionicons';
import IconF6 from 'react-native-vector-icons/FontAwesome6';
import IconA from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import Navbar from './navbar';
import {Transactions2} from '../utilities/data';

const Transfer = ({navigation}) => {
  const changePage = value => {
    navigation.replace(value);
  };

  var RenderItems = ({data}) => {
    return (
      <>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            marginHorizontal: 15,
            marginVertical: 5,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'lightgrey',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 10,
              flexDirection: 'row',
              gap: 20,
              backgroundColor: '#FAFAFA',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {data.Name == 'Apple' && (
              <IconA name="apple-o" size={25} color="black" />
            )}
            {data.Name == 'Amazon' && (
              <IconA name="amazon" size={25} color="black" />
            )}
            {data.Name == 'Google' && (
              <IconA name="google" size={25} color="black" />
            )}

            <View
              style={{
                gap: 5,
                width: '85%',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  {data.Name}
                </Text>
                <Text
                  style={{
                    color: data.Status == true ? 'green' : 'red',
                    fontSize: 16,
                    fontWeight: '400',
                  }}>
                  {data.Status == true ? '+' : '-'}
                  {data.Amount}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 12,
                    fontWeight: '400',
                  }}>
                  {data.Date}
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    fontSize: 12,
                    fontWeight: '400',
                  }}>
                  {data.Time}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 15,
          paddingTop: 30,
          paddingBottom: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/dp.png')}
              style={{
                height: 20,
                width: 20,
                borderRadius: 50,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                fontWeight: 500,
              }}>
              Welcome Wappy
            </Text>
          </View>
          <TouchableOpacity>
            <IconI name="notifications-outline" size={15} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 15,
            backgroundColor: '#FAFAFA',
            borderRadius: 10,
            gap: 15,
            flexDirection: 'row',
            alignItems: 'center',
            height: 40,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: 'center',
              paddingHorizontal: 10,
              borderRadius: 25,
            }}>
            <Text
              style={{
                color: '#003366',
              }}>
              Day
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: 'center',
              paddingHorizontal: 10,
              borderRadius: 25,
            }}>
            <Text
              style={{
                color: '#003366',
              }}>
              Week
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#003366',
              height: 40,
              justifyContent: 'center',
              paddingHorizontal: 10,
              borderRadius: 25,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
              }}>
              Month
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: 'center',
              paddingHorizontal: 10,
              borderRadius: 25,
            }}>
            <Text
              style={{
                color: '#003366',
              }}>
              Year
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: 'center',
              paddingHorizontal: 10,
              borderRadius: 25,
            }}>
            <Text
              style={{
                color: '#003366',
              }}>
              All
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 10,
            paddingHorizontal: 15,
            backgroundColor: '#FAFAFA',
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
            height: 40,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <IconE name="chevron-left" size={20} color="#003366" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#003366',
              }}>
              July
            </Text>
            <IconA name="caretdown" size={10} color="#003366" />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconE name="chevron-right" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            gap: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 170,
              width: 160,
              backgroundColor: '#04AFAF',
              borderRadius: 10,
            }}>
            <Image
              source={require('../../assets/vector2.png')}
              style={{
                height: 115,
                width: 160,
                borderRadius: 10,
                opacity: 0.7,
              }}
            />
            <View
              style={{
                paddingHorizontal: 10,
              }}>
              <Text>Credits</Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: '700',
                }}>
                + <IconF6 name="naira-sign" size={12} color="white" />
                400,000.00
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 170,
              width: 160,
              backgroundColor: '#D16645',
              borderRadius: 10,
            }}>
            <Image
              source={require('../../assets/vector2.png')}
              style={{
                height: 115,
                width: 160,
                borderRadius: 10,
                opacity: 0.7,
              }}
            />
            <View
              style={{
                paddingHorizontal: 10,
              }}>
              <Text>Debits</Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: '700',
                }}>
                - <IconF6 name="naira-sign" size={12} color="white" />
                100,000.00
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: '500',
            }}>
            Transaction History
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: '#003366',
                fontWeight: '500',
              }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={Transactions2}
        style={{
          backgroundColor: 'white',
          marginBottom: 72,
        }}
        renderItem={({item}) => <RenderItems data={item} />}
        keyExtractor={item => item.id}
      />

      <Navbar NavColor={'transfer'} handleSubmit={changePage} />
    </>
  );
};

export default Transfer;
