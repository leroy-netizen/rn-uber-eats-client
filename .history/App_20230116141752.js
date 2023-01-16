import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
// file imports
import RestaurantItem from "./src/components/restaurantItem/RestaurantItem.jsx";
import restaurants from "./assets/data/restaurants.json";

export default function App ()
{
  console.log(restaurants[0])
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={({item}) => <RestaurantItem restaurant={item} />}
      />
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
