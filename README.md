# Divoc app

React Native source app which displays the information about the COVID-19 spread in Italy.

The app uses the user's location to show data on their region/province.

Source of the data: https://github.com/pcm-dpc/COVID-19

## How to run

I'm not here to teach you how React Native works. But there are a couple of little things to keep in mind, so there you are:

1. check out the repo (duh)
2. Since the app uses Firebase, you should generate a `google-services.json` for Android and/or a `GoogleService-Info.plist` for iOS. If you don't now how, you figure it out 😊. Alternatively, you can remove the Firebase dependency on the app. Again, you figure out how.
3. `npm install`
4. `cd ios && pod install && cd ..`
5. `react-native run-android` or `react-native run-ios`, the yoozh.

Have fun.

## One more thing...

We also have a website: http://divoc.it. Enjoy.
