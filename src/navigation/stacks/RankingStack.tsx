import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { RankingScreen } from "../../screens";
import { screenNames } from "../../utils";

const Stack = createNativeStackNavigator();

export const RankingStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name={screenNames.ranking.home.tab} 
      component={RankingScreen}
      options={{ title: screenNames.ranking.home.title }}
    />

  </Stack.Navigator> 
)
