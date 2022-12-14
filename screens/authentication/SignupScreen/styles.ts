import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "../../../constant/colors";

const createStyles = () =>
    StyleSheet.create({
        body: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            fontSize: RFValue(25),
            fontWeight: '300',
            color: Colors.BLACK
        },
        textInput: {
            borderBottomColor: Colors.BLACK,
            borderBottomWidth: RFValue(2),
            alignSelf: "center",
            margin: 16,
            padding: 8,
            width: '50%',
        }
    });

export default createStyles;