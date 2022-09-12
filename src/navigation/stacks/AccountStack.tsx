import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { AccountScreen } from "../../screens";
import { screenNames } from "../../utils";

const Stack = createNativeStackNavigator();

export const AccountStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name={screenNames.account.home.tab} 
      component={AccountScreen}
      options={{ title: screenNames.account.home.title }}
    />

  </Stack.Navigator> 
)
