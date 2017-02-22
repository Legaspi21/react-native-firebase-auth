import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
    apiKey: 'AIzaSyB_xIlM29RBBrV4a6Ni5ovYK_gRgbfcuX0',
    authDomain: 'react-native-auth-e5062.firebaseapp.com',
    databaseURL: 'https://react-native-auth-e5062.firebaseio.com',
    storageBucket: 'react-native-auth-e5062.appspot.com',
    messagingSenderId: '589203064119'
		});
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;
