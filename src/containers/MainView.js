import React, { Component } from 'react';
import { SafeAreaView, View } from 'react-native';
import Styles from './MainViewStyle';
import TextNumber from '../components/TextNumber';
import GradientView from '../components/GradientView';
import Constants from '../utilities/Constants';
import Text from '../components/Text';
import HorizontalView from '../components/HorizontalView';
import ProgressView from '../components/ProgressView';
import Button from '../components/Button';
import StatisticsManager from '../managers/StatisticsManager';
import _ from 'lodash';
import { getUserLocation } from '../utilities/Utilities';
import GeocodingManager from '../managers/GeocodingManager';
import moment from 'moment/min/moment-with-locales';

class MainView extends Component {
    state = {
        selectedTab: 0,
        national: {},
        regional: {},
        provincial: {},
    }

    getStats = array => {
        if (!array) { return {} }
        console.log(array);
        if (array.length == 0) { return {} }

        const today = _.last(array)

        const yesterday = array.length > 2 && array[array.length - 2];
        const weekAgo = array.length > 7 && array[array.length - 7];

        todaySick = today.totale_attualmente_positivi || today.totale_casi;
        yesterdaySick = yesterday.totale_attualmente_positivi || yesterday.totale_casi;
        weekAgoSick = weekAgo.totale_attualmente_positivi || weekAgo.totale_casi;

        const yesterdayDelta = todaySick - yesterdaySick;
        const weekDelta = todaySick - weekAgo.totale_attualmente_positivi;

        return {
            date: today.data,
            sick: todaySick,
            healed: today.dimessi_guariti,
            deceased: today.deceduti,
            yesterdayPercent: yesterdayDelta && Math.round(yesterdayDelta / yesterdaySick * 100),
            weekPercent: weekDelta && Math.round(weekDelta / weekAgoSick * 100),
            provinceShortName: today.sigla_provincia
        }
    }

    componentDidMount() {
        StatisticsManager.getStatistics().then(({ national, regional, provincial }) => {
            this.setState({
                national: this.getStats(national),
            });

            getUserLocation().then(location => {
                GeocodingManager.reverseGeocode(location.latitude, location.longitude).then(result => {
                    console.log(result);

                    const region = result.address.state;
                    const regionalStatsArray = regional.filter(item => item.denominazione_regione == region.replace('-', ' '));
                    const regionalStats = this.getStats(regionalStatsArray);
                    this.setState({
                        region,
                        regional: regionalStats,
                    });

                    const province = result.address.county;
                    const provincialStatsArray = provincial.filter(item => item.denominazione_provincia == province);
                    const provincialStats = this.getStats(provincialStatsArray);

                    this.setState({
                        province: provincialStats.provinceShortName || province,
                        provincial: { ...provincialStats, province: true },
                    });
                });
            });
        })
    }

    selectTab = tab => {
        this.setState({ selectedTab: tab });
    }

    leadingZeros = value => {
        var s = "000000000" + value;
        return s.substr(s.length - 3);
    }

    render() {
        let stats;
        console.log(this.state)
        switch (this.state.selectedTab) {
            case 0:
                stats = this.state.national;
                break;
            case 1:
                stats = this.state.regional;
                break;
            case 2:
                stats = this.state.provincial;
                break;
        }
        const { sick, healed, deceased, weekPercent = 0, yesterdayPercent = 0 } = stats;

        let sickThousands = '', sickUnits = '';

        if (sick) {
            sickThousands = Math.floor(sick / 1000) || '';
            sickUnits = this.leadingZeros(sick % 1000);
        }

        let dateString = null;
        if (stats.date) {
            const date = moment(stats.date);
            dateString = `Dati aggiornati ${date.format('dddd D MMMM YYYY')}`;
        }

        return (
            <GradientView gradient={Constants.gradients.BACKGROUND} style={Styles.container}>
                <SafeAreaView style={Styles.content}>
                    <View style={Styles.topView} >
                        <HorizontalView style={{ alignItems: 'flex-start', flex: 1 }}>

                            {stats.province ? (
                                <View>
                                    <View style={Styles.mainCounter}>
                                        {!!sickThousands && <TextNumber style={[Styles.sickCount, { marginBottom: -10 }]}>{sickThousands}</TextNumber>}
                                        <TextNumber style={Styles.sickCount}>{sickUnits}</TextNumber>
                                        <Text style={Styles.caption}>casi totali</Text>
                                    </View>
                                </View>
                            ) : (
                                    <View>
                                        <View style={Styles.mainCounter}>
                                            {!!sickThousands && <TextNumber style={[Styles.sickCount, { marginBottom: -30 }]}>{sickThousands}</TextNumber>}
                                            <TextNumber style={Styles.sickCount}>{sickUnits}</TextNumber>
                                            <Text style={Styles.caption}>attualmente positivi</Text>
                                        </View>

                                        {healed != undefined && <View style={Styles.counter}>
                                            <TextNumber style={Styles.healedCount}>{healed}</TextNumber>
                                            <Text style={Styles.caption}>guariti</Text>
                                        </View>}

                                        {deceased != undefined && <View style={Styles.counter}>
                                            <TextNumber style={Styles.deceasedCount}>{deceased}</TextNumber>
                                            <Text style={Styles.caption}>deceduti</Text>
                                        </View>}
                                    </View>
                                )}
                            <ProgressView sick={sick} healed={healed} deceased={deceased} />
                        </HorizontalView>
                    </View >

                    {
                        !isNaN(yesterdayPercent) && <View style={Styles.counter}>
                            <HorizontalView style={Styles.percentContainer}>
                                <TextNumber style={Styles.percent}>{yesterdayPercent > 0 && '+'}{yesterdayPercent}</TextNumber>
                                <Text style={Styles.percentSign}>%</Text>
                            </HorizontalView>
                            <Text style={Styles.caption}>{stats.province ? 'casi totali rispetto a ieri' : 'positivi rispetto a ieri'}</Text>
                        </View>
                    }

                    {
                        !isNaN(weekPercent) && <View style={Styles.counter}>
                            <HorizontalView style={Styles.percentContainer}>
                                <TextNumber style={Styles.percent}>{weekPercent > 0 && '+'}{weekPercent}</TextNumber>
                                <Text style={Styles.percentSign}>%</Text>
                            </HorizontalView>
                            <Text style={Styles.caption}>positivi rispetto a una settimana fa</Text>
                        </View>
                    }

                    <HorizontalView style={Styles.buttons}>
                        <Button title='Italia' selected={this.state.selectedTab == 0} onPress={() => { this.selectTab(0) }} />
                        {Object.keys(this.state.regional).length > 0 && <Button title={this.state.region} selected={this.state.selectedTab == 1} onPress={() => { this.selectTab(1) }} />}
                        {Object.keys(this.state.provincial).length > 0 && <Button title={this.state.province} selected={this.state.selectedTab == 2} onPress={() => { this.selectTab(2) }} />}
                    </HorizontalView>

                    <Text style={Styles.date}>{dateString}</Text>
                </SafeAreaView >
            </GradientView >
        );
    }
}

export default MainView;