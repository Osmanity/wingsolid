import React, { FC, useMemo } from "react";
import { ImageBackground, Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from './styles';

interface IProps {
    navigation?: NavigationProp<ParamListBase>
}

const InitialScreen: FC<IProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyles(), []);
    return (
        <View style={styles.body}>
            <ImageBackground source={INITIAL_BACKGROUND}
        </View>
    )
}

export default InitialScreen;