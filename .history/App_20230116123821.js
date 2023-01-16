import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
// file imports
// import RestaurantItem from "./src/components/restaurantItem/RestaurantItem";

export default function App() {
  return (
    <View >
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Mtaani Grill</Text>
      <Text style={styles.subtitle}>20-30 minutes</Text>
    </View>

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
    aspectRatio: 4 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
});
