module.exports = {
  formatIndex: (i) => {
    return +i + 1;
  },
  formatDate: (d) => {
    return new Date(d).toLocaleString('vi-VN');
  },
};
