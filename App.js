import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './routes/MyDrawer';


AppRegistry.registerComponent('todo-navigation', () => MyDrawer);
export default function App() {
  return (
    <NavigationContainer >
      <MyDrawer />
    </NavigationContainer>
  );
}
