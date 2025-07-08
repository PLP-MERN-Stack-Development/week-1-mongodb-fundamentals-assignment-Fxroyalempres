// 📚 Task 4 – Advanced MongoDB Queries on books collection

// ✅ 1. Find books published after 2015
db.books.find({ published_year: { $gt: 2015 } }).pretty()
// ➤ Explanation:
// published_year: the field you're checking
// $gt: means “greater than”
// 🧠 So this means: show me books where the year is greater than 2015

// ✅ 2. Find books that are out of stock
db.books.find({ in_stock: false }).pretty()
// ➤ Explanation:
// in_stock: false means books that are not available

// ✅ 3. Find books within a price range (e.g. between $10 and $15)
db.books.find({
  price: { $gte: 10, $lte: 15 }
}).pretty()
// ➤ Explanation:
// $gte: greater than or equal to
// $lte: less than or equal to
// 🧠 So: books priced between $10 and $15

// ✅ 4. Find books with more than 350 pages
db.books.find({ pages: { $gt: 350 } }).pretty()
// ➤ Explanation:
// $gt: greater than — this means books that have more than 350 pages

// ✅ 5. Find books by a specific author
db.books.find({ author: "Matt Haig" }).pretty()
// ➤ Explanation:
// Match the author's exact name to return all books by them

// ✅ 6. Find books in multiple genres (e.g., Fantasy or Horror)
db.books.find({
  genre: { $in: ["Fantasy", "Horror"] }
}).pretty()
// ➤ Explanation:
// $in: checks if genre is in the list provided

// ✅ 7. Find books with the word "Library" in the title
db.books.find({
  title: /Library/i
}).pretty()
// ➤ Explanation:
// /Library/i: regular expression (regex) that searches titles containing “Library”, case-insensitive
