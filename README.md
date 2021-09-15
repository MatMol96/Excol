# Excol APP

This is a mobile application backed [React Native](https://facebook.github.io/react-native/) app for ...

## Setup

This project was bootstrapped with [React Native Boilerplate
](https://thecodingmachine.github.io/react-native-boilerplate/).

Below you'll find information about performing common tasks. The most recent version of this guide is available [here](https://github.com/thecodingmachine/react-native-boilerplate/blob/master/README.md).

## Table of Contents

- [Excol APP](#excol-app)
  - [Setup](#setup)
  - [Table of Contents](#table-of-contents)
  - [First run](#first-run)
  - [Available Scripts](#available-scripts)
    - [`yarn`](#yarn)
    - [`yarn start`](#yarn-start)
    - [`yarn ios`](#yarn-ios)
    - [`yarn android`](#yarn-android)
        - [Using Android Studio's `adb`](#using-android-studios-adb)

## First run

Check the [official guide](https://reactnative.dev/docs/environment-setup) to setup your development environment. (React Native CLI Quickstart section)

## Available Scripts

If Yarn was installed when the project was initialized, then dependencies will have been installed via Yarn, and you should probably use it to run these commands as well. Unlike dependency installation, command running syntax is identical for Yarn and NPM at the time of this writing.

### `yarn`

This is the command used to install dependencies.

### `yarn start`

Runs your server app in development mode.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
yarn start -- --reset-cache
```

### `yarn ios`

Like `yarn start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

### `yarn android`

Like `yarn start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).
