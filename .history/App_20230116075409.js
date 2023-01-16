import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

// file imports
import RestaurantItem from "./src/components/restaurantItem/RestaurantItem";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Restaurant item */}
      <RestaurantItem />
      <RestaurantItem />
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
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 400,
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
});
