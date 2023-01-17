import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
const restaurant = restaurants[0];
const RestaurantDetails = () => {
  return (
    <View style={styles.page}>
      <View style={styles.iconContainer}>
      </View>
      <FlatList
        ListHeaderComponent={Header}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
        <Ionicons name="arrow-back-circle" size={35} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  iconContainer: {
    position: "absolute",
    top: 35,
    left: 15,
  },
  container: {
    margin: 10,
  },
  title: {
    fontWeight: "600",
    fontSize: 28,
    marginVertical: 10,
  },
  subtitle: {
    color: "#525252",
  },
});

export default RestaurantDetails;
