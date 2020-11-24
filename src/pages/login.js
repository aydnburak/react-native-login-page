import React, { Component } from 'react';
import { StyleSheet , View , Text ,ScrollView, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import LoginForm from './loginForm';

export default class Login extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headBackGround}/>
        <KeyboardAvoidingView behavior={"position"}>
            <View> 
          <Text style={styles.logo}>Login</Text>
          <Text style={styles.logoDescription}>Login page</Text>
        </View>
		
            <ScrollView>
                <View style={styles.loginArea}>
			        <Text style={styles.loginAreaTitle}>Login Area</Text>
			     	<Text style={styles.loginAreaDescription}>
					Unique Door No Easily Fill Your Entire Property Tax Using App
				    </Text>
                    <LoginForm/>
			    </View>
            </ScrollView>
            <View style={styles.signUpArea}>
						<Text style={styles.signUpDescription}>Don't have an account?</Text>
						<TouchableOpacity>
							<Text style={styles.signUpText}>Sign Up</Text>
						</TouchableOpacity>
					</View>
            </KeyboardAvoidingView>
		   </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical:80,
  },
  headBackGround:{
    position: 'absolute',
    borderBottomRightRadius : 300,
		top: 0,
		left: 0,
		height: '50%',
		width: '100%',
		backgroundColor: 'blue'
  },
  logo: {
  	textAlign: 'center',
		fontSize: 40,
		fontWeight: 'bold',
		color: '#f2f2f2'
	},
	logoDescription: {
  	textAlign: 'center',
		color: '#f2f2f2'
  },
  loginArea:{
    marginHorizontal: 40,
    marginVertical: 40,
		backgroundColor: '#FFF',
		padding: 20,
    borderRadius: 5,
    shadowColor: 'black',
		shadowOpacity: .2,
    shadowRadius: 3,
    shadowOffset: {
  		width:0,
			height: 2
    },
    elevation:10,
    
  },
  loginAreaTitle: {
    fontSize: 20,
    textAlign: 'center'
},
loginAreaDescription: {
    fontSize: 11,
    color: '#7e868f',
    marginVertical: 10,
    textAlign: 'center'
},
signUpArea: {
  alignItems: 'center'
},
signUpDescription: {
  color: '#999'
},
signUpText: {
  color: '#666'
},
});

