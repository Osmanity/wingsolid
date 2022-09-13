import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../../constant/colors'

const createStyles = () =>
    StyleSheet.create({
        button: {
            width: '100%',
            alignSelf: 'center',
            padding: RFValue(6),
            alignItems: 'center',
            borderRadius: RFValue(10),
            borderWidth: RFValue(1),
            borderColor: Colors.WHITE,
            marginTop: RFValue(10),
            // backgroundColor:
        },
        text: {
            // color: Colors.WHITE,
            fontSize: RFValue(12),
            alignItems: "center",
            justifyContent: 'center',
        }
    });

export default createStyles;