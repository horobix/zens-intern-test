import { StyleSheet, View, Text, Image } from "react-native";

let Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/hls-logo.png")} style={styles.logo} />
      </View>
      <View style={styles.profile}>
        <View style={styles.profile.texts}>
          <Text style={styles.profile.texts.span}>Handicrafted by</Text>
          <Text style={styles.profile.texts.text}>Jim HLS</Text>
        </View>
        <Image
          source={require("../assets/smiling-flower.png")}
          style={styles.profile.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 80,
    paddingHorizontal: 20,
    backgroundColor: "#ffff",
  },
  logo: {
    width: 45,
    height: 45,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    texts: {
      paddingRight: 5,
      span: {
        fontSize: 12,
        color: "#969696",
        textAlign: "right",
      },
      text: {
        fontSize: 12,
        textAlign: "right",
      },
    },
    logo: {
      width: 40,
      height: 40,
    },
  },
});

export default Header;
