import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "./components/Header";
import Contents from "./components/Contents";

function App() {
  const [todos, setTodos] = useState([]);

  // 사용자가 새로운 할 일을 추가할 때 호출되는 함수
  const handleAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(), // 고유한 ID를 생성하기 위해 현재 시간을 사용
        text,
        isDone: false, // 새로 추가된 할 일의 초기 상태는 완료되지 않음으로 설정
      },
    ]);
  };

  // 할 일 삭제 함수
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 할 일의 상태(isDone)를 업데이트하는 함수
  const handleUpdateStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <View style={styles.container}>
      {/* 할 일을 추가할 수 있는 Header 컴포넌트 */}
      <Header onAddTodo={handleAdd} />

      {/* 할 일 목록을 보여주는 Contents 컴포넌트 */}
      <Contents
        todos={todos}
        onDelete={handleDelete}
        onUpdateStatus={handleUpdateStatus}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});

export default App;
