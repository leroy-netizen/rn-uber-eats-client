import { View, Image, Text, FlatList, StyleSheet } from "react-native";

const DishListItem = ({dish}) => {
  return (
    <View>
          <Text> { dish.name}</Text>
          <Text> { dish.descri}</Text>
          <Text> { dish.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default DishListItem;
