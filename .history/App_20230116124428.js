import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
// file imports
import RestaurantItem from "./src/components/restaurantItem/RestaurantItem.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      <RestaurantItem />
      <RestaurantItem />
      <StatusBar />
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
  }
 
});
