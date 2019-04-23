import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ToastAndroid,
    AsyncStorage,
    TouchableOpacity
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import * as LoginActions from './actions/LoginActions';
import { validateEmail } from './Utils';
import { users, StorageKeys } from './Constants';

class Login extends Component {

    componentDidMount() {
        AsyncStorage.getItem(StorageKeys.IS_LOGGED_IN)
            .then((result) => {
                if (result) {
                    this.redirectToHome()
                }
            })
    }

    redirectToHome = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home' })],
        });
        this.props.navigation.dispatch(resetAction);
    }

    handleLoginClick = () => {
        const { username, password } = this.props;
        if (!username) {
            ToastAndroid.show('Please enter the username', ToastAndroid.SHORT)
        } else if (!validateEmail(username)) {
            ToastAndroid.show('Please enter a valid username', ToastAndroid.SHORT)
        } else if (!password) {
            ToastAndroid.show('Please enter a password', ToastAndroid.SHORT)
        } else if (users.username !== username || users.password !== password) {
            ToastAndroid.show('Username and password does not match', ToastAndroid.SHORT)
        } else {
            AsyncStorage.setItem(StorageKeys.IS_LOGGED_IN, 'true')
            this.redirectToHome()
        }
    }

    render() {

        const { username, password } = this.props;

        return (
            <View style={styles.container}>

                <TextInput
                    style={styles.textInput}
                    value={username}
                    keyboardType="email-address"
                    placeholder="Enter the username"
                    underlineColorAndroid="#000"
                    onChangeText={(value) => this.props.setUserName(value)} />

                <TextInput
                    style={[styles.textInput, { marginTop: 20 }]}
                    secureTextEntry={true}
                    value={password}
                    underlineColorAndroid="#000"
                    placeholder="Enter the password"
                    onChangeText={(value) => this.props.setPassword(value)} />

                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={this.handleLoginClick}
                    style={styles.buttonLogin}>
                    <Text style={styles.buttonLabel}>
                        LOGIN
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    textInput: {
        fontSize: 16,
        color: '#000'
    },
    buttonLogin: {
        borderRadius: 10,
        marginTop: 30,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    buttonLabel: {
        fontSize: 16,
        color: '#fff'
    }
})

const mapStateToProps = (state) => ({
    username: state.login.username,
    password: state.login.password
})

const mapDispatchToProps = (dispatch) => (bindActionCreators(LoginActions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Login);