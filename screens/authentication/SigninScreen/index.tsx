import React, { FC, useMemo } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from './styles';
import ContinueBtn from "../../../components/buttons/ContinueBtn";
import { StatusBar } from "expo-status-bar";
import { INITIAL_BACKGROUND, LOGO } from "../../../assets";
import ButtonText from "../../../components/buttons/ButtonText";
import Button from "../../../components/buttons/Button";

interface IProps {
    navigation?: NavigationProp<ParamListBase>
}

const SigninScreen: FC<IProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyles(), []);
    return (

        <View style={styles.body}>
            <StatusBar
                backgroundColor='transparent'
                style='dark'
                translucent={true}
            />
            <ImageBackground source={INITIAL_BACKGROUND} style={styles.background}>
                <Image source={LOGO} style={styles.logo} />
                <View style={styles.titles}>
                    <Text style={styles.title}> Welcome back to your</Text>
                    <Text style={styles.title}> workout track</Text>
                </View>
                <View style={styles.form}>
                    <Text style={styles.email}>Email</Text>
                    <Text style={styles.password}>Password</Text>
                </View>
                <View style={styles.forgatButton}>
                    <ButtonText title="Have you forgotten your password?" disabled={false} onPress={() => navigation?.navigate('SigninScreen')} />
                </View>
                <View style={styles.buttons}>

                    <View style={styles.startedButton}>
                    </View>
                    <Button title="Get Started" disabled={false} color={false} onPress={() => navigation?.navigate('SignupScreen')} />
                </View>
            </ImageBackground >
        </View >
    )
}

export default SigninScreen;