import { View, Image, Text, FlatList, StyleSheet } from "react-native";

const DishListItem = ({dish}) => {
  return (
    <View style={styles.container}>
          <Text style={styles.name}> { dish.name}</Text>
          <Text stle={styles.description}> { dish.description}</Text>
          <Text style={styles.}> { dish.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default DishListItem;
