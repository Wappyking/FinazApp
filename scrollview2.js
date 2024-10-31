<GestureHandlerRootView>
  <ScrollView style={{gap: 25}}>
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 15,
      }}>
      <View style={{width: '60%'}}>
        <Text style={{fontSize: 20, color: 'grey'}}>Hello Wappy,</Text>
        <Text style={{fontSize: 15, color: 'black'}}>
          Looking for a Perfect Gift
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          // alignContent: 'flex-end'
          justifyContent: 'space-around',
          width: '25%',
          marginRight: 20,
        }}>
        <View
          style={{
            borderColor: 'darkred',
            borderWidth: 5,
            width: 30,
            height: 30,
          }}></View>
        <View
          style={{
            borderColor: 'darkred',
            borderWidth: 5,
            width: 30,
            height: 30,
            borderRadius: 50,
          }}></View>
      </View>
    </View>

    <View
      style={{
        borderColor: 'black',
        borderWidth: 2,

        borderRadius: 15,
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text
        style={{
          padding: 15,
          backgroundColor: 'lightgrey',
          borderRadius: 15,
          width: '90%',
        }}>
        search gifts here.....
      </Text>
      <View
        style={{
          borderColor: 'black',
          borderWidth: 5,
          width: 30,
          height: 30,
          borderRadius: 50,
          margin: 2,
        }}></View>
    </View>

    <ScrollView horizontal={true}>
      <View
        style={{
          margin: 20,
          gap: 10,
          flexDirection: 'row',
        }}>
        <Image
          source={require('./assets/slider1.jpg')}
          style={{height: 150, width: 350}}
        />
        <Image
          source={require('./assets/slider2.jpg')}
          style={{height: 150, width: 350}}
        />
      </View>
    </ScrollView>

    <View style={{marginHorizontal: 20}}>
      <Text style={{fontSize: 15, color: 'black', marginBottom: 10}}>
        Gifts by recipient
      </Text>
      <ScrollView horizontal={true}>
        <View
          style={{
            margin: 5,
            gap: 10,
            flexDirection: 'row',
            marginBottom: 50,
          }}>
          <View
            style={{
              padding: 10,
              backgroundColor: 'darkred',
              width: 100,
              borderRadius: 15,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                textAlign: 'center',
              }}>
              General
            </Text>
          </View>

          <View
            style={{
              padding: 10,
              borderWidth: 1,
              width: 100,
              borderRadius: 15,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'darkred',
                textAlign: 'center',
              }}>
              Husband
            </Text>
          </View>
          <View
            style={{
              padding: 10,
              borderWidth: 1,
              width: 100,
              borderRadius: 15,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'darkred',
                textAlign: 'center',
              }}>
              Wife
            </Text>
          </View>

          <View
            style={{
              padding: 10,
              borderWidth: 1,
              width: 100,
              borderRadius: 15,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'darkred',
                textAlign: 'center',
              }}>
              Son
            </Text>
          </View>

          <View
            style={{
              padding: 10,
              borderWidth: 1,
              width: 100,
              borderRadius: 15,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'darkred',
                textAlign: 'center',
              }}>
              Daughter
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>

    <Text
      style={{
        backgroundColor: 'lightgrey',
        padding: 10,
        fontSize: 20,
        marginVertical: 15,
        color: 'black',
      }}>
      Hot Takes
    </Text>

    <ScrollView horizontal={true}>
      <View style={{margin: 20, gap: 30, flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: 'darkred',
            borderWidth: 5,
            borderColor: 'darkred',
          }}>
          <Image
            source={require('./assets/cake.jpg')}
            style={{height: 200, width: 200}}
          />
          <View style={{margin: 15, gap: 5}}>
            <Text style={{fontSize: 25, color: 'white', fontWeight: 500}}>
              Cake
            </Text>
            <Text style={{fontSize: 15, color: 'white'}}>#7,500</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'darkred',
            borderWidth: 5,
            borderColor: 'darkred',
          }}>
          <Image
            source={require('./assets/watch.jpg')}
            style={{height: 200, width: 200}}
          />
          <View style={{margin: 15, gap: 5}}>
            <Text style={{fontSize: 25, color: 'white', fontWeight: 500}}>
              Watch
            </Text>
            <Text style={{fontSize: 15, color: 'white'}}>#10,000</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'darkred',
            borderWidth: 5,
            borderColor: 'darkred',
          }}>
          <Image
            source={require('./assets/food.jpg')}
            style={{height: 200, width: 200}}
          />
          <View style={{margin: 15, gap: 5}}>
            <Text style={{fontSize: 25, color: 'white', fontWeight: 500}}>
              Food Tray
            </Text>
            <Text style={{fontSize: 15, color: 'white'}}>#30,000</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  </ScrollView>
</GestureHandlerRootView>;
