# Project Intrepid

Our mobile app gamifies getting out of your comfort zone. It encourages people to take risks and do things that they wouldn't necessarily do otherwise. 

## Some screenshots

![create2](https://github.com/nitya308/intrepid/assets/64368452/5def5f12-d1d9-4f20-807c-d14680aa574a)


![feed](https://github.com/nitya308/intrepid/assets/64368452/f9e24f88-8429-42fb-a2e4-acedb491afde)


![submit3](https://github.com/nitya308/intrepid/assets/64368452/3368cbfd-f92d-4e15-8f59-0f767cabbea2)


![saved](https://github.com/nitya308/intrepid/assets/64368452/e3470f43-1e5b-4de0-ad4d-3aadc01a0500)


## Architecture
This uses React Native running on Expo.

Some packages we use are:

* [rn-vertical slider](https://github.com/sacmii/rn-vertical-slider). please note we made a patch to this package to fix a bug in it! It should be auto-applied when you run npm install but see the patches folder for more details.
* [expo-image-picker](https://github.com/expo/expo/tree/main/packages/expo-image-picker)

## Setup/Deployment

First, run ```git clone``` to clone the repository.

Then, run ```cd project-nerve/rn-app``` 

Then ```npm install``` to set up packages. Please make sure you are in the ```rn-app``` directory before doing this!!

Run ```npx expo start``` to start the app. If it doesn't load on your phone and recommends tunneling, run ```expo start --tunnel``` in the rn-app directory. Make sure your phone and computer are on the same wifi.

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
