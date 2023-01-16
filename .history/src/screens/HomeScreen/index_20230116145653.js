import { StyleSheet, FlatList } from "react-native"
import {restaurants} from '../../../assets/data/restaurants.json'
const HomeScreen = () =>
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

const styles = StyleSheet.create({})
export default HomeScreen;