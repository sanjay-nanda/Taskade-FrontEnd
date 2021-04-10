import { useNavigation } from '@react-navigation/native';
import React, {useEffect} from 'react';
import { View, Text, ActivityIndicator} from 'react-native'

const SplashScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        if(isAuthenticated()) return navigation.navigate('Home')
        navigation.navigate('SignIn') 
    }, [])

    const isAuthenticated = () => {
        return false;
    }

    return <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="black"/>
    </View>
}
 
export default SplashScreen;