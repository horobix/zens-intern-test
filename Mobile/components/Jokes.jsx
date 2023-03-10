import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import jokes from "../data/jokes";

import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

import Button from "./Button";

let Jokes = () => {
  let [jokeIndex, setJokeIndex] = useState(0);
  let [jokeStyles, setJokeStyles] = useState(styles.hide);
  let [infoStyles, setInfoStyles] = useState(styles.hide);
  let [loaderStyles, setLoaderStyles] = useState(styles.show);
  let [isVoted, setIsVoted] = useState(false);

  useEffect(() => {
    let executor = async () => {
      // await AsyncStorage.removeItem("votingToken");
      const votingToken = await AsyncStorage.getItem("votingToken");

      if (votingToken == "true" || jokeIndex >= jokes.length) {
        setInfoStyles(styles.info);
        setLoaderStyles(styles.hide);

        await AsyncStorage.setItem("votingToken", "true");
        return;
      }

      setJokeStyles(styles.hide);
      setLoaderStyles(styles.show);

      setTimeout(() => {
        setJokeStyles(styles.joke);
        setLoaderStyles(styles.hide);
      }, 1000);
    };

    executor();
  }, [jokeIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={jokeStyles}>{jokes[jokeIndex]}</Text>
        <Text style={infoStyles}>
          {"That's all the jokes for today! Come back another day!"}
        </Text>
        <ActivityIndicator style={loaderStyles} size="large" color="#2ab363" />
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => setJokeIndex(++jokeIndex)}
          title="This is funny!"
          color="#2b7fdb"
        />
        <Button
          onPress={() => setJokeIndex(++jokeIndex)}
          title="This is not funny."
          color="#2ab363"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 60,
  },
  content: {
    minHeight: 260,
  },
  joke: {
    paddingHorizontal: 40,
    color: "#969696",
  },
  info: {
    paddingHorizontal: 40,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",

    paddingHorizontal: 40,
  },
  show: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
});

export default Jokes;
