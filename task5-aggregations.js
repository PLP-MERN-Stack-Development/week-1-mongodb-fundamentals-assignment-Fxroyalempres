// Task 5 – Advanced Queries for books collection in plp_bookstore

// ==============================================
// 1️⃣ Count how many books are in the collection
db.books.countDocuments()
// 🧠 This returns the total number of documents (books) in the collection.


// ==============================================
// 2️⃣ Count how many books are in stock
db.books.countDocuments({ in_stock: true })
// 🧠 This filters the books with in_stock set to true and counts them.


// ==============================================
// 3️⃣ Find the average price of all books
db.books.aggregate([
  {
    $group: {
      _id: null, // null groups all documents into one group
      average_price: { $avg: "$price" }
    }
  }
])
// 🧠 $group is used for grouping documents.
//     _id: null means group everything together.
//     $avg calculates the average of the price field.


// ==============================================
// 4️⃣ Find the total number of pages of all books
db.books.aggregate([
  {
    $group: {
      _id: null,
      total_pages: { $sum: "$pages" }
    }
  }
])
// 🧠 $sum adds up the values of the "pages" field across all books.


// ==============================================
// 5️⃣ Group books by genre and count how many books per genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      count: { $sum: 1 }
    }
  }
])
// 🧠 This groups the books by genre and counts how many books are in each genre.


// ==============================================
// 6️⃣ Sort books by published year in descending order (newest first)
db.books.find().sort({ published_year: -1 })
// 🧠 -1 means descending (newest first). Use 1 for ascending (oldest first).


// ==============================================
// 7️⃣ Find the most expensive book
db.books.find().sort({ price: -1 }).limit(1)
// 🧠 Sort by price descending, then limit to the first result.


// ==============================================
// 8️⃣ Find the least expensive book
db.books.find().sort({ price: 1 }).limit(1)
// 🧠 Sort by price ascending to get the cheapest book.
