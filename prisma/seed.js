const { PrismaClient } = require('@prisma/client')
const dayjs = require('dayjs')

const prisma = new PrismaClient()

const deviceData = [
  {
    name: "DaHua1",
    username: "admin",
    password: 'L2827686',
    ip: '192.168.223.238',
    addr: 'A01',
    createTime: dayjs(),
    logs: {
      create: [
        {
          time: dayjs("2024-05-29 17:07:24"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-29 17:07:29"),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs("2024-05-30 17:07:24"),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs("2024-05-31 17:07:24"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-31 17:07:29"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-31 17:07:34"),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-31 17:07:39"),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs("2024-06-01 17:07:14"),
          level: 1,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-01 17:07:19"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-01 17:07:24"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-01 17:07:29"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-01 17:07:34"),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-01 17:07:39"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-01 17:07:44"),
          level: 3,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs("2024-06-02 17:07:19"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-02 17:07:24"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-02 17:07:29"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-02 17:07:34"),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-02 17:07:39"),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs("2024-06-03 17:07:14"),
          level: 1,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-03 17:07:19"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-03 17:07:24"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-03 17:07:29"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-03 17:07:34"),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-03 17:07:39"),
          level: 2,
          feature: '0010100111101010100011011'
        },
      ]
    }
  },
  {
    name: "DaHua2",
    username: "admin",
    password: 'L2827686',
    ip: '192.168.223.238',
    addr: 'A02',
    createTime: dayjs(),
    logs: {
      create: [
        {
          time: dayjs("2024-05-29 17:07:24"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-29 17:07:29"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-29 17:07:34"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-29 17:07:39"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-29 17:07:44"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-29 17:07:49"),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs("2024-05-30 17:07:24"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-30 17:07:29"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-30 17:07:34"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-30 17:07:39"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-30 17:07:44"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-30 17:07:49"),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs("2024-05-31 17:07:34"),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-31 17:07:39"),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs("2024-06-01 17:07:29"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-01 17:07:34"),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-01 17:07:39"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-01 17:07:44"),
          level: 3,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs("2024-06-02 17:07:19"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-02 17:07:29"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-02 17:07:34"),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-02 17:07:39"),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs("2024-06-03 17:07:14"),
          level: 1,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-03 17:07:19"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-03 17:07:24"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-03 17:07:29"),
          level: 2,
          feature: '0010100111101010100011011'
        },
      ]
    }
  },
  {
    name: "DaHua3",
    username: "admin",
    password: 'L2827686',
    ip: '192.168.223.238',
    addr: 'A03',
    createTime: dayjs(),
    logs: {
      create: [
        {
          time: dayjs("2024-05-29 17:07:24"),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs("2024-05-30 17:07:24"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-30 17:07:29"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-30 17:07:34"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-30 17:07:39"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-30 17:07:44"),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs("2024-05-31 17:07:24"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-31 17:07:29"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-31 17:07:34"),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-31 17:07:39"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-31 17:07:44"),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-05-31 17:07:49"),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs("2024-06-01 17:07:14"),
          level: 1,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-01 17:07:19"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-01 17:07:24"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-01 17:07:29"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-01 17:07:34"),
          level: 3,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs("2024-06-02 17:07:19"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-02 17:07:24"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-02 17:07:29"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-02 17:07:34"),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs("2024-06-02 17:07:34"),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-02 17:07:39"),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs("2024-06-03 17:07:14"),
          level: 1,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-03 17:07:19"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-03 17:07:24"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-03 17:07:29"),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs("2024-06-03 17:07:34"),
          level: 3,
          feature: '0010100111101010100011011'
        },
      ]
    }
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const d of deviceData) {
    const device = await prisma.device.create({
      data: d,
    })
    console.log(`Created device with id: ${device.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
