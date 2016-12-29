
import React, {
    Component,
} from 'react';

import {
    AppRegistry,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import SecondPageComponent from './SecondPageComponent';
var REQUEST_URL = 'https://api.douban.com/v2/movie/in_theaters';


class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };
        // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
        // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.subjects),
                    loaded: true,
                });
            });
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();

        }

        return (
            <View>
                <Text style={styles.Top}>正在上映</Text>
                <TouchableOpacity onPress={()=> {this.push()}}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovie}
                style={styles.listView}
            />
                    </TouchableOpacity>
</View>
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    }

    renderMovie(movie) {
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: movie.images.small}}
                    style={styles.thumbnail}
                />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{"年份："+movie.year}</Text>
                    <Text style={styles.genres}>{"影片类型："+movie.genres}</Text>
                    <Text style={styles.average}>{"豆瓣评分："+movie.rating.average}</Text>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    Top:{
        textAlign: 'center',
        fontSize:20,
        alignItems: 'center',
        color:'#FFFFFF',
        paddingTop:15,
        justifyContent: 'center',
        height: 50,
        backgroundColor:'#1E90FFs',
    },
    content:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#EBEBEB',
        flex:1,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderBottomWidth:0.7,
        borderBottomColor:'#DCDCDC',
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        marginBottom: 8,
        //textAlign: 'center',
    },
    original_title:{
        marginTop:-15,
        textAlign:'center',
    },
    thumbnail: {
        width: 53,
        height: 85,
    },
    listView: {
        paddingTop: 0,
        backgroundColor: '#F5FCFF',
    },
});


export default Movies;