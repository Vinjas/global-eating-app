import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { SearchScreen } from "../../screens";
import { screenNames } from "../../utils";

const Stack = createNativeStackNavigator();

export const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name={screenNames.search.home.tab} 
      component={SearchScreen}
      options={{ title: screenNames.search.home.title }}
    />

  </Stack.Navigator> 
)
