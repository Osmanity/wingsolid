import React, { FC, useMemo } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from './styles';
import { INITIAL_BACKGROUND, LOGO } from "../../../assets";
import Button from "../../../components/buttons/Button";
import ButtonText from "../../../components/buttons/ButtonText";

interface IProps {
    navigation?: NavigationProp<ParamListBase>
}

const InitialScreen: FC<IProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyles(), []);
    return (
        <View style={styles.body}>

            <ImageBackground source={INITIAL_BACKGROUND} style={styles.background}>
                <Image source={LOGO} style={styles.logo} />
                <View style={styles.titles}>
                    <Text style={styles.title}> Make your plan</Text>
                    <Text style={styles.title}> Follow your progress</Text>
                    <Text style={styles.title}> Select your exercise</Text>
                </View>
            </ImageBackground>

            <View style={styles.button}>
                <Button title="Create Account" disabled={false} color={false} onPress={() => navigation?.navigate('SignupScreen')} />
                <ButtonText title="Or Login" disabled={false} onPress={() => navigation?.navigate('SigninScreen')} />
            </View>

        </View >
    )
}

export default InitialScreen;