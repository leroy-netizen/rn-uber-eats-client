import { StyleSheet, FlatList, View } from "react-native"
import  restaurants  from '../../../assets/data/restaurants.json'
import RestaurantItem from "../../components/restaurantItem/RestaurantItem";
const HomeScreen = () =>{
  return (
      <View style={styles.page}>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => (
            <RestaurantItem
              restaurant={item}
              showsVerticalScrollIndicator={false}
            />
          )}
        />
      </View>
    );
}

const styles = StyleSheet.create( {
  page: {
    padding: 10
  }
})
export default HomeScreen;