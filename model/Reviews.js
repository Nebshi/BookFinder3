import mongoose from "mongoose";


// Skapa ett schema för Reviews, vilket definierar strukturen för varje recensionsdokument i databasen.
const reviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Referens till användarobjektet
    required: true
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book", // Referens till bokobjektet
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/* 
  Skapa en Mongoose-modell baserat på reviewSchema.
  Detta möjliggör för oss att skapa, läsa, uppdatera och radera (CRUD) dokument i vår "reviews"-samling (collection).
*/
const Review = mongoose.model("Review", reviewSchema);

export default Review;