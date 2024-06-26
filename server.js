// Importera Express för att kunna skapa en webbserver och Mongoose för att interagera med MongoDB-databasen.
import express from "express"
//import rateLimit from "express-rate-limit"
import mongoose from "mongoose"
import apiRegister from "./apiRegister.js";

// Skapar en instans av Express-appen, detta är vår webbserver.
const server = express()
console.log("Server is starting...");
// Bestämmer vilken port som servern ska lyssna på.
const port = 3010

/*
  Servern använder en middleware ( express.json() ) för att omvandla våra request till JSON.
  Detta gör att vi kan hantera JSON-data som skickas i request body.
*/
server.use(express.json())

//const limiter = rateLimit({
  //max: 100,
  //windowMs: 60 * 60 * 1000,
  //message: "Too many request from this IP, please try again in an 15 minutes."
//});

//server.use("/api", limiter);
/* 
  Vår MongoDB Atlas connection-string
  An sluter till MongoDB-databasen med hjälp av Mongoose.
  Strängen innehåller: 
    Användarnamn - <Username>
    Lösenord - <Password>
    Databasnamnet (Optional) - <DB-Name>
*/
mongoose.connect("mongodb+srv://neby:neby123@cluster0.rsjx5gd.mongodb.net/BookFinder")

/*
  Byt ut connection-string'en med er egna. Ni hittar er på MongoDB Atlas genom att gå in på: 

  Database -> 
  Kolla att ni har en databas, heter ofta "Cluster0" ->
  Trycka på "Connect" för den databasen ni vill ansluta till ->
  Kolla att eran nuvarande ip-adress är tillagd ->
  Välj "Compass" ->
  Under "2. Copy the connection string" hittar ni er connection-string

  OBS. Glöm inte ändra <password> !
*/
apiRegister(server, mongoose)
/* 
  Startar servern så att den lyssnar på den definierade porten.
  När servern har startat, loggas ett meddelande till konsolen.
*/
server.listen(port, () => console.log(`Listening on port http://localhost:${port}`))