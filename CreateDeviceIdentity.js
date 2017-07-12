//https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-node-node-getstarted#create-a-device-identity


//npm init
//npm install azure-iothub --save
'use strict';

const iothub = require('azure-iothub');
const config = require('./appConfig');

const connectionString = `HostName=${config.iotHubDomain};SharedAccessKeyName=${config.iotHubKeyName};SharedAccessKey=${config.iotHubKey}`;
//HostName=lindi01.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=pe3xqh0uVQ5WpVsq6wH48PVALMAwqC+rTok3vCm2uec=

const registry = iothub.Registry.fromConnectionString(connectionString);

var device = new iothub.Device(null);
device.deviceId = 'myFirstNodeDevice';
registry.create(device, function(err, deviceInfo, res) {
  if (err) {
    registry.get(device.deviceId, printDeviceInfo);
  }
  if (deviceInfo) {
    printDeviceInfo(err, deviceInfo, res)
  }
});

function printDeviceInfo(err, deviceInfo, res) {
  if (deviceInfo) {
    console.log('Device ID: ' + deviceInfo.deviceId);
    console.log('Device key: ' + deviceInfo.authentication.symmetricKey.primaryKey);
  }
}