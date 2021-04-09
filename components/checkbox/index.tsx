import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Pressable} from 'react-native';

interface CheckBoxProps{
    isChecked: boolean,
    onPress: () => void
}

const CheckBox = (props: CheckBoxProps) => {

const onPress = props.onPress;
const name = props.isChecked ? "checkbox-marked-outline" : 'checkbox-blank-outline'

return (
    <View>
        <Pressable onPress={onPress}>
        <MaterialCommunityIcons name={name} size={24}/>
        </Pressable>
    </View>
);

}

export default CheckBox;