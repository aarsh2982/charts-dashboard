import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Svg, { G, Rect, Text as SvgText } from "react-native-svg";
import { ProgressChart } from "react-native-chart-kit";

// Type definitions for better type safety
interface SegmentData {
  label: string;
  value: number;
  color?: string;
}

interface CustomChartProps {
  segmentData: SegmentData[];
  segmentSize?: number;
  customColors?: string[];
}

const SegmentDisplayComponent: React.FC = () => {
  // State with more comprehensive initial data
  const [segmentData, setSegmentData] = useState<SegmentData[]>([
    { label: "Sales", value: 45, color: "#3498db" },
    { label: "Marketing", value: 30, color: "#e74c3c" },
    { label: "R&D", value: 20, color: "#f1c40f" },
    { label: "Support", value: 35, color: "#2ecc71" },
    { label: "Admin", value: 15, color: "#9b59b6" },
  ]);

  // Custom Segment Display Component
  const CustomSegmentDisplay: React.FC<CustomChartProps> = ({
    segmentData,
    segmentSize = 80,
    customColors,
  }) => {
    const width = Dimensions.get("window").width - 40;
    const segmentWidth = width / segmentData.length;

    return (
      <Svg height={segmentSize * 2} width={width}>
        {segmentData.map((segment, index) => {
          const fillColor = customColors
            ? customColors[index % customColors.length]
            : segment.color || "#3498db";

          return (
            <G key={index}>
              <Rect
                x={index * segmentWidth}
                y={segmentSize - segment.value}
                width={segmentWidth - 10}
                height={segment.value}
                fill={fillColor}
                rx={10}
                opacity={0.8}
              />
              <SvgText
                x={index * segmentWidth + segmentWidth / 2}
                y={segmentSize + 25}
                textAnchor="middle"
                fontSize={12}
                fontWeight="bold"
                fill="#2c3e50"
              >
                {segment.label}
              </SvgText>
              <SvgText
                x={index * segmentWidth + segmentWidth / 2}
                y={segmentSize - segment.value - 10}
                textAnchor="middle"
                fontSize={10}
                fill="#34495e"
              >
                {segment.value}%
              </SvgText>
            </G>
          );
        })}
      </Svg>
    );
  };

  // Progress Chart Component with Enhanced Customization
  const ProgressSegmentDisplay: React.FC<CustomChartProps> = ({
    segmentData,
    customColors,
  }) => {
    // Generate chart config with custom colors if provided
    const chartConfig = {
      backgroundColor: "#ffffff",
      backgroundGradientFrom: "#f5f5f5",
      backgroundGradientTo: "#ffffff",
      color: (opacity = 1) => `rgba(52, 152, 219, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(44, 62, 80, ${opacity})`,
      propsForLabels: {
        fontWeight: "bold",
      },
      ...(customColors && {
        color: (opacity = 1, index?: number) =>
          customColors[index || 0] || `rgba(52, 152, 219, ${opacity})`,
      }),
    };

    return (
      <ProgressChart
        data={{
          labels: segmentData.map((seg) => seg.label),
          data: segmentData.map((seg) => seg.value / 100),
          colors: customColors || undefined,
        }}
        width={Dimensions.get("window").width - 40}
        height={220}
        strokeWidth={16}
        radius={38}
        chartConfig={chartConfig}
        hideLegend={false}
        style={{
          borderRadius: 16,
          elevation: 3,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        }}
      />
    );
  };

  // Customization Methods
  const handleAddSegment = () => {
    const newSegment: SegmentData = {
      label: `Segment ${segmentData.length + 1}`,
      value: Math.floor(Math.random() * 50) + 10,
      color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    };
    setSegmentData([...segmentData, newSegment]);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.title}>Segment Data Visualizations</Text>

      {/* Custom Segment Display */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartLabel}>Custom Segment Display</Text>
        <CustomSegmentDisplay segmentData={segmentData} segmentSize={80} />
      </View>

      {/* Progress Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartLabel}>Progress Segment Display</Text>
        <ProgressSegmentDisplay segmentData={segmentData} />
      </View>

      {/* Add Segment Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddSegment}>
        <Text style={styles.addButtonText}>+ Add Segment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 20,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  chartContainer: {
    marginBottom: 30,
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  chartLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#34495e",
    marginBottom: 15,
    letterSpacing: 0.5,
  },
  addButton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SegmentDisplayComponent;
