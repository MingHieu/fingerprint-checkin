const socket = io();
socket.on('checkin', (data) => {
  FuiToast.success(`Nhân viên ${data.User.name} chấm công`);
  const attendances = document.querySelector('#attendances');
  attendances.innerHTML =
    `
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            ${data.User.name}
        </th>
        <td class="px-6 py-4">
            ${data.fingerprintId}
        </td>
        <td class="px-6 py-4">
            ${new Date(data.createdAt).toLocaleString('vi-VN')}
        </td>
    </tr>
    ` + attendances.innerHTML;
});

socket.on('checkin-error', (data) => {
  FuiToast.error(`Nhân viên không tồn tại`);
});
