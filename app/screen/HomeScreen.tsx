import React from "react";
import { View } from "react-native";
import WebView from "react-native-webview";

export default function HomeScreen() {
  const handlePress = () => {
    alert("hello");
  };

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "https://infinisoftech.com" }}
        style={{ flex: 1 }}
      />
    </View>
  );
}
