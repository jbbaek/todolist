import React from "react";
import { View, Text, Switch, Button, StyleSheet, FlatList } from "react-native";

function Todo({ todo: { id, text, isDone }, onDelete, onUpdateStatus }) {
  return (
    <View style={styles.todoItem}>
      {/* 할 일 완료 여부를 표시하는 Switch와 텍스트를 표시 */}
      <Switch value={isDone} onValueChange={() => onUpdateStatus(id)} />
      <Text style={[styles.todoText, isDone && styles.completed]}>{text}</Text>
      <Button title="DELETE" onPress={() => onDelete(id)} />
    </View>
  );
}

function Contents({ todos, onDelete, onUpdateStatus }) {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Todo todo={item} onDelete={onDelete} onUpdateStatus={onUpdateStatus} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
  },
  todoText: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});

export default Contents;
