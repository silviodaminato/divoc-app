import React from 'react';
import { View, StyleSheet } from 'react-native';

export default (props) => {
    return (
        <View style={[styles.horizontal, props.style]}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    horizontal: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
