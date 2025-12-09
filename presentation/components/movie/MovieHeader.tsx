import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

export default function MovieHeader({ poster, originalTitle, title }: Props) {
  const { height: screenHeight } = useWindowDimensions();

  return (
    <>
      {/* Gradient */}
      <LinearGradient
        colors={["black", "transparent"]}
        style={{
          position: "absolute",
          height: screenHeight * 0.5,
          zIndex: 1,
          width: "100%",
        }}
      />
      {/* Back Arrow Button */}
      <View
        style={{
          position: "absolute",
          top: 45,
          left: 10,
          zIndex: 99,
          elevation: 9,
        }}
      >
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons
            size={30}
            color="white"
            name="arrow-back"
            className="shadow"
          />
        </Pressable>
      </View>
      <View
        style={{ height: screenHeight * 0.7 }}
        className="mb-4 shadow-xl shadow-black/20"
      >
        <View
          className="flex-1"
          style={{
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            overflow: "hidden",
          }}
        >
          <Image
            className="flex-1"
            source={{
              uri: poster,
            }}
            resizeMode="cover"
          />
        </View>
      </View>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontWeight: "normal" }}>{originalTitle}</Text>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{title}</Text>
      </View>
    </>
  );
}
