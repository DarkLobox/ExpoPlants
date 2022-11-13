npx expo install expo-dev-client
npm install -g eas-cli
eas credentials
npm i @react-native-firebase/auth

npx expo start --dev-client
eas build --profile development --platform android



//Comando para crear apk en produccion
eas build -p android --profile preview

//Cambiar en eas.json en build {}
"preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "preview2": {
      "android": {
        "gradleCommand": ":app:assembleRelease"
      }
    },
    "preview3": {
      "developmentClient": true
    },
    "production": {}


