import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../constant/colors";

const createStyles = () =>
    StyleSheet.create({
        body: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
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
            position: "relative"
        },
        logo: {
            width: RFValue(100),
            height: RFValue(100),
            // marginTop: RFValue(5),
            marginBottom: RFValue(10),
            top: RFValue(60),
            marginLeft: RFValue(15),
            // position: "absolute"
        },
        titles: {
            marginTop: RFValue(160),
            alignItems: "center",
            justifyContent: 'center'
        },
        title: {
            fontSize: RFValue(30),
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



        form: {
            marginTop: RFValue(40),
            alignItems: "center",
            justifyContent: 'center'
        },
        email: {
            fontSize: RFValue(25),
            fontWeight: '100',
            color: Colors.WHITE,
            // borderWidth: RFValue(2),
            // borderColor: Colors.WHITE,
            // borderBottomWidth: RFValue(2),
        },
        password: {
            fontSize: RFValue(25),
            fontWeight: '100',
            color: Colors.WHITE
        },
        forgatButton: {
            marginTop: RFValue(30),
            width: '70%'
        },
        startedButton: {
            marginTop: RFValue(50),
        },
        buttons: {
            position: "absolute",
            bottom: RFValue(100),
            width: '100%',
            alignItems: "center",
            justifyContent: 'center',

            // marginTop: RFValue(40),
        }

    });

export default createStyles;