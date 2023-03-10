import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, SafeAreaView } from "react-native";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Jokes from "./components/Jokes";

let App = () => {
  return (
    <SafeAreaView>
      <View>
        <Header />
        <View style={styles.content}>
          <Banner />
          <Jokes />
        </View>
        <Footer />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    // height: "90vh",
  },
});

export default App;
