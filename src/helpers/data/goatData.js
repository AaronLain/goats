const goats = [
  {
    name: 'Bill',
    color: 'white',
    gender: 'female',
    isBusy: true,
    beardLength: 'longer',
    isFainter: true,
    imageUrl: 'https://www.washingtonian.com/wp-content/uploads/2017/06/6-30-17-goat-yoga-congressional-cemetery-1.jpg',
    age: 7,
    id: 'goat1',
  },
  {
    name: 'Wanda',
    color: 'whitish',
    gender: 'female',
    isBusy: true,
    beardLength: 'short',
    isFainter: true,
    imageUrl: 'https://www.telegraph.co.uk/content/dam/pets/2016/08/11/103675361_jack-the-goat-PETS_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RWtT0gK_6EfZT336f62EI5U.jpg',
    age: 3,
    id: 'goat2',
  },
  {
    name: 'Tim',
    color: 'cow-colored',
    gender: 'male',
    isBusy: false,
    beardLength: 'medium',
    isFainter: false,
    imageUrl: 'https://i0.wp.com/www.gardeningknowhow.com/wp-content/uploads/2010/02/iStock-524907632.jpg?fit=1600%2C1315&ssl=1',
    age: 906,
    id: 'goat3',
  },
  {
    id: 'goat4',
    name: 'Buttons',
    color: 'blue',
    gender: 'male',
    isBusy: false,
    beardLength: 'long',
    isFainter: false,
    imgUrl: 'https://c2.staticflickr.com/4/3349/3449549345_e23c27e9c6_b.jpg',
    age: 5,
  },
  {
    id: 'goat5',
    age: 30,
    name: 'David',
    color: 'white',
    gender: 'male',
    isBusy: true,
    beardLength: 'medium',
    isFainter: true,
    imgUrl: 'https://thumbs-prod.si-cdn.com/X1ZibsBP5j3g6ccUN31rYco4_YM=/fit-in/1600x0/https://public-media.si-cdn.com/filer/b9/d2/b9d271f3-7f66-4132-b5af-7d33844505b7/goat.jpg',
  },
  {
    id: 'goat6',
    name: 'Jeff',
    color: 'white',
    gender: 'male',
    isBusy: false,
    beardLength: 'freshly shaved',
    isFainter: true,
    imgUrl: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    age: 39,
  },
  {
    id: 'goat7',
    name: 'Billy',
    color: 'white',
    gender: 'male',
    isBusy: true,
    beardLength: 'short',
    isFainter: true,
    imgUrl: 'https://www.bostonmagazine.com/wp-content/uploads/sites/2/2019/09/goat-hyde-park-t.jpg',
    age: 7,
  },
  {
    id: 'goat8',
    name: 'Timothy',
    color: 'red',
    gender: 'Male',
    isBusy: false,
    beardLength: 'long',
    isFainter: true,
    imgUrl: 'https://www.sullivansupply.com/wp-content/uploads/2019/06/PGT-POLY.png',
    age: 10,
  },
  {
    id: 'goat9',
    name: 'Jill',
    color: 'white',
    gender: 'female',
    isBusy: true,
    beardLength: 'short',
    isFainter: false,
    imageUrl: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
    age: 2,
  },
  {
    id: 'goat10',
    name: 'Josh',
    color: 'purple',
    gender: 'male',
    isBusy: true,
    beardLength: 'short',
    isFainter: false,
    imgUrl: 'https://previews.123rf.com/images/red33/red331003/red33100300016/6542030-ram-goat-ninja-vector.jpg',
    age: 5,
  },
  {
    id: 'goat11',
    name: 'Annie',
    color: 'Brown and white',
    gender: 'female',
    isBusy: true,
    beardLength: '0',
    isFainter: true,
    imgUrl: 'https://tinyurl.com/y7nq6vkf',
    age: 10,
  },
  {
    id: 'goat12',
    name: 'Billiam',
    color: 'brown',
    gender: 'male',
    isBusy: false,
    beardLength: 'very long',
    isFainter: true,
    imgUrl: 'https://c8.alamy.com/comp/PM5NEA/portrait-of-a-male-goat-with-horns-and-long-beard-the-breed-is-a-cross-between-a-nigerian-dwarf-and-a-pigmy-PM5NEA.jpg',
    age: 102,
  },
  {
    id: 'goat13',
    name: 'Sally',
    color: 'brown',
    gender: 'female',
    isBusy: true,
    beardLength: 'short',
    isFainter: false,
    url: 'https://tse2.mm.bing.net/th?id=OIP.xffIS1WTAuUUQPkoW-RPMwHaE8&pid=Api&P=0&w=243&h=163',
    age: 50,
  },
  {
    id: 'goat14',
    name: 'Sunflower',
    color: 'brown',
    gender: 'female',
    isBusy: false,
    beardLength: 'none',
    isFainter: true,
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJq7weDtx6gUXUwz5gmoE-Im5AaQRM0O8e2KPsceBHSfBwvbht&usqp=CAU',
    age: 2,
  },
  {
    id: 'goat15',
    name: 'Suzy',
    color: 'tan',
    gender: 'female',
    isBusy: true,
    beardLength: 'short',
    isFainter: true,
    imgUrl: 'https://static.timesofisrael.com/blogs/uploads/2019/04/goat-2737355_1920.jpg',
    age: 3,
  },
  {
    id: 'goat16',
    name: 'Big Poppa',
    color: 'white',
    gender: 'male',
    isBusy: true,
    beardLength: 'really long',
    isFainter: true,
    imgUrl: 'https://i.pinimg.com/originals/06/be/c0/06bec009f3617db065db2bb38b38bf09.jpg',
    age: 12,
  },
  {
    id: 'goat17',
    name: 'Minecraft Goat',
    color: 'gray',
    gender: 'male',
    isBusy: true,
    beardLength: 'short',
    isFainter: true,
    imgUrl: 'https://i.redd.it/i739rqlarr041.png',
    age: 2000,
  },
  {
    id: 'goat18',
    name: 'Jim',
    color: 'grey',
    gender: 'male',
    isBusy: false,
    beardLength: 'short',
    isFainter: true,
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3FI09wdK3ss9SNCvGbLobGRIzoMuazZ2ff6Y3-ukR-m4y-5kt&usqp=CAU',
    age: 9,
  },
  {
    id: 'goat20',
    name: 'Bartz',
    color: 'black',
    gender: 'male',
    isBusy: true,
    beardLength: 'short',
    isFainter: true,
    imgUrl: 'https://scx1.b-cdn.net/csz/news/800/2019/goatscandist.jpg',
    age: 7,
  },
  {
    id: 'goat21',
    name: 'Paul',
    color: 'Brown',
    gender: 'Male',
    isBusy: false,
    beardLength: 'short',
    isFainter: false,
    imgUrl: 'http://www.thatcutesite.com/uploads/2011/01/peanut_the_goat_wearing_sweater.jpg',
    age: 1,
  },
];

const getGoats = () => goats;

export default { getGoats };
