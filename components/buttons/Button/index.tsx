import React, { FC, useMemo } from "react";
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import { Colors } from '../../../constant/colors'
import createStyles from './styles';

interface IProps {
    title: string
    onPress?: () => void
    disabled?: boolean
    buttonStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    color?: boolean
}

const Button: FC<IProps> = ({ title, onPress, disabled, buttonStyle, textStyle, color }) => {

    const styles = useMemo(() => createStyles(), []);

    return (
        <Pressable
            style={[
                styles.button,
                {
                    backgroundColor: disabled ? Colors.GREY : color ? Colors.BLACK : Colors.WHITE
                },
                buttonStyle
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[styles.text, {
                color: color ? Colors.WHITE : Colors.BLACK,
            }, textStyle]}>
                {title}
            </Text>
        </Pressable>
    )

}

export default Button;