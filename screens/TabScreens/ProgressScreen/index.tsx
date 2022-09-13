import React, { FC, useMemo } from "react";
import { Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from './styles';
import { useSelector } from "react-redux";

interface IProps {
    navigation?: NavigationProp<ParamListBase>
}

const ProgressScreen: FC<IProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyles(), []);
    const count = useSelector((state) => state.counter.value)
    return (
        <View style={styles.body}>
            <Text style={styles.text}>ProgressScreen</Text>
            <Text> {count} </Text>

        </View>
    )
}

export default ProgressScreen;