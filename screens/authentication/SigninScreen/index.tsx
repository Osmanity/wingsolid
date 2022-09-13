import React, { FC, useEffect, useMemo, useState } from "react";
import { Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from './styles';
import ContinueBtn from "../../../components/buttons/ContinueBtn";
import { StatusBar } from "expo-status-bar";
import { INITIAL_BACKGROUND, LOGO } from "../../../assets";
import ButtonText from "../../../components/buttons/ButtonText";
import Button from "../../../components/buttons/Button";

import * as Progress from 'react-native-progress';
import { Colors } from "../../../constant/colors";


import * as Font from "expo-font";
import { Asset } from "expo-asset";
import AssetPreloader from "../../../components/AssetPreloader";
import LoginBtn from "../../../components/buttons/loginBtn";

// import { TextInput } from "react-native-paper"




interface IProps {
    navigation?: NavigationProp<ParamListBase>
}

const SigninScreen: FC<IProps> = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [passoword, setPassoword] = useState('')

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

    // scrollView props: bounces={false}


    return (
        <View style={styles.body}>
            <StatusBar
                backgroundColor='transparent'
                style='light'
                translucent={true}
            />
            <ImageBackground source={INITIAL_BACKGROUND} style={styles.background}>
                <Image source={LOGO} style={styles.logo} />
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1, width: '100%', justifyContent: "center", alignItems: "center" }}
                // keyboardVerticalOffset={Platform.OS === "ios" ? "-64" : "0"}
                >
                    <ScrollView
                        // bounces={false}
                        contentContainerStyle={{
                            flexGrow: 1,
                            // justifyContent: 'center',
                            marginTop: 40,
                            // mar

                        }} >

                        <View style={styles.titles}>
                            <Text style={styles.title}> Welcome back to your</Text>
                            <Text style={styles.title}> workout track</Text>
                        </View>
                        <ScrollView >
                            <View style={styles.form}>
                                {/* <Text style={styles.email}>Email</Text> */}
                                <TextInput style={styles.textInput} value={email} onChangeText={setEmail} placeholder="Email" placeholderTextColor={Colors.GREY} />
                                {/* <View style={styles.textInput}>
                                    <TextInput label="Email" mode="flat" style={{}} />
                                </View> */}

                                {/* <Text style={styles.password}>Password</Text> */}
                                <TextInput style={styles.textInput} value={passoword} onChangeText={setPassoword} placeholder="Password" placeholderTextColor={Colors.GREY} />
                                {/* <View style={styles.textInput}>
                                    <TextInput label="Password" mode="flat" style={{}} />
                                </View> */}
                            </View>
                        </ScrollView>
                    </ScrollView >

                    <View style={styles.buttons}>

                        <View style={styles.startedButton}>
                        </View>
                        {/* <Button title="Get Started" disabled={false} color={false} onPress={() => navigation?.navigate('SignupScreen')} /> */}
                        <LoginBtn btnText="Login" />
                    </View>
                    <View style={styles.forgatButton}>
                        <ButtonText title="Have you forgotten your password?" disabled={false} onPress={() => navigation?.navigate('PlansScreen',)} />
                    </View>

                </KeyboardAvoidingView>

                {/* <Image source={LOGO} style={styles.logoProgress} /> */}
                {/* <View style={styles.progress} >
                    <Text style={styles.progressLogoText}>WingSolid</Text>
                    <Text style={styles.progressText}>Loading</Text>
                    <Progress.Bar progress={0.1} width={300} indeterminate={true} color={Colors.WHITE} height={15} />
                </View> */}
            </ImageBackground >
        </View >
    )
}

export default SigninScreen;
