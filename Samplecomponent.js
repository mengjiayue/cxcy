import React, {
    Component,
} from 'react';
import {
    View,
    Navigator
} from 'react-native';
import Movies from './Movies';
export default class SampleComponent extends React.Component {
    render() {
        let defaultName = 'Movies';
        let defaultComponent = Movies;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }} />
        );
    }
}
