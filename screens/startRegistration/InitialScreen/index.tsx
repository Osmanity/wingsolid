import React, { FC, useEffect, useMemo, useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from './styles';
import { INITIAL_BACKGROUND, LOGO } from "../../../assets";
import Button from "../../../components/buttons/Button";
import ButtonText from "../../../components/buttons/ButtonText";

import * as Progress from 'react-native-progress';
import { Colors } from "../../../constant/colors";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import AssetPreloader from "../../../components/AssetPreloader";

interface IProps {
    navigation?: NavigationProp<ParamListBase>
}

const InitialScreen: FC<IProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyles(), []);



    // todo: Later on try finishing creating AssetPreloader for reuseability & cleaner code  
    // <AssetPreloader assetsToLoad={[INITIAL_BACKGROUND, LOGO]} />

    //////////////////////////////////////////////////////////////////////////////////////////
    /*                          Preloading and Caching Assets                           */
    //////////////////////////////////////////////////////////////////////////////////////////

    let [isLoaded, setIsLoaded] = useState(false);

    let cacheResources = async () => {
        const images = [INITIAL_BACKGROUND, LOGO];

        const cacheImages = images.map(image => {
            return Asset.fromModule(image).downloadAsync();
        });

        return Promise.all(cacheImages);
    }

    useEffect(() => {
        const loadResources = async () => {
            await cacheResources();
            setIsLoaded(true);
        };

        loadResources();
    }, [])

    if (!isLoaded) {
        return (<View style={styles.progress} >
            {/* <Image source={LOGO} style={styles.logoProgress} /> */}
            <Text style={styles.progressLogoText}>WingSolid</Text>
            <Text style={styles.progressText}>Loading</Text>
            <Progress.Bar progress={0.1} width={300} indeterminate={true} color={Colors.WHITE} height={15} />
        </View>
        )
    }

    //////////////////////////////////////////////////////////////////////////////////////////

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