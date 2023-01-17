import { View, Image, Text, FlatList, StyleSheet } from "react-native";

const DishListItem = ({ dish }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}> {dish.name}</Text>
        <Text style={styles.description}> $ {dish.description}</Text>
              <Text style={ styles.price }> { dish.price }</Text>
              <Image source={ } />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "lightgrey",
    marginHorizontal: 20,
    borderBottomWidth: 1,
    paddingVertical: 10,
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
    marginVertical: 5,
  },
});
export default DishListItem;
