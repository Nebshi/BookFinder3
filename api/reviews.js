import Review from "../model/Review.js";

export default function (server, mongoose) {

  // Skapa en GET-route för att hämta alla recensioner
  server.get('/api/reviews', async (req, res) => {
    try {
      const reviews = await Review.find(); // Hämta alla recensioner från databasen
      res.json(reviews); // Skicka tillbaka recensionerna som JSON
    } catch (error) {
      res.status(500).json({ message: "Ett fel uppstod på servern vid hämtning av recensioner." });
    }
  });

  // Skapa en POST-route för att lägga till en ny recension
  server.post('/api/reviews', async (req, res) => {
    try {
      const newReview = new Review(req.body); // Skapa en ny recension med data från request body
      const savedReview = await newReview.save(); // Spara den nya recensionen i databasen
      res.status(201).json(savedReview); // Skicka tillbaka den sparade recensionen som JSON
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid skapande av ny recension." });
    }
  });

  // Skapa en GET-route för att hämta en specifik recension med ett specifikt ID
  server.get('/api/reviews/:id', async (req, res) => {
    try {
      const review = await Review.findById(req.params.id); // Hämta recensionen med det angivna ID från databasen
      if (!review) {
        return res.status(404).json({ message: "Recensionen hittades inte" });
      }
      res.json(review); // Skicka tillbaka recensionen som JSON
    } catch (error) {
      res.status(500).json({ message: "Ett fel uppstod på servern vid hämtning av recension." });
    }
  });

  // Skapa en PUT-route för att uppdatera en recension med ett specifikt ID
  server.put('/api/reviews/:id', async (req, res) => {
    try {
      const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Uppdatera recensionen med det angivna ID och ny data från request body
      if (!updatedReview) {
        return res.status(404).json({ message: "Recensionen hittades inte" });
      }
      res.json(updatedReview); // Skicka tillbaka den uppdaterade recensionen som JSON
    } catch (error) {
      res.status(500).json({ message: "Ett fel uppstod på servern vid uppdatering av recension." });
    }
  });

  // Skapa en DELETE-route för att radera en recension med ett specifikt ID
  server.delete('/api/reviews/:id', async (req, res) => {
    try {
      const deletedReview = await Review.findByIdAndDelete(req.params.id); // Radera recensionen med det angivna ID
      if (!deletedReview) {
        return res.status(404).json({ message: "Recensionen hittades inte" });
      }
      res.json({ message: "Recensionen har raderats!" }); // Skicka tillbaka bekräftelse på att recensionen har raderats
    } catch (error) {
      res.status(500).json({ message: "Ett fel uppstod på servern vid radering av recension." });
    }
  });

}