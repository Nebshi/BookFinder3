import mongoose from 'mongoose';


// Skapa ett schema för böcker
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  publication_date: Date
});

// Skapa en Mongoose-modell baserad på bookSchema
const Book = mongoose.model('Book', bookSchema);

export default Book;