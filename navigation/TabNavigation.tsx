import React from "react";
import { useState } from "react";
import {
    PlansScreen,
    ProgressScreen,
    ExercisScreen,

    FoodScreen,
    SocialScreen,

    HistoryScreen,
    ExploreScreen,
} from "../screens";

import {
    CalendarDaysIcon,
    UserGroupIcon,
    ChartBarIcon,
    AcademicCapIcon,
    BeakerIcon,
} from "react-native-heroicons/solid";

import { Icon } from "@rneui/themed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "../constant/colors";

export type MainTabParamList = {
    PlansScreen: undefined;
    ProgressScreen: undefined;
    ExercisesScreen: undefined;
    FoodScreen: undefined;
    SocialScreen: undefined;

    HistoryScreen?: undefined;
    ExploreScreen?: undefined;
}

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function TabNavigation() {
    const [tabBarBadgeFood, setTabBarBadgeFood] = useState('!')
    return (
        // <NavigationContainer>
        <Tab.Navigator
            initialRouteName="PlansScreen"
            screenOptions={{
                headerShown: false,
                // tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: Colors.BLACK, height: 84 },
                tabBarInactiveTintColor: Colors.DARK_GREY,
                tabBarActiveTintColor: Colors.WHITE,
                tabBarBadgeStyle: { backgroundColor: Colors.WHITE },

            }}
        >
            <Tab.Screen name="PlansScreen" component={PlansScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <CalendarDaysIcon color={color} size={size} />
                    ),
                    tabBarLabel: 'Plans',

                    title: "Plans",
                    // headerStyle: {
                    //     backgroundColor: Colors.BLACK,
                    // },
                    // headerTitleStyle: {
                    //     color: Colors.WHITE,
                    //     // fontSize: 24,

                    // },

                }}
            />
            <Tab.Screen name="ProgressScreen" component={ProgressScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <ChartBarIcon color={color} size={size} />
                    ),
                    tabBarLabel: 'Progress',
                    // title: "Progress",
                }}
            />
            <Tab.Screen name="ExercisesScreen" component={ExercisScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AcademicCapIcon color={color} size={size} />
                    ),
                    tabBarLabel: 'Exercises',
                    // title: "Exercises",
                }}
            />
            <Tab.Screen name="FoodScreen" component={FoodScreen}
                options={{
                    tabBarBadge: tabBarBadgeFood,
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='restaurant'
                            type='material'
                            color={color}
                            size={size}
                        />
                    ),
                    tabBarLabel: 'Food',
                    // title: "Food",
                }}
            />
            <Tab.Screen name="SocialScreen" component={SocialScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <UserGroupIcon color={color} size={size} />
                    ),
                    tabBarLabel: 'Social',
                    // title: "Social",
                }}
            />

        </Tab.Navigator>
        // </NavigationContainer>
    );
}