import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
// file imports
// import RestaurantItem from "./src/components/restaurantItem/RestaurantItem";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.restaurantContainer}>
        <Image/ >
        <Text style={styles.title}>Mtaani Grill</Text>
        <Text style={styles.subtitle}>$20 20-30 minutes</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
