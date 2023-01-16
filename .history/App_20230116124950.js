import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
// file imports
import RestaurantItem from "./src/components/restaurantItem/RestaurantItem.jsx";
import restaurants from './assets/data/restaurants.json'

export default function App() {
  return (
    <View style={styles.container}>
      <RestaurantItem restaurant={restaurants[0]} />
      <RestaurantItem restaurants={restaurants/>
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
