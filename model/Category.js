import mongoose from 'mongoose';



// Skapa ett schema för kategorier
const categorySchema = new mongoose.Schema({
  name: String,
  description: String
});

// Skapa en Mongoose-modell baserat på categorySchema
const Category = mongoose.model('Category', categorySchema);

export default Category;