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
import {connect} from 'react-redux';
import {User} from '../redux';
import {Transactions} from '../utilities/data';

const Home = ({navigation, AppState}) => {
  const data = AppState.user;
  const More = () => {
    return navigation.navigate('More');
  };
  const Send = () => {
    return navigation.push('SendMoney');
  };
  const addMoney = () => {
    return navigation.push('AddMoney');
  };
  const request = () => {
    return navigation.push('Request');
  };
  const changePage = value => {
    navigation.push(value);
  };

  var RenderItems = ({data}) => {
    return (
      <>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            marginHorizontal: 15,
            marginVertical: 5,
            borderRadius: 10,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 10,
              flexDirection: 'row',
              gap: 20,
              backgroundColor: '#FAFAFA',
              borderRadius: 10,
            }}>
            <View
              style={{
                width: '10%',
              }}>
              <Image
                source={require('../../assets/dp.png')}
                style={{
                  height: 35,
                  width: 35,
                  borderRadius: 50,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  right: -7,
                  bottom: 4,
                }}>
                <IconA
                  name={data.Status == true ? 'arrowdown' : 'arrowup'}
                  size={7}
                  color={data.Status == true ? 'green' : 'red'}
                />
              </View>
            </View>
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
                  {data.TransactionType} Money
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
  return data == null ? (
    navigation.replace('Login')
  ) : (
    <>
      <View
        style={{
          padding: 15,
          backgroundColor: 'white',
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
                height: 30,
                width: 30,
                borderRadius: 50,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontWeight: 500,
              }}>
              Welcome {data.Fullname}
            </Text>
          </View>
          <TouchableOpacity>
            <IconI name="notifications-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#003366',
            height: 110,
            borderRadius: 20,
            padding: 15,
            gap: 10,
            marginTop: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
              }}>
              Current Balance
            </Text>
            <IconA name="eyeo" size={20} color="white" />
          </View>
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                fontWeight: 'bold',
              }}>
              700,000.00
            </Text>
          </View>
          <Image
            source={require('../../assets/VectorHome.png')}
            style={{
              height: 110,
              width: 130,
              position: 'absolute',
              alignSelf: 'flex-end',
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
            }}
          />
        </View>
        <View
          style={{
            marginVertical: 20,
            gap: 15,
            flexDirection: 'row',
          }}>
          <View>
            <TouchableOpacity
              onPress={Send}
              style={{
                backgroundColor: '#003366',
                width: 70,
                height: 70,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <IconA name="arrowup" size={30} color="white" />
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                fontWeight: 500,
                alignSelf: 'center',
                marginTop: 5,
              }}>
              Send
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={addMoney}
              style={{
                backgroundColor: '#FAFAFA',
                width: 70,
                height: 70,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <IconE name="plus" size={30} color="#003366" />
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                alignSelf: 'center',
                marginTop: 5,
                fontWeight: 500,
              }}>
              Add Money
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={request}
              style={{
                backgroundColor: '#FAFAFA',
                width: 70,
                height: 70,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <IconA name="arrowdown" size={30} color="#003366" />
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                alignSelf: 'center',
                marginTop: 5,
                fontWeight: 500,
              }}>
              Request
            </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={More}
              style={{
                backgroundColor: '#FAFAFA',
                width: 70,
                height: 70,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <IconE name="dots-three-horizontal" size={30} color="#003366" />
            </TouchableOpacity>
            <Text
              style={{
                color: 'black',
                fontSize: 13,
                alignSelf: 'center',
                marginTop: 5,
                fontWeight: 500,
              }}>
              More
            </Text>
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
            Recent Activity
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
        data={Transactions}
        style={{backgroundColor: 'white', marginBottom: 70}}
        renderItem={({item}) => <RenderItems data={item} />}
        keyExtractor={item => item.id}
      />

      <Navbar NavColor={'home'} handleSubmit={changePage} />
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

export default connect(MapStateToProps, MapDispatchToProps)(Home);
