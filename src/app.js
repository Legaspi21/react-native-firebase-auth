import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = { loggedIn: null }

	componentWillMount() {
		firebase.initializeApp({
    apiKey: 'AIzaSyB_xIlM29RBBrV4a6Ni5ovYK_gRgbfcuX0',
    authDomain: 'react-native-auth-e5062.firebaseapp.com',
    databaseURL: 'https://react-native-auth-e5062.firebaseio.com',
    storageBucket: 'react-native-auth-e5062.appspot.com',
    messagingSenderId: '589203064119'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<CardSection>
						<Button onPress={() => firebase.auth().signOut()}>
							Log Out
						</Button>
					</CardSection>
				);
			case false:
				return <LoginForm />;
			default:
				return (
					<View style={styles.spinnerStyles}>
						<Spinner size="large" />
					</View>
				);
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

const styles = {
	spinnerStyles: {
		marginTop: 40
	}
};

export default App;
