import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from '../utilities/Constants';

export default ({ sick, healed, deceased }) => {
    if (healed == undefined && deceased == undefined) {
        return null;
    }
    let sickPercent, healedPercent, deceasedPercent;
    const total = sick + healed + deceased;

    if (!total) {
        sickPercent = 33;
        healedPercent = 33;
        deceasedPercent = 33;
    } else {
        sickPercent = Math.round(sick / total * 100);
        healedPercent = Math.round(healed / total * 100);
        deceasedPercent = Math.round(deceased / total * 100);
    }

    return (
        <View style={styles.container}>
            <View style={[styles.progress, styles.sick, { height: `${sickPercent}%` }]} />
            <View style={[styles.progress, styles.healed, { height: `${healedPercent}%` }]} />
            <View style={[styles.progress, styles.deceased, { height: `${deceasedPercent}%` }]} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
        marginBottom: 50,
        marginTop: 5
    },
    progress: {
        width: 30,
        borderRadius: 15,
        marginBottom: 10
    },
    sick: {
        backgroundColor: Constants.colors.YELLOW
    },
    healed: {
        backgroundColor: Constants.colors.GREEN
    },
    deceased: {
        backgroundColor: Constants.colors.PINK
    }
});