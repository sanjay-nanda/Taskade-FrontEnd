import React, { useState } from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const signUp = () => {

    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const onSubmit = () => {};

    return <View style={{ padding: 12}}>

        <TextInput 
            placeholder="Your Name"
            value={name}
            onChangeText={setName}
            style={{
            width: "100%",
            fontSize: 18,
            marginVertical: 25
        }}
        /> 

        <TextInput 
            placeholder="youremail@email.com"
            value={email}
            onChangeText={setEmail}
            style={{
                width: "100%",
                fontSize: 18,
                marginVertical: 25
            }}
            />

            <TextInput 
            placeholder="Your Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={{
                width: "100%",
                fontSize: 18,
                marginVertical: 25
            }}
            />

            <Pressable 
            onPress={onSubmit} 
            style={{
                backgroundColor: '#e33062',
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                marginTop: 20    
            }
            }>
            <Text style={{ color: 'white', fontSize: 18}}>Sign Up</Text>
            </Pressable>

            <Pressable 
            onPress={ () => navigation.navigate('SignIn')} 
            style={{
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                marginTop: 20    
            }
            }>
            <Text style={{ color: '#e33062', fontSize: 18}}>Already Have an account? Sign Up</Text>
            </Pressable>
    </View>;
}

export default signUp;