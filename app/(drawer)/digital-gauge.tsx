import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, {
  Circle,
  Text as SvgText,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import Slider from "@react-native-community/slider";

export default function EnhancedDigitalGaugeComponent() {
  const [gaugeValue, setGaugeValue] = useState(50);
  const [gaugeSize, setGaugeSize] = useState(250);
  const [gaugeColors, setGaugeColors] = useState(["#3498db", "#2ecc71"]);

  const maxValue = 100; // Maximum value of the gauge

  const calculateStrokeDashoffset = () => {
    const circumference = Math.PI * (gaugeSize - 20);
    return ((maxValue - gaugeValue) / maxValue) * circumference;
  };

  const gaugeRadius = (gaugeSize - 20) / 2;
  const strokeWidth = 15;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digital Gauge</Text>

      {/* Gauge */}
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
        {/* Background Circle */}
        <Circle
          cx={gaugeSize / 2}
          cy={gaugeSize / 2}
          r={gaugeRadius}
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Foreground Circle */}
        <Circle
          cx={gaugeSize / 2}
          cy={gaugeSize / 2}
          r={gaugeRadius}
          stroke="url(#gaugeGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${Math.PI * gaugeRadius * 2}`}
          strokeDashoffset={calculateStrokeDashoffset()}
          transform={`rotate(-90 ${gaugeSize / 2} ${gaugeSize / 2})`}
        />
        {/* Center Text */}
        <SvgText
          x="50%"
          y="50%"
          textAnchor="middle"
          fontSize={gaugeSize / 6}
          fontWeight="bold"
          fill="#34495e"
          dy={8} // Adjust vertical alignment
        >
          {`${gaugeValue}%`}
        </SvgText>
      </Svg>

      {/* Controls */}
      <View style={styles.controls}>
        {/* Gauge Value Control */}
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

        {/* Gauge Size Control */}
        <View style={styles.controlItem}>
          <Text style={styles.controlLabel}>Gauge Size</Text>
          <Slider
            value={gaugeSize}
            minimumValue={150}
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
