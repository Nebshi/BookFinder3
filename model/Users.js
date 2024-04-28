import mongoose from 'mongoose';


// Skapar ett schema för "users", vilket definierar strukturen för varje "user"-dokument i databasen.
const usersSchema = new mongoose.Schema({
  username: String, // Varje "user" kommer att ha ett "username".
  email: String,
  password: String,
  profile: {
    firstName: String,
    lastName: String,
    age: Number
  }
});

/* 
  Skapar en Mongoose-modell baserat på usersSchema.
  Detta möjliggör för oss att skapa, läsa, uppdatera och radera (CRUD) dokument i vår "users"-samling (collection).
*/
const User = mongoose.model("User", usersSchema);

export default User;