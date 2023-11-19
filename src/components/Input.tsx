import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

type Props = {
  onClick: (text: string) => void;
};

export const Input: React.FC<Props> = ({ onClick }) => {
  const [text, setText] = useState("");
  const onPress = () => {
    onClick(text);
    setText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        onChangeText={(_text) => setText(_text)}
        value={text}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>投稿する</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  input: {
    flex: 1,
    borderColor: "rgb(29, 161, 242)",
    borderWidth: 2,
    marginRight: 10,
    borderRadius: 10,
    color: "white",
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: "rgb(29, 161, 242)",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "900",
    fontSize: 16,
  },
});
