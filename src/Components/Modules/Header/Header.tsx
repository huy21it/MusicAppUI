import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ArrowDown from "assets/icons/arrowdown.svg";
import Coin from "assets/icons/coin.svg";
import Plus from "assets/icons/plus.svg";

const Header = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.voiceSetting}
          onPress={() => {
            navigation.navigate("VoiceSetting");
          }}
        >
          <Text style={styles.textVoiceSetting}>EN</Text>
          <ArrowDown />
        </TouchableOpacity>
        <View style={styles.boxCoin}>
          <Coin />
          <Text style={styles.textBoxCoin}>3000</Text>
          <Plus />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    paddingHorizontal: 24,
    paddingVertical: 9,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  voiceSetting: {
    width: 63,
    height: 32,
    borderWidth: 1,
    borderRadius: 36,
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#2B2C2C",
    borderColor: "#60646C",
  },
  textVoiceSetting: {
    color: "#FCFCFD",
    fontSize: 13,
    lineHeight: 26,
    fontWeight: "500",
  },
  boxCoin: {
    width: 117,
    height: 32,
    borderWidth: 1,
    borderRadius: 50,
    flexDirection: "row",
    gap: 7,
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "#2B2C2C",
    borderColor: "#60646C",
    justifyContent: "space-between",
  },
  textBoxCoin: {
    color: "#FCFCFD",
    fontSize: 13,
    lineHeight: 18,
    fontWeight: "700",
  },
});
