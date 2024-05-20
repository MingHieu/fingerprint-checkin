const prisma = require('../prisma');

const getAll = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const create = async (request) => {
  const user = await prisma.user.create({
    data: {
      name: request.name,
      fingerprintId: +request.fingerprintId,
    },
  });
  return user;
};

const count = async () => {
  const count = await prisma.user.count();
  return count;
};

module.exports = { create, getAll, count };
