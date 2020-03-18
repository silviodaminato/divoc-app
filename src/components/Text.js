import React from "react";
import { StyleSheet, Text as ReactNativeText } from "react-native";
import Constants from "../utilities/Constants";

const Text = (props) => {
    const newStyle = StyleSheet.compose(styles.baseFont, props.style);
    const newProps = { ...props, style: newStyle };
    return <ReactNativeText {...newProps} />
};

const styles = StyleSheet.create({
    baseFont: {
        fontFamily: Constants.fonts.rubik.regular,
        color: Constants.colors.WHITE
    }
});

export default Text;