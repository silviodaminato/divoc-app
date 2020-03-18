import { StyleSheet, Dimensions } from 'react-native';
import Constants from '../utilities/Constants';

const width = Dimensions.get('window').width;
export const fontSizeRatio = width / 414;

export default StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        margin: 20,
        marginTop: 0,
        marginRight: 40
    },
    topView: {
        flex: 1,
        marginTop: 60 * fontSizeRatio
    },
    mainCounter: {

    },
    counter: {
        opacity: 0.8
    },
    caption: {
        fontFamily: Constants.fonts.rubik.light,
        color: Constants.colors.GREY,
        fontSize: 12,
        marginBottom: 5
    },
    sickCount: {
        fontSize: 115 * fontSizeRatio,
        color: Constants.colors.YELLOW,
        lineHeight: 120 * fontSizeRatio,
        marginBottom: -15
    },
    healedCount: {
        fontSize: 40 * fontSizeRatio,
        color: Constants.colors.GREEN,
        marginBottom: -5
    },
    deceasedCount: {
        fontSize: 40 * fontSizeRatio,
        color: Constants.colors.PINK,
        marginBottom: -5
    },
    percentContainer: {
        alignItems: 'baseline'
    },  
    percent: {
        fontSize: 30 * fontSizeRatio,
        color: Constants.colors.WHITE,
        fontFamily: Constants.fonts.rubik.regular
    },
    percentSign: {
        fontFamily: Constants.fonts.rubik.light,
        color: Constants.colors.GREY,
        fontSize: 15 * fontSizeRatio
    },
    buttons: {
        flexWrap: 'wrap',
        marginTop: 30
    },
    date: {
        fontFamily: Constants.fonts.rubik.light,
        color: Constants.colors.PINK,
        fontSize: 12,
        marginTop: 10
    },
});