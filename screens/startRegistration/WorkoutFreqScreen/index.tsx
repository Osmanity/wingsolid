import React, { FC, useMemo } from "react";
import { Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from './styles';
import ContinueBtn from "../../../components/buttons/ContinueBtn";

interface IProps {
    navigation?: NavigationProp<ParamListBase>
}

const WorkoutFreqScreen: FC<IProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyles(), []);
    return (
        <View style={styles.body}>
            <Text style={styles.text}>WorkoutFreqScreen</Text>
            <ContinueBtn ScreenNav="SelectionResultScreen" btnColor />
        </View>
    )
}

export default WorkoutFreqScreen;