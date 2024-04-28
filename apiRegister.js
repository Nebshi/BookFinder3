import Users from "./api/users.js"
import Book from "./api/books.js"
import Category from "./api/category.js"
import Reviews from "./api/reviews.js"



export default function (server, mongoose) {

  Users(server, mongoose)
  Book(server, mongoose)
  Category(server, mongoose)
  Reviews(server, mongoose)
}

