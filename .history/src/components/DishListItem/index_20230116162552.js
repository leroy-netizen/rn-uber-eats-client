import { View, Image, Text, FlatList, StyleSheet } from "react-native";

const DishListItem = ({dish}) => {
  return (
    <View style={}>
          <Text> { dish.name}</Text>
          <Text> { dish.description}</Text>
          <Text> { dish.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default DishListItem;
