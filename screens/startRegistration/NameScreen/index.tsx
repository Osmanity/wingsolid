import React, { FC, useMemo } from "react";
import { Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from './styles';
import ContinueBtn from "../../../components/buttons/ContinueBtn";

interface IProps {
    navigation?: NavigationProp<ParamListBase>
}

const NameScreen: FC<IProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyles(), []);
    return (
        <View style={styles.body}>
            <Text style={styles.text}>NameScreen</Text>
            <ContinueBtn ScreenNav="DateScreen" btnColor />
        </View>
    )
}

export default NameScreen;