import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './routes/MyDrawer';
import store from './store/store';
import { Provider } from 'react-redux';



const App = () => (
    <Provider store={store}>
      <NavigationContainer >
        <MyDrawer />
      </NavigationContainer>
    </Provider>
  );

AppRegistry.registerComponent('todo-navigation', () => App);


export default App;