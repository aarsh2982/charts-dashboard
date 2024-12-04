import { Drawer } from "expo-router/drawer";
import React from "react";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: Colors[colorScheme ?? "light"].tint,
          drawerInactiveTintColor: Colors[colorScheme ?? "light"].text,
          drawerItemStyle: {
            marginVertical: 8,
          },
          drawerStyle: {
            backgroundColor: Colors[colorScheme ?? "light"].background,
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="house.fill" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="explore"
          options={{
            drawerLabel: "Explore",
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="paperplane.fill" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="LineChartScreen"
          options={{
            drawerLabel: "Line Chart",
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="chart.bar.fill" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="PieChartScreen"
          options={{
            drawerLabel: "Pie Chart",
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="pin.fill" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="BarChartScreen"
          options={{
            drawerLabel: "Bar Chart",
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="chart.bar.fill" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="DigitalGaugeScreen"
          options={{
            drawerLabel: "Digital Gauge",
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="bag.fill" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="AnalogGaugeScreen"
          options={{
            drawerLabel: "Analog Gauge",
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="dial.fill" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="RadialChartScreen"
          options={{
            drawerLabel: "Radial Chart",
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="alarm.fill" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="SegmentDisplayScreen"
          options={{
            drawerLabel: "Segment Display",
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="speedometer" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="AnalogOdometerScreen"
          options={{
            drawerLabel: "Analog Odometer",
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="speedometer" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="DigitalOdometerScreen"
          options={{
            drawerLabel: "Digital Odometer",
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="speedometer" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="RadarChartScreen"
          options={{
            drawerLabel: "Radar Chart",
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="alarm.fill" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="HeatmapCalendarScreen"
          options={{
            drawerLabel: "Heatmap Calendar",
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="clear.fill" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="ThermometerScreen"
          options={{
            drawerLabel: "Thermometer",
            drawerIcon: ({ color }) => (
              <IconSymbol size={24} name="thermometer.sun.fill" color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
