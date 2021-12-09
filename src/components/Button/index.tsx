import React, { FC, useMemo } from "react";
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";
import { Colors } from "../../constants/colors";
import createStyles from './styles';

interface IProps {
    title: string
    onPress?: () => void
    disabled?: boolean
    buttonStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
}

const Button: FC<IProps> = ({ title, onPress, disabled, buttonStyle, textStyle }) => {

    const styles = useMemo(() => createStyles(), []);

    return (
        <Pressable
            style={[
                styles.button,
                {
                    backgroundColor: disabled ? Colors.GREY : Colors.ORANGE
                },
                buttonStyle
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={[styles.text, textStyle]}>
                {title}
            </Text>
        </Pressable>
    )

}

export default Button;