import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import Slider from "@react-native-community/slider";

export default function PieChartScreen() {
  const [chartWidth, setChartWidth] = useState(
    Dimensions.get("window").width - 40
  );
  const [chartHeight, setChartHeight] = useState(220);

  const data = [
    {
      name: "Food",
      population: 215,
      color: "#f39c12",
      legendFontColor: "#2c3e50",
      legendFontSize: 14,
    },
    {
      name: "Transport",
      population: 120,
      color: "#e74c3c",
      legendFontColor: "#2c3e50",
      legendFontSize: 14,
    },
    {
      name: "Shopping",
      population: 180,
      color: "#8e44ad",
      legendFontColor: "#2c3e50",
      legendFontSize: 14,
    },
    {
      name: "Bills",
      population: 90,
      color: "#2ecc71",
      legendFontColor: "#2c3e50",
      legendFontSize: 14,
    },
    {
      name: "Entertainment",
      population: 50,
      color: "#3498db",
      legendFontColor: "#2c3e50",
      legendFontSize: 14,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pie Chart</Text>

      {/* Pie Chart */}
      <PieChart
        data={data}
        width={chartWidth}
        height={chartHeight}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        hasLegend={true}
      />

      {/* Controls */}
      <View style={styles.controls}>
        {/* Chart Width Control */}
        <View style={styles.controlItem}>
          <Text style={styles.controlLabel}>Chart Width</Text>
          <Slider
            value={chartWidth}
            minimumValue={100}
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
            minimumValue={100}
            maximumValue={200}
            onValueChange={setChartHeight}
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
