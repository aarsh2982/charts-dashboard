import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Slider from "@react-native-community/slider";

export default function LineChartComponent() {
  const [chartWidth, setChartWidth] = useState(
    Dimensions.get("window").width - 40
  );
  const [lineColor, setLineColor] = useState("#3498db");
  const [lineThickness, setLineThickness] = useState(3);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: () => lineColor,
        strokeWidth: lineThickness,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#f3f3f3",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    decimalPlaces: 0,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Line Chart</Text>

      <LineChart
        data={data}
        width={chartWidth}
        height={250}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />

      <View style={styles.controls}>
        <View style={styles.controlItem}>
          <Text style={styles.controlLabel}>Chart Width</Text>
          <Slider
            value={chartWidth}
            minimumValue={150}
            maximumValue={Dimensions.get("window").width}
            onValueChange={setChartWidth}
            thumbTintColor="#3498db"
            minimumTrackTintColor="#3498db"
            maximumTrackTintColor="#ccc"
          />
        </View>

        <View style={styles.controlItem}>
          <Text style={styles.controlLabel}>Line Thickness</Text>
          <Slider
            value={lineThickness}
            minimumValue={1}
            maximumValue={10}
            onValueChange={setLineThickness}
            thumbTintColor="#e67e22"
            minimumTrackTintColor="#e67e22"
            maximumTrackTintColor="#ccc"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2c3e50",
    textAlign: "center",
  },
  chart: {
    marginVertical: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  controls: {
    width: "100%",
    marginTop: 20,
  },
  controlItem: {
    marginBottom: 20,
  },
  controlLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#34495e",
    marginBottom: 10,
  },
});
