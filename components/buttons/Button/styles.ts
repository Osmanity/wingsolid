import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../constant/colors'

const createStyles = () =>
    StyleSheet.create({
        button: {
            width: '90%',
            alignSelf: 'center',
            padding: RFValue(10),
            alignItems: 'center',
            borderRadius: RFValue(5)
        },
        text: {
            // color: Colors.WHITE,
            fontWeight: '700',
            fontSize: RFValue(22),
        }
    });

export default createStyles;