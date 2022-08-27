import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from '../../constant/colors'

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
        },

        logoProgress: {
            width: RFValue(100),
            height: RFValue(100),
            marginTop: RFValue(5),
            marginBottom: RFValue(15),
            marginLeft: RFValue(8),
        },
        progressLogoText: {
            fontSize: RFValue(30),
            fontWeight: '500',
            color: Colors.WHITE,
            marginTop: RFValue(40),
            marginBottom: RFValue(40),
        },
        progressText: {
            fontSize: RFValue(20),
            fontWeight: '400',
            color: Colors.WHITE,
            marginBottom: RFValue(10),
        },
        progress: {
            backgroundColor: Colors.BLACK,
            padding: RFValue(20),
            paddingBottom: RFValue(20),
            borderRadius: RFValue(10),

            // top: RFValue(50),
            // position: "absolute",
            // marginTop: RFValue(10),
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
        },
    });

export default createStyles;