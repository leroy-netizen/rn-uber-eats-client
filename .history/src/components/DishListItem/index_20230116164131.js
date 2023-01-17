import { View, Image, Text, FlatList, StyleSheet } from "react-native";

const DishListItem = ({ dish }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}> {dish.name}</Text>
      <Text style={styles.description}> $ {dish.description}</Text>
      <Text style={styles.price}> {dish.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
        margin: 5,
      borderBottomColor: "lightgray"
  },
  name: {
    fontSize: 17,
    fontWeight: "600",
  },
  price: {
    color: "green",
  },
  description: {
      color: "gray",
      marginVertical: 5
  },
});
export default DishListItem;
