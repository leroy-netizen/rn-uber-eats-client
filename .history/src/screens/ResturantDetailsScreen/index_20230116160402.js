import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import restaurants from "../../../assets/data/restaurants.json";
const restaurant = restaurants[0];
const RestaurantDetails = () => {
  return (
    <View style={styles.page}>
      <Image
        source={{ uri: restaurant.image }}
        style={styles.image}
        resizeMode="cover"
          />
          <Ionicons
              name="arrow-back-circle"
          siz/>
          <View style={styles.iconContainer}></View>
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} -{" "}
          {restaurant.maxDeliveryTime} minutes
        </Text>
      </View>
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
        backgroundColor: "green",
        padding: 15,
        position: "absolute",
        top: 35,
        left: 15,
        borderRadius: 20
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
