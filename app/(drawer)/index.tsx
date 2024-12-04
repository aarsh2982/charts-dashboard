import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function index() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Charts Dashboard</Text>
        <Text style={styles.subtitle}>Your insights, at a glance</Text>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Greeting Section */}
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Hello, User! 👋</Text>
          <Text style={styles.greetingSubtext}>
            Check out the latest updates and charts below.
          </Text>
        </View>

        {/* Dashboard Section */}
        <View style={styles.dashboard}>
          <Text style={styles.sectionTitle}>Dashboard Overview</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Total Sales</Text>
            <Text style={styles.cardValue}>$12,345</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Active Users</Text>
            <Text style={styles.cardValue}>1,234</Text>
          </View>
        </View>

        {/* Charts Section */}
        <View style={styles.charts}>
          <Text style={styles.sectionTitle}>Charts</Text>
          <TouchableOpacity style={styles.chartCard}>
            <Ionicons name="bar-chart" size={50} color="#007AFF" />
            <Text style={styles.chartText}>View Sales Chart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chartCard}>
            <Ionicons name="pie-chart" size={50} color="#FF9500" />
            <Text style={styles.chartText}>View User Analytics</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#007AFF",
    padding: 20,
    paddingTop: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#e0e0e0",
    textAlign: "center",
    marginTop: 5,
  },
  content: {
    padding: 20,
  },
  greetingBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  greetingSubtext: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },
  dashboard: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    color: "#555",
  },
  cardValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007AFF",
    marginTop: 5,
  },
  charts: {
    marginBottom: 20,
  },
  chartCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  chartText: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
  },
});
