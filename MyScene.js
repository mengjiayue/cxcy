import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';


export default class MyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
    }
    render() {
        return (

            <View>
                <Text>Current Scene: { this.props.title }</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <tabNames>即将上映</tabNames>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <tabNames>正在上映</tabNames>
                </TouchableHighlight>
            </View>
        )
    }
}
//AppRegistry.registerComponent('YoDawgApp', () => YoDawgApp);
export default MyScene;


class SimpleNavigationApp extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ title: 'My Initial Scene', index: 0 }}
                renderScene={(route, navigator) =>
                    <MyScene
                        title={route.title}

                        // Function to call when a new scene should be displayed
                        onForward={ () => {
                            const nextIndex = route.index + 1;
                            navigator.push({
                                title: 'Scene ' + nextIndex,
                                index: nextIndex,
                            });
                        }}

                        // Function to call to go back to the previous scene
                        onBack={() => {
                            if (route.index > 0) {
                                navigator.pop();
                            }
                        }}
                    />
                }
            />
        )
    }
}

AppRegistry.registerComponent('SimpleNavigationApp', () => SimpleNavigationApp);