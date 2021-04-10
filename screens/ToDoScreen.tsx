import React, { useState } from 'react';
import { StyleSheet, FlatList, KeyboardAvoidingView} from 'react-native';
import ToDoItem from '../components/ToDoItem';
import { Text, View } from '../components/Themed'
import { TextInput } from 'react-native-gesture-handler';

export default function ToDoScreen() {

  const id = '4';

  const [todos, setTodos] = useState([
    {
    id: '1',
    content: "Buy milk",
    isCompleted: false
    },
    {
      id: '2',
      content: "Pour Milk",
      isCompleted: false
    },
])

const createNewItem = (atIndex: number) => {
  const newTodos = [...todos];
  newTodos.splice(atIndex, 0, {
    id: id,
    content: "",
    isCompleted: false
  })
  setTodos(newTodos);
}

  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput style={styles.title} placeholder="Title"/>

      <FlatList 
        data={todos} 
        renderItem={({item, index}) => 
          <ToDoItem 
            todo={item} 
            onSubmit={() => createNewItem(index + 1)}
        />}
        removeClippedSubviews={false}
        style={{width: "100%"}}
      />

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },
  title: {
    width: "100%",
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
    marginBottom: 10
  },
});
