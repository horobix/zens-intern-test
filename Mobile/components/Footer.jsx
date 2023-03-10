import { StyleSheet, View, Text } from "react-native";

let Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>
        This appis created as part of Hlsolutions program. The materials con
        tained on this website are provided for general information only and do
        not constitute any form of advice. HLS assumes no responsibility for the
        accuracy of any particular statement and accepts no liability for any
        loss or damage which may arise from reliance on the infor mation
        contained on this site.
      </Text>
      <Text style={styles.copyright}> Copyright 2021 HLS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#cccc",
    paddingHorizontal: 15,
    backgroundColor: "#ffff",
  },
  info: {
    paddingVertical: 10,
    fontSize: 12,
    textAlign: "center",
    color: "#969696",
  },
  copyright: {
    paddingBottom: 20,
    fontSize: 12,
    textAlign: "center",
  },
});

export default Footer;
