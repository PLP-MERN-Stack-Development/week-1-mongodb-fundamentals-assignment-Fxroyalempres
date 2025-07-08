  use plp_bookstore

  db.books.insertMany([
{
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Gothic Fiction',
    published_year: 1847,
    price: 9.99,
    in_stock: true,
    pages: 342,
    publisher: 'Thomas Cautley Newby'
  },
  {
  title: "Project Hail Mary",
  author: "Andy Weir",
  genre: "Science Fiction",
  published_year: 2021,
  price: 18.49,
  in_stock: true,
  pages: 496,
  publisher: "Ballantine Books"
},
{
  title: "The Midnight Library",
  author: "Matt Haig",
  genre: "Fantasy",
  published_year: 2020,
  price: 14.99,
  in_stock: false,
  pages: 304,
  publisher: "Canongate Books"
},
{
  title: "The Silent Patient",
  author: "Alex Michaelides",
  genre: "Psychological Thriller",
  published_year: 2019,
  price: 16.00,
  in_stock: true,
  pages: 336,
  publisher: "Celadon Books"
},
{
  title: "The Seven Husbands of Evelyn Hugo",
  author: "Taylor Jenkins Reid",
  genre: "Historical Fiction",
  published_year: 2017,
  price: 13.99,
  in_stock: true,
  pages: 400,
  publisher: "Atria Books"
},
{
  title: "Mexican Gothic",
  author: "Silvia Moreno-Garcia",
  genre: "Horror",
  published_year: 2020,
  price: 15.95,
  in_stock: false,
  pages: 320,
  publisher: "Del Rey"
},
{
  title: "The Paris Library",
  author: "Janet Skeslien Charles",
  genre: "Historical Fiction",
  published_year: 2021,
  price: 14.25,
  in_stock: true,
  pages: 368,
  publisher: "Atria Books"
},
{
  title: "Verity",
  author: "Colleen Hoover",
  genre: "Romantic Thriller",
  published_year: 2018,
  price: 12.75,
  in_stock: true,
  pages: 336,
  publisher: "Grand Central Publishing"
},
{
  title: "The Guest List",
  author: "Lucy Foley",
  genre: "Mystery",
  published_year: 2020,
  price: 13.50,
  in_stock: true,
  pages: 320,
  publisher: "William Morrow"
},
{
  title: "The House in the Cerulean Sea",
  author: "TJ Klune",
  genre: "Fantasy",
  published_year: 2020,
  price: 15.99,
  in_stock: true,
  pages: 393,
  publisher: "Tor Books"
}])