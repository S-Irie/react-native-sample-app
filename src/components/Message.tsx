import { StyleSheet, View, Text } from "react-native";

type Props = {
  text: string;
};

export const Message: React.FC<Props> = ({ text }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.contentText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: "rgb(29, 161, 242)",
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  contentText: {
    color: "white",
    fontSize: 16,
  },
});
