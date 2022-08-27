import React, { FC, useMemo } from "react";
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from '../../../constant/colors'
import createStyles from './styles';

interface IProps {
    title: string
    onPress?: () => void
    disabled?: boolean
    buttonStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    textColor?: Boolean
}

const ButtonText: FC<IProps> = ({ title, onPress, disabled, buttonStyle, textStyle, textColor }) => {

    const styles = useMemo(() => createStyles(), []);

    return (
        <TouchableOpacity
            style={[
                styles.button,
                buttonStyle
            ]}
            onPress={onPress}
        // disabled={disabled}
        >
            <Text style={[styles.text, {
                color: textColor ? Colors.BLACK : Colors.WHITE,
            }, textStyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    )

}

export default ButtonText;