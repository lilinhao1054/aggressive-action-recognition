const { PrismaClient } = require('@prisma/client')
const dayjs = require('dayjs')

const prisma = new PrismaClient()

const today = dayjs().format('YYYY-MM-DD');
const n1day = dayjs().subtract(1, 'day').format('YYYY-MM-DD');
const n2day = dayjs().subtract(2, 'day').format('YYYY-MM-DD');
const n3day = dayjs().subtract(3, 'day').format('YYYY-MM-DD');
const n4day = dayjs().subtract(4, 'day').format('YYYY-MM-DD');
const n5day = dayjs().subtract(5, 'day').format('YYYY-MM-DD');

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
          time: dayjs(`${n5day} 17:07:24`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n5day} 17:07:29`),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs(`${n4day} 17:07:24`),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs(`${n3day} 17:07:24`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n3day} 17:07:29`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n3day} 17:07:34`),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n3day} 17:07:39`),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs(`${n2day} 17:07:14`),
          level: 1,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n2day} 17:07:19`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n2day} 17:07:24`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n2day} 17:07:29`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n2day} 17:07:34`),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n2day} 17:07:39`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n2day} 17:07:44`),
          level: 3,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs(`${n1day} 17:07:19`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n1day} 17:07:24`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n1day} 17:07:29`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n1day} 17:07:34`),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n1day} 17:07:39`),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs(`${today} 17:07:14`),
          level: 1,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${today} 17:07:19`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${today} 17:07:24`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${today} 17:07:29`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${today} 17:07:34`),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${today} 17:07:39`),
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
          time: dayjs(`${n5day} 17:07:24`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n5day} 17:07:29`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n5day} 17:07:34`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n5day} 17:07:39`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n5day} 17:07:44`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n5day} 17:07:49`),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs(`${n4day} 17:07:24`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n4day} 17:07:29`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n4day} 17:07:34`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n4day} 17:07:39`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n4day} 17:07:44`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n4day} 17:07:49`),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs(`${n3day} 17:07:34`),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n3day} 17:07:39`),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs(`${n2day} 17:07:29`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n2day} 17:07:34`),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n2day} 17:07:39`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n2day} 17:07:44`),
          level: 3,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs(`${n1day} 17:07:19`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n1day} 17:07:29`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n1day} 17:07:34`),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n1day} 17:07:39`),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs(`${today} 17:07:14`),
          level: 1,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${today} 17:07:19`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${today} 17:07:24`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${today} 17:07:29`),
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
          time: dayjs(`${n5day} 17:07:24`),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs(`${n4day} 17:07:24`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n4day} 17:07:29`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n4day} 17:07:34`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n4day} 17:07:39`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n4day} 17:07:44`),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs(`${n3day} 17:07:24`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n3day} 17:07:29`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n3day} 17:07:34`),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n3day} 17:07:39`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n3day} 17:07:44`),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n3day} 17:07:49`),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs(`${n2day} 17:07:14`),
          level: 1,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n2day} 17:07:19`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n2day} 17:07:24`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n2day} 17:07:29`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n2day} 17:07:34`),
          level: 3,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs(`${n1day} 17:07:19`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n1day} 17:07:24`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n1day} 17:07:29`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n1day} 17:07:34`),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs(`${n1day} 17:07:34`),
          level: 3,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${n1day} 17:07:39`),
          level: 2,
          feature: '0010100111101010100011011'
        },

        {
          time: dayjs(`${today} 17:07:14`),
          level: 1,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${today} 17:07:19`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${today} 17:07:24`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${today} 17:07:29`),
          level: 2,
          feature: '0010100111101010100011011'
        },
        {
          time: dayjs(`${today} 17:07:34`),
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
