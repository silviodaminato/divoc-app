import React from "react";
import { StyleSheet, Text as ReactNativeText } from "react-native";
import Constants from "../utilities/Constants";

export default (props) => {
    const newStyle = StyleSheet.compose(styles.baseFont, props.style);
    const newProps = { ...props, style: newStyle };
    return <ReactNativeText {...newProps} />
};

const styles = StyleSheet.create({
    baseFont: {
        fontFamily: Constants.fonts.potra.light,
        color: Constants.colors.WHITE
    }
});
