import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import Login from './src/pages/login';
import Signup from './src/pages/signup';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Success from './src/pages/success';
import Error from './src/pages/error';
import IconE from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconI from 'react-native-vector-icons/Ionicons';
import IconF6 from 'react-native-vector-icons/FontAwesome6';
import IconA from 'react-native-vector-icons/AntDesign';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Icons from 'react-native-vector-icons/FontAwesome6';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Splash from './src/pages/splash';
import GetStarted from './src/pages/getStarted';
import Welcome from './src/pages/welcome';
import Home from './src/pages/Home';
import Profile from './src/pages/Profile';
import Transfer from './src/pages/Transfer';
import AddMoney from './src/pages/AddMoney';
import SendMoney from './src/pages/SendMoney';
import More from './src/pages/More';
import Request from './src/pages/Request';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react';

const stack = createStackNavigator();
function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 300);
  }, []);

  return (
    <>
      <StatusBar backgroundColor={'#003366'} />
      

      <Provider store={store().store}>
        <PersistGate loading={null} persistor={store().persistor}>
          <NavigationContainer theme={DefaultTheme}>
            <stack.Navigator initialRouteName="Welcome">
              <stack.Screen
                name="Welcome"
                component={Welcome}
                options={{
                  title: '',
                  header: () => {
                    null;
                  },
                }}
              />
              <stack.Screen
                name="More"
                component={More}
                options={
                  {
                    // title: '',
                  }
                }
              />
              <stack.Screen
                name="Request"
                component={Request}
                options={{title: ''}}
              />
              <stack.Screen
                name="GetStarted"
                component={GetStarted}
                options={{
                  title: '',
                  header: () => {
                    null;
                  },
                }}
              />
              <stack.Screen
                name="Home"
                component={Home}
                options={{
                  title: '',
                  header: () => {
                    null;
                  },
                }}
              />
              <stack.Screen name="Success" component={Success} />

              <stack.Screen
                name="Splash"
                component={Splash}
                options={{
                  title: '',
                  header: () => {
                    null;
                  },
                }}
              />
              <stack.Screen
                name="Login"
                component={Login}
                options={{
                  title: '',
                  header: () => {
                    null;
                  },
                }}
              />

              <stack.Screen
                name="SignUp"
                component={Signup}
                options={{
                  title: '',
                }}
              />
              <stack.Screen name="Transfer" component={Transfer} options={{}} />

              <stack.Screen name="Profile" component={Profile} options={{}} />

              <stack.Screen
                name="SendMoney"
                component={SendMoney}
                options={{}}
              />

              <stack.Screen name="AddMoney" component={AddMoney} options={{}} />
            </stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>

      {/* <GestureHandlerRootView> */}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Profile /> */}
      {/* <Dashboard /> */}
      {/* <Twitter /> */}
      {/* <Facebook /> */}
      {/* <Sportybet /> */}
      {/* <Success /> */}
      {/* <Error /> */}
      {/* <Investment /> */}
      {/* <Splash /> */}
      {/* <GetStarted /> */}
      {/* <Welcome /> */}
      {/* <Home /> */}
      {/* <Success /> */}
      {/* <Profile /> */}
      {/* <Login /> */}
      {/* <AddMoney /> */}
      {/* <Signup /> */}
      {/* <Transfer /> */}
      {/* <SendMoney /> */}
      {/* </GestureHandlerRootView> */}
    </>
  );
}

export default App;
