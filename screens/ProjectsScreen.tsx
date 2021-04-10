import React, {useState} from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ProjectItem from '../components/ProjectItem';
import { Text, View } from '../components/Themed';

export default function ProjectsScreen() {

  const [projects, setProjects] = useState([
    {
      id: '1',
      title: 'Project 1',
      createdAt: '2d'
    },
    {
      id: '2',
      title: 'Project 2',
      createdAt: '23d'
    },
    {
      id: '3',
      title: 'Project 3',
      createdAt: '23h'
    }
  ]);

  return (
    <View style={styles.container}>
      <FlatList 
      data={projects}
      renderItem={({item}) => <ProjectItem project={item}
      />}
      style={{width: "100%"}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
