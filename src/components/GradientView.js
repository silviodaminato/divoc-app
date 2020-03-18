import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default ({gradient, inverted = false, ...props}) => {
    return (
        <LinearGradient
            colors={gradient.colors}
            start={inverted ? gradient.end : gradient.start}
            end={inverted ? gradient.start : gradient.end}
            {...props}
        >
            {props.children}
        </LinearGradient>
    );
}
