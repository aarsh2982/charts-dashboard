import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import Svg, { Circle, Text as SvgText } from "react-native-svg";
import { ProgressChart } from "react-native-chart-kit";

const { width } = Dimensions.get("window"); // Get device screen width

export default function RadialChartScreen() {
  const [chartSize, setChartSize] = useState(width * 0.6); // Responsive chart size
  const [chartData, setChartData] = useState([0.4, 0.3, 0.2, 0.1]);
  const chartColors = ["#3498db", "#e74c3c", "#f1c40f", "#2ecc71"];

  // Custom Radial Chart
  const CustomRadialChart = () => {
    const radius = chartSize / 2;
    const strokeWidth = 20;
    const circumference = 2 * Math.PI * (radius - strokeWidth / 2);
    const offsets = chartData.map((value, index) => {
      return (
        circumference -
        (value * circumference +
          chartData
            .slice(0, index)
            .reduce((acc, v) => acc + v * circumference, 0))
      );
    });

    return (
      <Svg
        height={chartSize}
        width={chartSize}
        viewBox={`0 0 ${chartSize} ${chartSize}`}
      >
        {chartData.map((value, index) => (
          <Circle
            key={index}
            cx={radius}
            cy={radius}
            r={radius - strokeWidth / 2}
            fill="none"
            stroke={chartColors[index]}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offsets[index]}
            transform={`rotate(-90 ${radius} ${radius})`}
          />
        ))}
        <SvgText
          x="50%"
          y="50%"
          textAnchor="middle"
          fontSize={chartSize / 8}
          fontWeight="bold"
          fill="#34495e"
          dy={8}
        >
          Custom Radial
        </SvgText>
      </Svg>
    );
  };

  // Gauge-style Radial Chart
  const GaugeRadialChart = () => {
    const value = 70; // Percentage (0-100)
    const radius = chartSize / 2;
    const strokeWidth = 20;
    const circumference = 2 * Math.PI * (radius - strokeWidth / 2);
    const offset = ((100 - value) / 100) * circumference;

    return (
      <Svg
        height={chartSize}
        width={chartSize}
        viewBox={`0 0 ${chartSize} ${chartSize}`}
      >
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke="#3498db"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
        <SvgText
          x="50%"
          y="50%"
          textAnchor="middle"
          fontSize={chartSize / 8}
          fontWeight="bold"
          fill="#34495e"
          dy={8}
        >
          {`${value}%`}
        </SvgText>
      </Svg>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Radial Chart Examples</Text>

      {/* Custom Radial Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartLabel}>Custom Radial Chart</Text>
        <CustomRadialChart />
      </View>

      {/* React Native Chart Kit - Progress Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartLabel}>Progress Chart (Chart Kit)</Text>
        <ProgressChart
          data={{
            labels: ["A", "B", "C", "D"], // Labels
            data: chartData, // Data in fractions
          }}
          width={chartSize}
          height={chartSize}
          strokeWidth={16}
          radius={32}
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#f5f5f5",
            backgroundGradientTo: "#ffffff",
            color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`,
          }}
          hideLegend={false}
        />
      </View>

      {/* Gauge-style Radial Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartLabel}>Gauge-style Radial Chart</Text>
        <GaugeRadialChart />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
    textAlign: "center",
  },
  chartContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  chartLabel: {
    fontSize: 18,
    fontWeight: "500",
    color: "#34495e",
    marginBottom: 10,
  },
});
