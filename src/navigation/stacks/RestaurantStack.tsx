import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AddRestaurantScreen, RestaurantsScreen } from "../../screens";
import { screenNames } from "../../utils";


const Stack = createNativeStackNavigator();

export const RestaurantStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name={screenNames.restaurant.home.tab} 
      component={RestaurantsScreen}
      options={{ title: screenNames.restaurant.home.title }}
    />
    <Stack.Screen 
      name={screenNames.restaurant.addRestaurant.tab} 
      component={AddRestaurantScreen}
      options={{ title: screenNames.restaurant.addRestaurant.title }}
    />
  </Stack.Navigator> 
)