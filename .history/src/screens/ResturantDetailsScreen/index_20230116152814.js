import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json"
const restaurant = restaurants[0]
const RestaurantDetails = () => {
  return (
      <View style={styles.page}>
          <Image source={ { uri: restaurant.image } }
          style=
          />
          <Text>{ restaurant.name }</Text>
          <Text>{ restaurant.name }</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantDetails;
