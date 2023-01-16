import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json"
const restaurant = restaurants[0]
const RestaurantDetails = () => {
  return (
      <View>
          <Image source={ { uri: restaira} } />
      <Text>Details Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantDetails;
