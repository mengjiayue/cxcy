/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import Tab from './tab';
import Movies from './Movies';
import Movies2 from './scendmovie';
import SampleComponent from './Samplecomponent';

class SampleAppMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabNames: ['正在上映', '即将上映', '北美票房榜', 'Top榜'],
            tabIconNames: ['ios-flame', 'md-bulb', 'ios-paper-plane', 'ios-person-add'],
        };
    }
    render() {
        let tabNames = this.state.tabNames;
        let tabIconNames = this.state.tabIconNames;
        return (
            <ScrollableTabView
                renderTabBar={() => <Tab tabNames={tabNames} tabIconNames={tabIconNames}/>}
                tabBarPosition='bottom'>
                <SampleComponent style={styles.content} tabLabel='key1'/>

                <Movies style={styles.content} tabLabel='key2'/>

                <Movies2 style={styles.content} tabLabel='key3'/>



                <View style={styles.content} tabLabel='key4'>
                    <Text>#4</Text>
                </View>
            </ScrollableTabView>
        );
    }
}
const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBEBEB',
        flex: 1
    }
});
AppRegistry.registerComponent('SampleAppMovies', () => SampleAppMovies);