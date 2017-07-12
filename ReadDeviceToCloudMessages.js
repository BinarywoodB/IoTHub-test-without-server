//npm init
//npm install azure-event-hubs --save

'use strict';

const EventHubClient = require('azure-event-hubs').Client;
const config = require('./appConfig');

const connectionString = `HostName=${config.iotHubDomain};SharedAccessKeyName=${config.iotHubKeyName};SharedAccessKey=${config.iotHubKey}`;
//HostName=lindi01.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=pe3xqh0uVQ5WpVsq6wH48PVALMAwqC+rTok3vCm2uec=

var printError = function (err) {
  console.log(err.message);
};

var printMessage = function (message) {
  console.log('Message received: ');
  console.log(JSON.stringify(message.body));
  console.log('');
};

const client = EventHubClient.fromConnectionString(connectionString);
client.open()
    .then(client.getPartitionIds.bind(client))
    .then(function (partitionIds) {
        return partitionIds.map(function (partitionId) {
            return client.createReceiver('$Default', partitionId, { 'startAfterTime' : Date.now()}).then(function(receiver) {
                console.log('Created partition receiver: ' + partitionId)
                receiver.on('errorReceived', printError);
                receiver.on('message', printMessage);
            });
        });
    })
    .catch(printError);