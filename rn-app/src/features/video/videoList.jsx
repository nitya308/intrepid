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
    const videos = [
        {
            thumbnail: 'https://i.ytimg.com/vi/2Vv-BfVoq4g/default.jpg',
            title: 'True Facts About The Mantis Shrimp',
            description: 'Post to Facebook: http://on.fb.me/12qbKcy Tweet This: http://bit.ly/10UlGdP (you can change the text) music: http://www.soundcloud.com',
            embedId: 'dQw4w9WgXcQ',
        },
        {
            thumbnail: 'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg',
            title: 'Video 2',
            description: 'This is a description for the second video. These are all fake videos. None of them are real. I got rid of the api because we won\'t use it so I just made up some fake data.',
            embedId: 'dQw4w9WgXcQ',
        },
        {
            thumbnail: 'https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
            title: 'Third Video',
            description: 'Description for third video: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec n stuff...',
            embedId: 'dQw4w9WgXcQ',
        },
        {
            thumbnail: 'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=',
            title: 'Quatro Video',
            description: 'This is a description for the fourth video. These are all fake videos. None of them are real. I am running out of ideas for descriptions. Please help me.',
            embedId: 'dQw4w9WgXcQ',
        },
        {
            thumbnail: 'https://images.pexels.com/photos/2125422/pexels-photo-2125422.jpeg?cs=srgb&dl=pexels-hassan-ouajbir-2125422.jpg&fm=jpg',
            title: 'Five Number Video',
            description: 'Description of the fifth video please help me. I am running out of ideas for descriptions.',
            embedId: 'dQw4w9WgXcQ',
        },
    ];
    const [search, setSearch] = useState('true facts');
    // ------------ put fetchData here! -------------//

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
                            source={{ uri: video.thumbnail }}
                            style={styles.thumbnail}
                        />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{video.title}</Text>
                            <Text style={styles.subtitle}>{video.description}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    };

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
            <Button title="Search" onPress={() => { }} />

            <FlatList
                data={videos}
                renderItem={({ item }) => { return renderVideoCell(item); }}
                keyExtractor={(item) => item.thumbnail}
                style={styles.listView}
            />
        </View>
    );
};

export default VideoList;
