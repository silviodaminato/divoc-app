/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import MainView from './src/containers/MainView';
import { StatusBar } from 'react-native';
import moment from 'moment/min/moment-with-locales';

moment.locale('it');

const App: () => React$Node = () => {
    return (
        <>
        <StatusBar barStyle="light-content" />
        <MainView />
        </>
    );
};


export default App;
