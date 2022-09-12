import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";

import { RestaurantStack, FavoritesStack, AccountStack, SearchStack, RankingStack  } from "./stacks";

import { screenNames } from "../utils";


const Tab = createBottomTabNavigator();

export const AppNavigation = () => {

  const tabBarIconOptions = (route: any, color: string, size: number) => {
    let iconName;

    switch (route.name) {
      case screenNames.restaurant.tab:
        iconName = "compass-outline";
        break;
      case screenNames.favories.tab:
        iconName = "heart-outline";
        break;
      case screenNames.ranking.tab:
        iconName = "star-outline";
        break;
      case screenNames.search.tab:
        iconName = "magnify";
        break;
      case screenNames.account.tab:
        iconName = "home-outline";
        break;
      default:
        iconName = "home-outline"
        break;
    }

    return (
      <Icon 
        type="material-community"
        name={iconName}
        color={color}
        size={size}
      />    
    )
  }

  return (
    <Tab.Navigator screenOptions={({ route }) => (
        {
          headerShown: false,
          tabBarActiveTintColor: '#00a680',
          tabBarInactiveTintColor: '#646464',
          tabBarIcon: ({ color, size }) => tabBarIconOptions(route, color, size),
        }
      )
    } 
    >
      <Tab.Screen 
        name={screenNames.restaurant.tab} 
        component={RestaurantStack} 
        options={{ title: screenNames.restaurant.title }} 
      />
      <Tab.Screen 
        name={screenNames.favories.tab} 
        component={FavoritesStack} 
        options={{ title: screenNames.favories.title }} 
      />
      <Tab.Screen 
        name={screenNames.ranking.tab} 
        component={RankingStack} 
        options={{ title: screenNames.ranking.title }} 
      />
      <Tab.Screen 
        name={screenNames.search.tab} 
        component={SearchStack} 
        options={{ title: screenNames.search.title }} 
      />
      <Tab.Screen 
        name={screenNames.account.tab} 
        component={AccountStack} 
        options={{ title: screenNames.account.title }} 
      />
    </Tab.Navigator>
  )
}