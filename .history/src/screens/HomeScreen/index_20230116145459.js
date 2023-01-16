import { StyleSheet, FlatList } from "react-native"
import {restaurant}
const HomeScren = () =>
{
    return (
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <RestaurantItem
            restaurant={item}
            showsVerticalScrollIndicator={false}
          />
        )}
      />
    );
}
export default HomeSCreen