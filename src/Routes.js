import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './Login';
import Home from './Home';

const routes = createStackNavigator({
    Login: {
        screen: Login
    },
    Home: {
        screen: Home
    }
}, {
        headerMode: 'none',
        initialRouteName:'Login'
    })

export default createAppContainer(routes);