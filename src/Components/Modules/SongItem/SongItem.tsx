import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Play from "assets/icons/play.svg";
import Pause from "assets/icons/pause.svg";
import Tick from "assets/icons/tick.svg";

interface ISongItemProps {
  title: string;
  composer: string;
}

const SongItem = ({ title, composer }: ISongItemProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <TouchableOpacity
      style={[
        styles.boxSong,
        isPlaying
          ? { backgroundColor: "#3B3B3E" }
          : { backgroundColor: "#27272A" },
      ]}
      onPress={togglePlay}
    >
      <View style={styles.btnPlay}>{isPlaying ? <Pause /> : <Play />}</View>
      <View>
        <Text style={styles.textTitleSong}>{title}</Text>
        <Text style={styles.textComposer}>By {composer}</Text>
      </View>
      {isPlaying ? <Tick /> : <View style={styles.boxTick}></View>}
    </TouchableOpacity>
  );
};

export default SongItem;

const styles = StyleSheet.create({
  boxSong: {
    width: "100%",
    height: 88,
    borderRadius: 12,
    padding: 16,
    gap: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#3B3B3E",
    marginVertical: 8,
  },
  btnPlay: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000066",
    borderRadius: 6,
  },
  titleSong: {},
  textTitleSong: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "700",
    color: "#FAFAFA",
  },
  textComposer: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
    color: "#FAFAFA",
  },
  boxTick: {
    width: 18,
  },
});
