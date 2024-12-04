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
      </Drawer>
    </GestureHandlerRootView>
  );
}
