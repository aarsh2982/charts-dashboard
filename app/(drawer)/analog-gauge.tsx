import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, {
  Circle,
  Line,
  Text as SvgText,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import Slider from "@react-native-community/slider";

export default function AnalogGaugeScreen() {
  const [gaugeValue, setGaugeValue] = useState(50); // Initial gauge value (0-100)
  const [gaugeSize, setGaugeSize] = useState(300); // Gauge size (diameter)
  const [gaugeColors, setGaugeColors] = useState(["#3498db", "#2ecc71"]); // Gradient colors

  const maxValue = 100; // Maximum value of the gauge
  const gaugeRadius = gaugeSize / 2;
  const strokeWidth = 15;
  const needleLength = gaugeRadius - 20;

  const calculateNeedleAngle = () => {
    const percentage = gaugeValue / maxValue;
    return -90 + percentage * 180; // Converts value to angle (-90° to 90°)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Analog Gauge</Text>

      {/* Gauge SVG */}
      <Svg
        height={gaugeSize}
        width={gaugeSize}
        viewBox={`0 0 ${gaugeSize} ${gaugeSize}`}
        style={{ marginBottom: 20 }}
      >
        <Defs>
          <LinearGradient id="gaugeGradient" x1="0" y1="0" x2="1" y2="0">
            <Stop offset="0%" stopColor={gaugeColors[0]} />
            <Stop offset="100%" stopColor={gaugeColors[1]} />
          </LinearGradient>
        </Defs>

        {/* Background Semi-Circle */}
        <Circle
          cx={gaugeRadius}
          cy={gaugeRadius}
          r={gaugeRadius - strokeWidth / 2}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
          strokeDasharray={`${Math.PI * gaugeRadius}, ${Math.PI * gaugeRadius}`}
          strokeDashoffset={(Math.PI * gaugeRadius) / 2}
          transform={`rotate(-90 ${gaugeRadius} ${gaugeRadius})`}
        />

        {/* Foreground Semi-Circle */}
        <Circle
          cx={gaugeRadius}
          cy={gaugeRadius}
          r={gaugeRadius - strokeWidth / 2}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={`${Math.PI * gaugeRadius}, ${Math.PI * gaugeRadius}`}
          strokeDashoffset={(Math.PI * gaugeRadius * (100 - gaugeValue)) / 100}
          transform={`rotate(-90 ${gaugeRadius} ${gaugeRadius})`}
        />

        {/* Needle */}
        <Line
          x1={gaugeRadius}
          y1={gaugeRadius}
          x2={
            gaugeRadius +
            needleLength * Math.cos((Math.PI * calculateNeedleAngle()) / 180)
          }
          y2={
            gaugeRadius +
            needleLength * Math.sin((Math.PI * calculateNeedleAngle()) / 180)
          }
          stroke="#34495e"
          strokeWidth={3}
          strokeLinecap="round"
        />

        {/* Center Circle */}
        <Circle cx={gaugeRadius} cy={gaugeRadius} r={10} fill="#34495e" />

        {/* Value Text */}
        <SvgText
          x="50%"
          y={gaugeRadius + 40}
          textAnchor="middle"
          fontSize={gaugeSize / 10}
          fontWeight="bold"
          fill="#34495e"
        >
          {`${gaugeValue}%`}
        </SvgText>
      </Svg>

      {/* Controls */}
      <View style={styles.controls}>
        {/* Value Control */}
        <View style={styles.controlItem}>
          <Text style={styles.controlLabel}>Gauge Value</Text>
          <Slider
            value={gaugeValue}
            minimumValue={0}
            maximumValue={100}
            onValueChange={setGaugeValue}
            thumbTintColor="#3498db"
            minimumTrackTintColor="#3498db"
            maximumTrackTintColor="#ccc"
          />
        </View>

        {/* Size Control */}
        <View style={styles.controlItem}>
          <Text style={styles.controlLabel}>Gauge Size</Text>
          <Slider
            value={gaugeSize}
            minimumValue={200}
            maximumValue={400}
            onValueChange={setGaugeSize}
            thumbTintColor="#e67e22"
            minimumTrackTintColor="#e67e22"
            maximumTrackTintColor="#ccc"
          />
        </View>

        {/* Gradient Color Control */}
        <View style={styles.controlItem}>
          <Text style={styles.controlLabel}>Gauge Colors</Text>
          <Slider
            value={0}
            minimumValue={0}
            maximumValue={1}
            step={0.25}
            onValueChange={(value) => {
              const colorPalettes = [
                ["#3498db", "#2ecc71"], // Blue to Green
                ["#e74c3c", "#f1c40f"], // Red to Yellow
                ["#9b59b6", "#8e44ad"], // Purple shades
                ["#1abc9c", "#16a085"], // Teal shades
              ];
              setGaugeColors(
                colorPalettes[Math.floor(value * colorPalettes.length)]
              );
            }}
            thumbTintColor="#2ecc71"
            minimumTrackTintColor="#2ecc71"
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
