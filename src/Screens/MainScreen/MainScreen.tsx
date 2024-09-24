import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Layout from "src/Layout/Layout";
import Micro from "assets/icons/micro.svg";
import Phone from "assets/icons/phone.svg";
import Mute from "assets/icons/mute.svg";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/Layout/Navigator";

type MainScreenProps = NativeStackScreenProps<RootStackParamList, "Main">;

const MainScreen = ({ navigation }: MainScreenProps) => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const renderMicroButton = () => {
    if (isMuted) {
      return (
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#FFFFFF" }]}
          onPress={toggleMute}
        >
          <Mute />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "#444545" }]}
          onPress={toggleMute}
        >
          <Micro />
        </TouchableOpacity>
      );
    }
  };

  return (
    <ImageBackground
      source={require("assets/images/background.png")}
      resizeMode="cover"
      style={styles.imageBackground}
    >
      <Layout navigation={navigation}>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.title}>
              <Text style={styles.textTitle}>Yakuza Boss Mo...</Text>
              <Text style={styles.time}>00:30</Text>
            </View>
            <View style={styles.avatar}>
              <Image source={require("assets/images/avatar.png")} />
            </View>
            <View style={styles.paragraph}>
              <Text style={[styles.text, { opacity: 0.2 }]}>
                Here's your coffee, Sang Pham. Enjoy it! This
              </Text>
              <Text style={[styles.text, { opacity: 0.4 }]}>
                has been carefully sourced from around the{" "}
              </Text>
              <Text style={[styles.text, { opacity: 0.8 }]}>
                world, roasted to perfection, and handcrafted just for you. Let
                me know if there's anything..
              </Text>
            </View>
          </View>
          <View style={styles.voiceCall}>
            {renderMicroButton()}
            <View style={[styles.btn, { backgroundColor: "#C8322B" }]}>
              <Phone />
            </View>
          </View>
        </View>
      </Layout>
    </ImageBackground>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 24,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 52,
  },
  title: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "600",
    color: "#ffffff",
  },
  time: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 30,
    color: "#ffffff",
    opacity: 0.6,
  },
  avatar: {
    marginVertical: 24,
  },
  paragraph: {
    justifyContent: "center",
    alignItems: "center",
    width: 270,
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    lineHeight: 30,
    fontWeight: "400",
    color: "#FCFCFD",
  },
  voiceCall: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  btn: {
    width: 56,
    height: 56,
    borderRadius: 40,
    padding: 16,
  },
});
