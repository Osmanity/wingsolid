import React, { FC, useContext, useMemo, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from './styles';
import * as Progress from 'react-native-progress';
import ContinueBtn from "../../../components/buttons/ContinueBtn";
// import { AuthContext } from "../../../context/AuthContext";

interface IProps {
    navigation?: NavigationProp<ParamListBase>
}

const SignupScreen: FC<IProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyles(), []);
    const [inputValue, setInputValue] = useState("")
    // const { userToken } = useContext(AuthContext)
    return (
        <View style={styles.body}>

            <KeyboardAvoidingView
                // enabled
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.body}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 40 }}>Welcome back Amira Mohammed</Text>
                    {/* <Text> {userToken} </Text> */}
                    <Text style={styles.text}>SignupScreen</Text>
                    <TextInput style={styles.textInput} value={inputValue} onChangeText={setInputValue} placeholder="Enter text Here" />
                    <ContinueBtn ScreenNav="NameScreen" btnColor />

                </ScrollView>
            </KeyboardAvoidingView>
            <View>
            </View>
        </View>
    )
}

export default SignupScreen;