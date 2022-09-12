import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { FavoritesScreen } from "../../screens";
import { screenNames } from "../../utils";

const Stack = createNativeStackNavigator();

export const FavoritesStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name={screenNames.favories.home.tab} 
      component={FavoritesScreen}
      options={{ title: screenNames.favories.home.title }}
    />

  </Stack.Navigator> 
)
