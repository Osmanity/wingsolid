import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../constant/colors";

const createStyles = () =>
    StyleSheet.create({
        body: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: "relative",
        },
        text: {
            fontSize: RFValue(25),
            fontWeight: '300',
            color: Colors.BLACK
        },
        background: {
            width: '100%',
            height: '100%',
            alignItems: "center",
            // flex: 1,

        },
        logo: {
            width: RFValue(240),
            height: RFValue(240),
            // marginTop: RFValue(5),
            marginBottom: RFValue(10),
            top: RFValue(60),
            marginLeft: RFValue(15),
            // position: "absolute"
        },
        titles: {
            marginTop: RFValue(100),
            alignItems: "center",
            justifyContent: 'center'
        },
        title: {
            fontSize: RFValue(28),
            fontWeight: '300',
            color: Colors.WHITE,
        },
        button: {
            position: "absolute",
            bottom: RFValue(100),
            width: '100%',
            alignItems: "center",
            justifyContent: 'center',
        },

    });

export default createStyles;