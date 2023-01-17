import { View, Image, Text, FlatList, StyleSheet } from "react-native";

const DishListItem = ({dish}) => {
  return (
    <View style={styles.container}>
          <Text style={styles.name}> { dish.name}</Text>
          <Text stle={styles.description}> $ { dish.description}</Text>
          <Text style={styles.price}> { dish.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  name: {
      fontSize: 17,
      color: re
    fontWeight: "600",
  },
  description: {
      color: "grey",
      fontSize: 30
  },
  price: {},
});
export default DishListItem;
