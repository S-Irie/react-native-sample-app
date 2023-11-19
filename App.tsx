import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, FlatList } from "react-native";
import { Input } from "./src/components/Input";
import { Message } from "./src/components/Message";

type message = {
  text: string;
  id: number;
};

export default function App() {
  const [messages, setMessages] = useState<message[]>([]);
  const addEet = (text: string) => {
    if (text === "") return;
    setMessages([...messages, { text, id: Date.now() }]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Input onClick={addEet} />
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message text={item.text} />}
          keyExtractor={(item) => `${item.id}`}
        />
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#222",
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
