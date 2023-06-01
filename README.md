# Nerve

![Team Photo](./rn-app/assets/images/readme-team-photo.jpeg)

Our mobile app gamifies getting out of your comfort zone. It encourages people to take risks and do things that they wouldn't necessarily do otherwise. 

## Architecture
This uses React Native running on Expo.

We will be using packages such as [react-native-maps](https://github.com/react-native-maps/react-native-maps)

## Setup/Deployment

First, run ```git clone``` to clone the repository.

Then, run ```cd project-nerve/rn-app``` and ```npm install``` to set up packages.

Run ```npx expo start``` to start the app. If it doesn't load on your phone and recommends tunneling, run ```expo start --tunnel``` in the rn-app directory.

This will be deployed on Expo and possibly TestFlight.

Frontend URL: https://expo.dev/@cs52nerve/rn-app?serviceType=classic&distribution=expo-go
    - not currently on continuous integration, so do ```expo publish``` in the "rn-app" directory to re-publish newest changes
Backend URL: https://project-nerve-backend.onrender.com/

## Authors

Andy Kotz
Ashna Kumar
Devon Starr
Justin Chong
Nitya Agarwala
Sarah Chacko

## Acknowledgments

For our acknowledgements, We would like to thank our wonderful professor and TAs with providing us with the tools to build the app of our choosing.