import { View, Image, Text, FlatList, StyleSheet } from "react-native";

const DishListItem = ({ dish }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}> {dish.name}</Text>
        <Text style={styles.description} numberOfLines={1}>
          $ {dish.description}
        </Text>
        <Text style={styles.price}> {dish.price}</Text>
      </View>
      {dish.image&&
        (

          <Image source={{ uri: dish.image }} style={styles.image} />
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "lightgrey",
    marginHorizontal: 20,
    borderBottomWidth: 1,
    paddingVertical: 10,
    flexDirection: "row",
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
  image: {
    height: 100,
    width: 100,
  },
});
export default DishListItem;
