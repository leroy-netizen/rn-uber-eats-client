import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const RestaurantItem = ({ restaurant }) => {
  // console.log(restaurant);
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant2.jpeg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{restaurant.deliveryFee}</Text>
      <Text style={styles.subtitle}>
        $ {restaurant.maxDeliveryTime} minutes
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
