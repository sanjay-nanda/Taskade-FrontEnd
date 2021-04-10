import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface ProjectItemProps {
    project: {
        id: string,
        title: string,
        createdAt: string
    }
}

const ProjectItem = ({project}: ProjectItemProps) => {

const navigation = useNavigation();

const onPress = () => {
    navigation.navigate('ToDos', { id: project.id})
}

return (
    <Pressable onPress={onPress} style={styles.root}>
    <View style={styles.iconContainer}>
      <MaterialCommunityIcons name="file-outline" size={24} color="gray"/>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
    <Text style={styles.title}>{project.title}</Text>
    <Text style={styles.time}>{project.createdAt}</Text>
    </View>
  </Pressable>
);
}

const styles = StyleSheet.create({
    
  title: {
    fontSize: 20,
    marginRight: 5
  },
  root: {
    flexDirection: 'row',
    width: "100%",
    padding: 10
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
    marginRight: 10
  },
  time: {
    color: "#A0A0A0"
  }
})

export default ProjectItem;