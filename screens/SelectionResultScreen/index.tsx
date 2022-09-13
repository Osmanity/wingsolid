import React, { FC, useMemo } from "react";
import { Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from './styles';
import ContinueBtn from "../../components/buttons/ContinueBtn";
import LoginBtn from "../../components/buttons/loginBtn";

interface IProps {
    navigation?: NavigationProp<ParamListBase>
}

const SelectionResultScreen: FC<IProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyles(), []);
    return (
        <View style={styles.body}>
            <Text style={styles.text}>SelectionResultScreen</Text>
            <ContinueBtn ScreenNav="TabNavigation" btnColor />
            <LoginBtn btnText="Login" />

        </View>
    )
}

export default SelectionResultScreen;