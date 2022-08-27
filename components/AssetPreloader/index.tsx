import React, { FC, useEffect, useMemo, useState } from "react";
import { Pressable, StyleProp, Text, TextStyle, View, ViewStyle } from "react-native";
import { Colors } from '../../constant/colors'
import createStyles from './styles';


import { INITIAL_BACKGROUND, LOGO } from "../../assets";
import * as Progress from 'react-native-progress';
import * as Font from "expo-font";
import { Asset } from "expo-asset";

// interface arr {
//     text: string | number;
// }

interface IProps {
    assetsToLoad?: any;
}


const AssetPreloader: FC<IProps> = ({ assetsToLoad }) => {

    const styles = useMemo(() => createStyles(), []);

    //////////////////////////////////////////////////////////////////////////////////////////
    /*            Preloading and Caching Assets           */
    //////////////////////////////////////////////////////////////////////////////////////////

    let [isLoaded, setIsLoaded] = useState(false);

    let cacheResources = async () => {
        const images = [INITIAL_BACKGROUND, LOGO];
        // const images = assetsToLoad;

        const cacheImages = images?.map((image: string | number) => {
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
        return (
            <View style={styles.progress} >
                {/* <Image source={LOGO} style={styles.logoProgress} /> */}
                <Text style={styles.progressLogoText}>WingSolid</Text>
                <Text style={styles.progressText}>Loading</Text>
                <Progress.Bar progress={0.1} width={300} indeterminate={true} color={Colors.WHITE} height={15} />
            </View>
        )
    }

    //////////////////////////////////////////////////////////////////////////////////////////
    return (
        // typescript says return something...
        <>
        </>
    )

}

export default AssetPreloader;