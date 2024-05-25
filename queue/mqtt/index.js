const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com');
const socket = require('../ws');
const attendanceService = require('../../services/attendance.service');

client.on('connect', () => {
  client.subscribe('ptit-iot-fingerprint-checkin');
});

client.on('message', (topic, message) => {
  const messageData = JSON.parse(message);
  handleMessage(messageData);
});

const handleMessage = async (data) => {
  if (data.type === 'created') {
    socket.get().emit('fingerprint-created', { id: data.id });
  }
  if (data.type === 'checkin') {
    try {
      const attendance = await attendanceService.create({
        fingerprintId: data.id,
      });
      socket.get().emit('checkin', attendance);
    } catch (error) {
      socket.get().emit('checkin-error');
    }
  }
};

module.exports = client;
