import React from "react";
import { View } from "react-native";

const RestaurantItem = () => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg",
        }}
        style={styles.image}
      />
      <Text style={styles.titlw}>Cheese Tequeños</Text>
      <Text style={styles.subtitle}>$ $1.99 15-30 minutes</Text>
    </View>
  );
};

export default RestaurantItem;
