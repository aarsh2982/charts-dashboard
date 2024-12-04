import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import Svg, { Rect, Text as SvgText } from "react-native-svg";
import { ProgressChart } from "react-native-chart-kit";
import { Easing, Animated } from "react-native";
import Slider from "@react-native-community/slider";

const OdometerScreen = () => {
  const [odometerValue, setOdometerValue] = useState(12345);
  const [digitColor, setDigitColor] = useState("#3498db");
  const [digitBackground, setDigitBackground] = useState("#ecf0f1");
  const [digitSize, setDigitSize] = useState(50); // Width and height of each digit block
  const [progressValue, setProgressValue] = useState(0);
  const [speedColor, setSpeedColor] = useState("#3498db");

  // Animated Value for Smooth Transition
  const animatedValue = new Animated.Value(odometerValue);

  const animateOdometer = (newValue: number) => {
    Animated.timing(animatedValue, {
      toValue: newValue,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  // Custom Odometer with react-native-svg
  const CustomOdometer = () => {
    const [currentValue, setCurrentValue] = useState(odometerValue);
    useEffect(() => {
      const listener = animatedValue.addListener(({ value }) => {
        setCurrentValue(Math.floor(value));
      });
      return () => {
        animatedValue.removeListener(listener);
      };
    }, [animatedValue]);

    const digits = currentValue.toString().split(""); // Using animated value for smoother transition
    return (
      <Svg
        height={digitSize}
        width={digits.length * digitSize}
        viewBox={`0 0 ${digits.length * digitSize} ${digitSize}`}
      >
        {digits.map((digit, index) => (
          <React.Fragment key={index}>
            <Rect
              x={index * digitSize}
              y={0}
              width={digitSize}
              height={digitSize}
              fill={digitBackground}
              rx={10}
            />
            <SvgText
              x={index * digitSize + digitSize / 2}
              y={digitSize / 1.5}
              fontSize={digitSize / 1.8}
              fontWeight="bold"
              fill={digitColor}
              textAnchor="middle"
            >
              {digit}
            </SvgText>
          </React.Fragment>
        ))}
      </Svg>
    );
  };

  // Odometer-like Progress Chart
  const ProgressOdometer = () => {
    return (
      <ProgressChart
        data={{
          labels: ["Speed"], // Label
          data: [progressValue / 100], // Progress as a fraction
        }}
        width={Dimensions.get("window").width - 40}
        height={200}
        strokeWidth={16}
        radius={32}
        chartConfig={{
          backgroundColor: "#ffffff",
          backgroundGradientFrom: "#f5f5f5",
          backgroundGradientTo: "#ffffff",
          color: (opacity = 1) => `${speedColor}`,
          labelColor: (opacity = 1) => `rgba(44, 62, 80, ${opacity})`,
        }}
        hideLegend={false}
      />
    );
  };

  // Simulate Odometer Value Change
  useEffect(() => {
    const interval = setInterval(() => {
      setOdometerValue((prev) => {
        const newValue = prev + 1;
        animateOdometer(newValue);
        setProgressValue(newValue % 100); // Update the progress chart value
        return newValue;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Odometer Examples</Text>

      {/* Custom Odometer */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartLabel}>Custom Odometer</Text>
        <CustomOdometer />
      </View>

      {/* Odometer-like Progress Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartLabel}>Progress Odometer</Text>
        <ProgressOdometer />
      </View>

      {/* Customization Options */}
      <View style={styles.customizationContainer}>
        <Text style={styles.customizationLabel}>Digit Size</Text>
        <Slider
          style={styles.slider}
          minimumValue={30}
          maximumValue={80}
          step={1}
          value={digitSize}
          onValueChange={(value) => setDigitSize(value)}
        />

        <Text style={styles.customizationLabel}>Digit Color</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          step={0.01}
          value={digitColor === "#3498db" ? 0 : 1}
          onValueChange={(value) =>
            setDigitColor(value === 0 ? "#3498db" : "#e74c3c")
          }
        />

        <Text style={styles.customizationLabel}>Speed Color</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1}
          step={0.01}
          value={speedColor === "#3498db" ? 0 : 1}
          onValueChange={(value) =>
            setSpeedColor(value === 0 ? "#3498db" : "#e74c3c")
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  title: {
    fontSize: 24,
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
    fontSize: 20,
    fontWeight: "500",
    color: "#34495e",
    marginBottom: 10,
  },
  customizationContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 20,
  },
  customizationLabel: {
    fontSize: 18,
    fontWeight: "500",
    color: "#34495e",
    marginBottom: 10,
  },
  slider: {
    width: "100%",
    marginBottom: 20,
  },
});

export default OdometerScreen;
