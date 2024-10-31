<GestureHandlerRootView>
  <ScrollView style={{height: 220}} horizontal={true}>
    <View
      style={{
        backgroundColor: 'grey',
        padding: 20,
        position: 'relative',
        alignItems: 'flex-start',
        flexDirection: 'row',
      }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((items, index) => {
        return (
          <>
            <Image
              key={index}
              source={require('./assets/greenluck.jpg')}
              style={{
                height: 200,
                width: 200,
              }}
            />
          </>
        );
      })}
    </View>
  </ScrollView>

  <ScrollView style={{height: '80%'}} horizontal={false}>
    <View
      style={{
        backgroundColor: 'grey',
        padding: 20,
        position: 'relative',
        alignItems: 'flex-start',
        flexDirection: 'column',
      }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((items, index) => {
        return (
          <>
            <Image
              key={index}
              source={require('./assets/greenluck.jpg')}
              style={{
                height: 200,
                width: 200,
              }}
            />
          </>
        );
      })}
    </View>
  </ScrollView>
</GestureHandlerRootView>;
