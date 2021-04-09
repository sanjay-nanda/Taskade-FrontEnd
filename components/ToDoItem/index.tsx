import React, {useState, useEffect, useRef} from 'react';
import { View, TextInput} from 'react-native'
import CheckBox from '../checkbox/index'

interface ToDoITemProps {
  todo: {
    id: string,
    content: string,
    isCompleted: boolean
  },
  onSubmit: () => void
}

const ToDoItem = ({ todo, onSubmit }: ToDoITemProps) => {

  const [check, setCheck] = useState(false);
  const [content, setContent] = useState("");

  const input = useRef(null);
  const onKeyPress = ({nativeEvent}) => {
    if(nativeEvent.key === "Backspace" && content === ""){
      console.warn('Delete Item');
    }
  }

  useEffect(() => {
    if(!todo) return;
    setCheck(todo.isCompleted)
    setContent(todo.content)
  }, [todo]);

  useEffect(() => {
    if(input.current){
      input?.current?.focus()
    }
  }, [])

    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5}}>
        <CheckBox 
          isChecked={check} 
          onPress={ () => {setCheck(!check)}}
        />
        <TextInput
          ref={input}
          value={content}
          underlineColorAndroid="transparent"
          onChangeText={setContent}
          multiline
          style={{
            flex: 1,
            fontSize: 18,
           marginLeft: 12
          }}
          onSubmitEditing={onSubmit}
          blurOnSubmit
          onKeyPress={onKeyPress}
        />
    </View>
    );
}

export default ToDoItem;