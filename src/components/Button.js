import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Constants from '../utilities/Constants';
import Text from './Text';
import { fontSizeRatio } from '../containers/MainViewStyle';

export default ({ title, selected, onPress = () => { } }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, !selected && {opacity: 0.4}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        height: 40 * fontSizeRatio,
        paddingHorizontal: 30 * fontSizeRatio,
        borderRadius: 20 * fontSizeRatio,
        borderWidth: 1,
        borderColor: Constants.colors.PINK,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 10,
        fontFamily: Constants.fonts.rubik.light,
    },
    title: {
        fontSize: 15 * fontSizeRatio,
        color: Constants.colors.PINK
    }
});