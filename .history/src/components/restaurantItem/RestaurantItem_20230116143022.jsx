import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const RestaurantItem = ({ restaurant }) => {
  // console.log(restaurant);
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <View></View>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>
        ${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime} -{" "}
        {restaurant.maxDeliveryTime} minutes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontWeight: "400",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
});

export default RestaurantItem;
