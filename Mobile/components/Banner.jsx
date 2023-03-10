import { StyleSheet, View, Text } from "react-native";

let Banner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A Joke a day keeps the doctor away</Text>
      <Text style={styles.fact}>
        If you joke wrong way, your teeth have to pay. (Serious)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 180,
    backgroundColor: "#2ab363",
  },
  title: {
    paddingBottom: 25,
    fontSize: 18,
    color: "#ffffff",
  },
  fact: {
    fontSize: 12,
    color: "#ffffff",
  },
});

export default Banner;
