import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../constant/colors";

const createStyles = () =>
    StyleSheet.create({
        body: {
            flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
        },
        title: {
            top: RFValue(40),
            // flex: 1,
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: 'center',

        },

        text: {
            fontSize: RFValue(25),
            fontWeight: '300',
            color: Colors.BLACK,
            marginRight: RFValue(5),
        },
        planLogo: {

        }
    });

export default createStyles;