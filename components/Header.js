// components/Header.js

import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

function Header({ onAddTodo }) {
  const [text, setText] = useState(""); // 할 일 입력 상태

  // 텍스트 입력 변화 처리 함수
  const handleChangeText = (newText) => {
    setText(newText);
  };

  // "추가" 버튼 클릭 처리 함수
  const handlePressAdd = () => {
    if (text.trim()) {
      // 입력값이 공백이 아닌 경우
      onAddTodo(text); // 부모 컴포넌트로부터 전달받은 함수 호출
      setText(""); // 입력 필드 초기화
    }
  };

  return (
    <View style={styles.header}>
      <Text style={styles.title}>To do list</Text>
      <TextInput
        style={styles.input}
        placeholder="할 일을 입력하세요"
        value={text}
        onChangeText={handleChangeText}
      />
      <Button title="추가" onPress={handlePressAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default Header;
