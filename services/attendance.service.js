const prisma = require('../prisma');

const getAll = async () => {
  const attendances = await prisma.attendance.findMany({
    include: { User: true },
    orderBy: { createdAt: 'desc' },
  });
  return attendances;
};

const create = async (request) => {
  const { id } = await prisma.attendance.create({
    data: {
      fingerprintId: request.fingerprintId,
    },
  });
  const attendance = await prisma.attendance.findFirst({
    where: { id },
    include: { User: true },
  });
  return attendance;
};

module.exports = { create, getAll };
