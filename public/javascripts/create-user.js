const getFingerprint = () => {
  fetch('http://localhost:3000/users/create-fingerprint');
};

const socket = io();
socket.on('fingerprint-created', (data) => {
  document.querySelector('#toggle-btn').click();
  FuiToast.success(`Lấy vân tay thành công`);
  const fingerprintInput = document.querySelector('#fingerprintId');
  fingerprintInput.value = data.id;
});
