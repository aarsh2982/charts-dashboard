import React from "react";
import { Link, Tabs } from "expo-router";
import {
  Pressable,
  View,
  StyleSheet,
  Platform,
  useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Tabs
        screenOptions={{
          headerShown: true,
          tabBarStyle: {
            height: Platform.OS === "ios" ? 60 + insets.bottom : 60,
            paddingBottom: Platform.OS === "ios" ? insets.bottom : 10,
            borderTopWidth: 1,
            borderTopColor: "#E5E5E5",
            backgroundColor: "white",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Station list",
            headerTitleAlign: "left",
          }}
        />

        <Tabs.Screen
          name="(app)"
          options={{
            href: null,
            headerShown: false,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginRight: 15,
  },
});
