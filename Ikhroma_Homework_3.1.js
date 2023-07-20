//connect ke mongoDB, untuk kasus saya, saya pakai atlas
mongosh "mongodb+srv://juruloss.3oklcpg.mongodb.net/" --apiVersion 1 --username ikhroma71 --password <ISI PASSWORD>

// buat/switch ke db gigih
use gigih

//insert ke collection Song, jika belum ada, maka akan buat collection Song terlebih dahulu otomatis
db.Song.insertMany([{
    "title": "KING",
    "artists": [
      "Kanaria"
    ],
    "album": "KING"
  },
  {
    "title": "KICK BACK",
    "artists": [
      "Kenshi Yonezu"
    ],
    "album": "KICK BACK"
  },
  {
    "title": "Kaikai Kitan",
    "artists": [
      "Eve"
    ],
    "album": "Kaikan Kita"
  },
  {
    "title": "I beg you",
    "artists": [
      "Aimer"
    ],
    "album": "Penny Rain"
  },
  {
    "title": "Komm, susser Tod",
    "artists": [
      "Megumi Ogata"
    ],
    "album": "Evangelion"
  },
  {
    "title": "Major Crimes",
    "artists": [
      "HEALTH",
      "Window Leather"
    ],
    "album": "Cyberpunk Radio Vol.2"
  },
  {
    "title": "I Really Want to Stay Your House",
    "artists": [
      "Rosa Walton",
      "Hallie Coggins"
    ],
    "album": "Cyberpunk Radio Vol.2"
  },
  {
    "title": "Everything Goes On",
    "artists": [
      "Porter Robinson"
    ],
    "album": "Everything Goes On"
  },
  {
    "title": "Goodbye To A World",
    "artists": [
      "Porter Robinson"
    ],
    "album": "Worlds"
  },
  {
    "title": "Romance",
    "artists": [
      "YOASOBI"
    ],
    "album": "THE BOOK 2"
  }])

// insert ke collection Artists
db.Artists.insertMany([{
    "name": "Kanaria",
    "dateOfBirth": {
      "$date": "2002-05-03T00:00:00.000Z"
    },
    "genre": [
      "VOCALOID"
    ]
  },
  {
    "name": "YOASOBI",
    "dateOfBirth": {
      "$date": "2019-01-01T00:00:00.000Z"
    },
    "genre": [
      "J-Pop"
    ]
  },
  {
    "name": "Kenshi Yonezu",
    "dateOfBirth": {
      "$date": "1991-03-10T00:00:00.000Z"
    },
    "genre": [
      "J-Pop"
    ]
  },
  {
    "name": "Eve",
    "dateOfBirth": {
      "$date": "1995-05-23T00:00:00.000Z"
    },
    "genre": [
      "J-Rock",
      "VOCALOID"
    ]
  },
  {
    "name": "Aimer",
    "dateOfBirth": {
      "$date": "1990-07-09T00:00:00.000Z"
    },
    "genre": [
      "J-Pop"
    ]
  },
  {
    "name": "Megumi Ogata",
    "dateOfBirth": {
      "$date": {
        "$numberLong": "-144288000000"
      }
    },
    "genre": [
      "J-Pop"
    ]
  },
  {
    "name": "Porter Robinson",
    "dateOfBirth": {
      "$date": "1992-07-15T00:00:00.000Z"
    },
    "genre": [
      "Electronic"
    ]
  },
  {
    "name": "Frank Sinatra",
    "dateOfBirth": {
      "$date": {
        "$numberLong": "-1705881600000"
      }
    },
    "genre": [
      "Pop"
    ]
  },
  {
    "name": "Grabbitz",
    "dateOfBirth": {
      "$date": "1993-02-18T00:00:00.000Z"
    },
    "genre": [
      "Electronic",
      "Pop"
    ]
  },
  {
    "name": "Tyler Smith",
    "dateOfBirth": {
      "$date": "1986-08-09T00:00:00.000Z"
    },
    "genre": [
      "Pop",
      "Rock"
    ]
  }])

//insert ke collection Popular
db.Popular.insertMany([{
    "title": "KING",
    "played": 1000,
    "periodOfTime": [
      "2023"
    ]
  },
  {
    "title": "KICK BACK",
    "played": 15000,
    "periodOfTime": [
      "2023"
    ]
  },
  {
    "title": "Kaikai Kitan",
    "played": 14000,
    "periodOfTime": [
      "2023"
    ]
  },
  {
    "title": "I beg you",
    "played": 10200,
    "periodOfTime": [
      "2023"
    ]
  },
  {
    "title": "Komm, susser Tod",
    "played": 10001,
    "periodOfTime": [
      "2023"
    ]
  },
  {
    "title": "Major Crimes",
    "played": 10230,
    "periodOfTime": [
      "2023"
    ]
  },
  {
    "title": "I Really Want to Stay Your House",
    "played": 10202,
    "periodOfTime": [
      "2023"
    ]
  },
  {
    "title": "Everything Goes On",
    "played": 10022,
    "periodOfTime": [
      "2023"
    ]
  },
  {
    "title": "Goodbye To A World",
    "played": 21000,
    "periodOfTime": [
      "2023"
    ]
  },
  {
    "title": "Romance",
    "played": 41000,
    "periodOfTime": [
      "2023"
    ]
  }])

//cek apakah data sudah ada di collection dengan cara
db.Artists.find()
db.Song.find()
db.Popular.find()

//jika ada kesalahan bisa update dengan cara
db.namaCollection.updateOne(ObjectYangBerisiParameterPencarian, {$set: {keyYangPerluDirubah: Valuenya}})

//jika ingin delete
db.namaCollection.deleteOne(ObjectYangBerisiParameterPencarian)