import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const RestaurantItem = () => {
  return (
    <View style={styles.restaurantContainer}>
      <Image
        source={{
          uri: "shorturl.at/iqrvG",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Mtaani Grill</Text>
      <Text style={styles.subtitle}>$20 20-30 minutes</Text>
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
    fontWeight: 400,
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
  },
});

// export default RestaurantItem;
