import React, { useEffect, useState } from "react";
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

import { useSelector } from "react-redux";
import { selectLogin } from "../features/login/loginSlice";
import TabNavigation from "./TabNavigation";



export type MainStackParamList = {
    InitialScreen: undefined;
    SigninScreen: undefined;
    SignupScreen: undefined;
    NameScreen: undefined;
    DateScreen: undefined;
    WorkoutFreqScreen: undefined;
    SelectionResultScreen: undefined;
}

export type StackParamList = {
    Home: undefined;
    GameDetail: undefined;
}



const MainStack = createNativeStackNavigator<MainStackParamList>();

function Screens() {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                initialRouteName="InitialScreen"
                screenOptions={{
                    headerShown: false,
                }}
            >

                <MainStack.Group>
                    <MainStack.Screen name="InitialScreen" component={InitialScreen} />
                    <MainStack.Screen name="SignupScreen" component={SignupScreen} />
                    <MainStack.Screen name="SigninScreen" component={SigninScreen} />
                </MainStack.Group>

                <MainStack.Group screenOptions={{
                    presentation: "card"
                }}>
                    <MainStack.Screen name="NameScreen" component={NameScreen} />
                    <MainStack.Screen name="DateScreen" component={DateScreen} />
                    <MainStack.Screen name="WorkoutFreqScreen" component={WorkoutFreqScreen} />
                    <MainStack.Screen name="SelectionResultScreen" component={SelectionResultScreen} />
                </MainStack.Group>

            </MainStack.Navigator>
        </NavigationContainer>
    );
}



const RootStack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                // initialRouteName=""
                screenOptions={{
                    headerShown: false,
                }}
            >

                <RootStack.Group>
                    <RootStack.Screen name="TabNavigation" component={TabNavigation} />
                </RootStack.Group>

            </RootStack.Navigator>
        </NavigationContainer>
    );
}




export default function Navigator() {
    const login = useSelector(selectLogin)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        setIsLoggedIn(login)
    }, [login])
    // setIsLoggedIn()
    if (isLoggedIn) {
        return (
            <RootNavigator />
        );
    } else {
        return (
            <Screens />
        );
    }
}