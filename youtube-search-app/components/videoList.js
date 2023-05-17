/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState, useCallback } from 'react';
import { Button, SearchBar } from 'react-native-elements';
import {
    ActivityIndicator,
    StyleSheet,
    View,
    Image,
    Text,
    FlatList,
    TouchableHighlight,
} from 'react-native';

import debounce from 'lodash.debounce';
import youtubeSearch from '../services/youtube-api';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgb(240,240,240)',
    },
    thumbnail: {
        width: 100,
        height: 100,
        marginRight: 5,
        backgroundColor: 'black',
    },
    rightContainer: {
        flex: 1,
        padding: 5,
        height: 100,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    subtitle: {
        fontSize: 12,
    },
    separator: {
        height: 1,
        backgroundColor: 'rgb(200,200,200)',
    },
    listView: {
        backgroundColor: 'rgb(240,240,240)',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const VideoList = (props) => {
    const [state, setState] = useState({
        isLoading: true,
        dataSource: [],
    });
    const [search, setSearch] = useState('true facts');
    // ---------- componentDidMount here! -----------//

    useEffect(() => {
        fetchData();
    }, []);

    // ------------ put fetchData here! -------------//

    const fetchData = () => {
        youtubeSearch(search)
            .then((responseData) => {
                setState({
                    dataSource: responseData,
                    isLoading: false,
                });
            }).catch((error) => {
                console.log(error);
            });
    };

    const debounceFetch = useCallback(debounce(fetchData, 500), []);

    const showVideoDetail = (video) => {
    // pass in video into this.props.navigation.state.params.video in navigated view
        props.navigation.navigate('Detail', { video });
    };

    const renderLoadingView = () => {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    };

    const renderVideoCell = (video) => {
        return (
            <TouchableHighlight onPress={() => { showVideoDetail(video); }} underlayColor="orange">
                <View>
                    <View style={styles.container}>
                        <Image
                            source={{ uri: video.snippet.thumbnails.default.url }}
                            style={styles.thumbnail}
                        />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{video.snippet.title}</Text>
                            <Text style={styles.subtitle}>{video.snippet.description}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    };

    if (state.isLoading) {
        return renderLoadingView();
    }
    return (
        <View>
            <SearchBar
                showsCancelButton={false}
                onChangeText={(query) => {
                    setSearch(query);
                }}
                value={search}
                inputContainerStyle={{ backgroundColor: 'white' }}
                containerStyle={{ backgroundColor: '#c4302b' }}
            />
            <Button title="Search" onPress={() => { fetchData(); }} />

            <FlatList
                data={state.dataSource}
                renderItem={({ item }) => { return renderVideoCell(item); }}
                keyExtractor={(item) => item.snippet.thumbnails.default.url}
                style={styles.listView}
            />
        </View>
    );
};

export default VideoList;
