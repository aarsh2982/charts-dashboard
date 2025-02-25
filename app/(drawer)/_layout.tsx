import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Dashboard",
            title: "Dashboard",
          }}
        />
        <Drawer.Screen
          name="line-chart"
          options={{
            drawerLabel: "Line Chart",
            title: "Line Chart",
          }}
        />
        <Drawer.Screen
          name="pie-chart"
          options={{
            drawerLabel: "Pie Chart",
            title: "Pie Chart",
          }}
        />
        <Drawer.Screen
          name="bar-chart"
          options={{
            drawerLabel: "Bar Chart",
            title: "Bar Chart",
          }}
        />
        <Drawer.Screen
          name="digital-gauge"
          options={{
            drawerLabel: "Digital Gauge",
            title: "Digital Gauge",
          }}
        />
        <Drawer.Screen
          name="analog-gauge"
          options={{
            drawerLabel: "Analog Gauge",
            title: "Analog Gauge",
          }}
        />
        <Drawer.Screen
          name="radial-chart"
          options={{
            drawerLabel: "Radial Chart",
            title: "Radial Chart",
          }}
        />
        <Drawer.Screen
          name="segment-display"
          options={{
            drawerLabel: "Segment Display",
            title: "Segment Display",
          }}
        />
        <Drawer.Screen
          name="odometer"
          options={{
            drawerLabel: "Odometer",
            title: "Odometer",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
