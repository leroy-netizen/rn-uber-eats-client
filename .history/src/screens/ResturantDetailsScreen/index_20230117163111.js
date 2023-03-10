import { ViewFlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
const restaurant = restaurants[0];
const RestaurantDetails = () => {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={Header}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />
      <Ionicons
        name="arrow-back-circle"
        size={35}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default RestaurantDetails;
