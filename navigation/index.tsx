import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
    InitialScreen,
    SigninScreen,
    SignupScreen,
    NameScreen,
    DateScreen,
    WorkoutFreqScreen,
    SelectionResultScreen,
} from "../screens";

export type MainStackParamList = {
    InitialScreen: undefined;
    SigninScreen: undefined;
    SignupScreen: undefined;
    NameScreen: undefined;
    DateScreen: undefined;
    WorkoutFreqScreen: undefined;
    SelectionResultScreen: undefined;
}


const MainStack = createNativeStackNavigator<MainStackParamList>();

export default function Screens() {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                initialRouteName="InitialScreen"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <MainStack.Screen name="InitialScreen" component={InitialScreen} />
                <MainStack.Screen name="SignupScreen" component={SignupScreen} />
                <MainStack.Screen name="SigninScreen" component={SigninScreen} />
                <MainStack.Screen name="NameScreen" component={NameScreen} />
                <MainStack.Screen name="DateScreen" component={DateScreen} />
                <MainStack.Screen name="WorkoutFreqScreen" component={WorkoutFreqScreen} />
                <MainStack.Screen name="SelectionResultScreen" component={SelectionResultScreen} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}