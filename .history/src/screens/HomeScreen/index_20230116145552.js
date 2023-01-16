import { StyleSheet, FlatList } from "react-native"
import {restaurants} from '../../../assets/data/restaurants.json'
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