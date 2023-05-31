import React, { useState, useCallback } from 'react';
import { LogBox } from 'react-native';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import MainTabBar from './navigation/mainTabBar';
import EntryNavigator from './entry/entryNavigator';
import { Provider } from 'react-redux';
import store from './app/store';
import { useFonts } from 'expo-font';

// disable really annoying in app warnings
LogBox.ignoreAllLogs();

const App = (props) => {
    const [isSignedIn, setIsSignedIn] = useState(true);

    let [fontsLoaded] = useFonts({
        'Glitch-Goblin': require('./../assets/fonts/glitchGoblin/GlitchGoblin.ttf'),
        'Groupe': require('./../assets/fonts/groupe/Groupe-Medium.otf'),
        'Exo-Thin': require('./../assets/fonts/exo/Exo-Thin.ttf'),
        'Exo-ExtraLight': require('./../assets/fonts/exo/Exo-ExtraLight.ttf'),
        'Exo-Light': require('./../assets/fonts/exo/Exo-Light.ttf'),
        'Exo-Regular': require('./../assets/fonts/exo/Exo-Regular.ttf'),
        'Exo-Medium': require('./../assets/fonts/exo/Exo-Medium.ttf'),
        'Exo-SemiBold': require('./../assets/fonts/exo/Exo-SemiBold.ttf'),
        'Exo-Bold': require('./../assets/fonts/exo/Exo-Bold.ttf'),
        'Exo-ExtraBold': require('./../assets/fonts/exo/Exo-ExtraBold.ttf'),
        'Exo-Black': require('./../assets/fonts/exo/Exo-Black.ttf'),
        'Exo-ThinItalic': require('./../assets/fonts/exo/Exo-ThinItalic.ttf'),
        'Exo-ExtraLightItalic': require('./../assets/fonts/exo/Exo-ExtraLightItalic.ttf'),
        'Exo-LightItalic': require('./../assets/fonts/exo/Exo-LightItalic.ttf'),
        'Exo-MediumItalic': require('./../assets/fonts/exo/Exo-MediumItalic.ttf'),
        'Exo-SemiBoldItalic': require('./../assets/fonts/exo/Exo-SemiBoldItalic.ttf'),
        'Exo-BoldItalic': require('./../assets/fonts/exo/Exo-BoldItalic.ttf'),
        'Exo-ExtraBoldItalic': require('./../assets/fonts/exo/Exo-ExtraBoldItalic.ttf'),
        'Exo-BlackItalic': require('./../assets/fonts/exo/Exo-BlackItalic.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
        await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);


    if (!fontsLoaded) {
        return null;
    } 

    console.log(isSignedIn);

    return (
        <Provider store={store} onLayout={onLayoutRootView}>
            {isSignedIn ? <MainTabBar /> : <EntryNavigator />}
        </Provider>
    )
};

registerRootComponent(App);
