import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import Slider from "@react-native-community/slider";

export default function BarChartComponent() {
  const [chartWidth, setChartWidth] = useState(
    Dimensions.get("window").width - 40
  );
  const [chartHeight, setChartHeight] = useState(300);
  const [barColor, setBarColor] = useState("#3498db");
  const [barSpacing, setBarSpacing] = useState(0.5);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [50, 20, 2, 86, 71, 100],
        color: (opacity = 1) => barColor, // Dynamic bar color
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: "#f5f5f5",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0, // No decimals
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: barSpacing, // Dynamic bar spacing
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bar Chart</Text>

      {/* Bar Chart */}
      <BarChart
        data={data}
        width={chartWidth}
        height={chartHeight}
        chartConfig={chartConfig}
        yAxisLabel="$"
        yAxisSuffix="k"
        showValuesOnTopOfBars={true} // Display values
        style={styles.chart}
        fromZero={true} // Start chart from zero
      />

      {/* Controls */}
      <View style={styles.controls}>
        {/* Chart Width Control */}
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

        {/* Chart Height Control */}
        <View style={styles.controlItem}>
          <Text style={styles.controlLabel}>Chart Height</Text>
          <Slider
            value={chartHeight}
            minimumValue={200}
            maximumValue={500}
            onValueChange={setChartHeight}
            thumbTintColor="#e67e22"
            minimumTrackTintColor="#e67e22"
            maximumTrackTintColor="#ccc"
          />
        </View>

        {/* Bar Spacing Control */}
        <View style={styles.controlItem}>
          <Text style={styles.controlLabel}>Bar Spacing</Text>
          <Slider
            value={barSpacing}
            minimumValue={0.2}
            maximumValue={1.0}
            onValueChange={setBarSpacing}
            thumbTintColor="#2ecc71"
            minimumTrackTintColor="#2ecc71"
            maximumTrackTintColor="#ccc"
          />
        </View>

        {/* Bar Color Control */}
        <View style={styles.controlItem}>
          <Text style={styles.controlLabel}>Bar Color</Text>
          <Slider
            value={0}
            minimumValue={0}
            maximumValue={1}
            step={0.2}
            onValueChange={(value) => {
              const colors = [
                "#3498db", // Blue
                "#e74c3c", // Red
                "#2ecc71", // Green
                "#9b59b6", // Purple
                "#f1c40f", // Yellow
              ];
              setBarColor(colors[Math.floor(value * colors.length)]);
            }}
            thumbTintColor="#9b59b6"
            minimumTrackTintColor="#9b59b6"
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
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
    textAlign: "center",
  },
  chart: {
    borderRadius: 16,
    marginBottom: 20,
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
