// Task 6 – Indexing for Performance Optimization

// 🔹 1. Create an index on the title field
db.books.createIndex({ title: 1 })

// 🔹 2. Create a compound index on author and genre
db.books.createIndex({ author: 1, genre: 1 })

// 🔹 3. Create an index on price
db.books.createIndex({ price: 1 })

// 🔍 BONUS: View all indexes on the books collection
db.books.getIndexes()
