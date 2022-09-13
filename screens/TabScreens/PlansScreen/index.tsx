import React, { FC, useMemo } from "react";
import { Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from './styles';
import { Colors } from "../../../constant/colors";

import {
    UserIcon,
    ChevronDownIcon,
} from "react-native-heroicons/outline";

import { CalendarDaysIcon } from "react-native-heroicons/solid";
import { Icon } from "@rneui/themed";
import CounterBtn from "../../../components/buttons/CounterBtn";
import { useSelector } from "react-redux";
import LogoutBtn from "../../../components/buttons/LogoutBtn";

interface IProps {
    navigation?: NavigationProp<ParamListBase>
}

const PlansScreen: FC<IProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyles(), []);
    const count = useSelector((state) => state.counter.value)
    return (
        <View style={styles.body}>
            <View style={styles.title} >
                <Text style={styles.text}>PlansScreen</Text>
                <CalendarDaysIcon style={styles.planLogo} color={Colors.BLACK} size={30} />
                {/* <Icon
                raised
                name='restaurant'
                type='material'
                color='#000'
            /> */}

            </View>

            <Text> {count} </Text>
            <CounterBtn btnText="Increment" />

            <LogoutBtn btnText="Logout" />

        </View>
    )
}

export default PlansScreen;