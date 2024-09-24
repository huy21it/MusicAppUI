import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/Layout/Navigator";
import ArrowDown from "assets/icons/arrowdown.svg";
import ArrowLeft from "assets/icons/back.svg";
import SongItem from "src/Components/Modules/SongItem/SongItem";

type VoiceSettingScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "VoiceSetting"
>;

const VoiceSettingScreen = ({ navigation }: VoiceSettingScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ArrowLeft />
        </TouchableOpacity>
        <View>
          <Text style={styles.titleText}>Voice settings</Text>
        </View>
        <View style={styles.box}></View>
      </View>
      <View style={styles.menu}>
        <View style={styles.btn}>
          <Text style={styles.textBtn}>Famale</Text>
          <ArrowDown />
        </View>
        <View style={styles.btn}>
          <Text style={styles.textBtn}>English</Text>
          <ArrowDown />
        </View>
      </View>
      <View>
        <SongItem title="African American Female" composer="@Chipviet" />
        <SongItem title="African American Female" composer="@Chipviet" />
        <SongItem title="African American Female" composer="@Chipviet" />
        <SongItem title="African American Female" composer="@Chipviet" />
      </View>
      <View style={styles.btnSave}>
        <Text style={styles.textSave}>Save</Text>
      </View>
    </View>
  );
};

export default VoiceSettingScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 28,
    backgroundColor: "background: rgba(24, 24, 27, 1)",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    height: "100%",
  },
  header: {
    height: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: {
    width: 10,
  },
  titleText: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "700",
    color: "#FAFAFA",
  },
  btn: {
    width: 144,
    height: 36,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#27272A",
  },
  textBtn: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  menu: {
    marginVertical: 24,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnSave: {
    width: "100%",
    height: 36,
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#FAFAFA",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 24,
  },
  textSave: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    color: "#27272A",
  },
  btnBack: {
    width: 24,
    height: 24,
  },
});
