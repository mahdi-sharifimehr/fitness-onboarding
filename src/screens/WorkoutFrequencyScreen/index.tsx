import React, { FC, useMemo } from "react";
import { Text, View } from "react-native";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import createStyles from './styles';

interface IProps {
    navigation: NavigationProp<ParamListBase>
}

const WorkoutFrequencyScreen: FC<IProps> = ({ navigation }) => {
    const styles = useMemo(() => createStyles(), []);
    return (
        <View style={styles.body}>
            <Text style={styles.text}>WorkoutFrequencyScreen</Text>
        </View>
    )
}

export default WorkoutFrequencyScreen;