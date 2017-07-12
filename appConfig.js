const appConfig = {};

appConfig.deviceId = 'myFirstNodeDevice';
appConfig.deviceKey = 'wEY1NhJnjc5YNNVafBl/YmqSYu3++qbq5ERdle7CBtw=';
appConfig.eventHubDomain = 'sb://iothub-ns-h5-sample-125353-f6b61172ca.servicebus.windows.net/';//???
appConfig.eventHubName = 'h5-sample-app-new';


appConfig.iotHubDomain = 'lindi01.azure-devices.net';
appConfig.iotHubKeyName = 'iothubowner';
appConfig.iotHubKey = 'pe3xqh0uVQ5WpVsq6wH48PVALMAwqC+rTok3vCm2uec=';

  /*

if (process.env.NODE_ENV !== 'production') {
  appConfig.deviceKey = 'yMVUvkCNtSvKvrKYI0WYe13Z9uXev+retAsw3ccbqr8=';
  appConfig.eventHubDomain = 'sb://iothub-ns-h5-sample-125353-f6b61172ca.servicebus.windows.net/';
  appConfig.eventHubName = 'h5-sample-app-new';
  appConfig.iotHubDomain = 'h5-sample-app-new.azure-devices.net';
  appConfig.iotHubKey = 'V0tFHj1FSzg13W4FRAKdB9k1f7BAuhaMBTv23GFB1LI=';
} else {
  appConfig.deviceKey = 'yMVUvkCNtSvKvrKYI0WYe13Z9uXev+retAsw3ccbqr8=';
  appConfig.eventHubDomain = 'sb://ihsuprodhkres002dednamespace.servicebus.windows.net/';
  appConfig.eventHubName = 'iothub-ehub-h5-sample-102794-2124aabc0a';
  appConfig.iotHubDomain = 'h5-sample-app.azure-devices.net';
  appConfig.iotHubKey = 'fHLwJOC7vosvums2ErA1nhNiBv3Zcv44ymCF/qNKWTQ=';
}

appConfig.emotionSubscription = 'ec818b5d85504476b66635ab08f647f6';
appConfig.faceSubscription = '894d058065844b8e938ca980151070a4';
*/
module.exports = appConfig;