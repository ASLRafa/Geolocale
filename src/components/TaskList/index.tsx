import React from 'react';
import {FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Task {
  id: string;
  title: string;
}
interface TaskListProps {
  tasks: Task[];
}
export const TaskList = ({tasks}: TaskListProps) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity style={style.buttontask}>
          <Text style={style.titletask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const style = StyleSheet.create({
  buttontask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    marginBottom: 13,
    borderRadius: 50,
    alignItems: 'center',
  },
  titletask: {
    color: '#f1f1f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
