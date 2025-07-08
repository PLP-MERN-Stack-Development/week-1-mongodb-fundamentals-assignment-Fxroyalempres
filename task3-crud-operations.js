// Task 3 - CRUD Operations for books collection in plp_bookstore

// ======================================================
// ✅ CRUD Operations for ONE book

// ➕ Create One
db.books.insertOne({
  title: "Atomic Habits",
  author: "James Clear",
  genre: "Self-help",
  published_year: 2018,
  price: 14.99,
  in_stock: true,
  pages: 320,
  publisher: "Avery"
})

// 📖 Read One
db.books.findOne({ title: "Atomic Habits" })

// ✏️ Update One
db.books.updateOne(
  { title: "Atomic Habits" },
  { $set: { price: 12.99 } }
)

// ❌ Delete One
db.books.deleteOne({ title: "Atomic Habits" })

// ======================================================
// ✅ CRUD Operations for MANY books

// ➕ Create Many
db.books.insertMany([
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    published_year: 1965,
    price: 11.5,
    in_stock: false,
    pages: 412,
    publisher: "Chilton Books"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Biography",
    published_year: 2018,
    price: 17.99,
    in_stock: true,
    pages: 448,
    publisher: "Crown"
  }
])

// 📖 Read Many
db.books.find({ published_year: { $gte: 2010 } }).pretty()

// ✏️ Update Many
db.books.updateMany(
  { in_stock: false },
  { $set: { in_stock: true } }
)

// ❌ Delete Many
db.books.deleteMany({ author: "Colleen Hoover" })
