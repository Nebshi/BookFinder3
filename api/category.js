import Category from "../model/Category.js";

export default function (server, mongoose) {

  /*
  Skapar en GET-route på '/api/category'. 
  När denna route anropas, hämtar den alla dokument från vår "categories"-samling och skickar tillbaka dem som ett JSON-svar.
  */
  server.get('/api/category', async (req, res) => {
    try {
      const categories = await Category.find(); // Hämtar alla kategorier från databasen
      res.json(categories); // Skickar tillbaka kategorierna som JSON
    } catch (error) {
      res.status(500).json({ message: "Ett fel uppstod på servern vid hämtning av kategorier." });
    }
  });

  // Skapar en GET-route för att hämta en specifik kategori med ett specifikt ID.
  server.get('/api/category/:id', async (req, res) => {
    try {
      const category = await Category.findById(req.params.id); // Hämtar kategorin med ID från databasen
      if (!category) {
        return res.status(404).json({ message: "Kategorin hittades inte" });
      }
      res.json(category); // Skickar tillbaka kategorin som JSON
    } catch (error) {
      res.status(500).json({ message: "Ett fel uppstod på servern vid hämtning av kategori." });
    }
  });

  // Skapar en POST-route för att skapa en ny kategori.
  server.post('/api/category', async (req, res) => {
    try {
      const newCategory = new Category(req.body); // Skapar en ny kategori med data från request body
      const savedCategory = await newCategory.save(); // Sparar den nya kategorin i databasen
      res.status(201).json(savedCategory); // Skickar tillbaka den sparade kategorin som JSON
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid skapande av ny kategori." });
    }
  });

  // Skapar en PUT-route för att uppdatera en kategori med ett specifikt ID.
  server.put('/api/category/:id', async (req, res) => {
    try {
      const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body); // Returnerar den uppdaterade kategorin
      if (!updatedCategory) {
        return res.status(404).json({ message: "Kategorin hittades inte" });
      }
      res.json(updatedCategory); // Skickar tillbaka den uppdaterade kategorin som JSON
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid uppdatering av kategori." });
    }
  });

  // Skapar en DELETE-route för att radera en kategori med ett specifikt ID.
  server.delete('/api/category/:id', async (req, res) => {
    try {
      const deletedCategory = await Category.findByIdAndDelete(req.params.id);
      if (!deletedCategory) {
        return res.status(404).json({ message: "Kategorin hittades inte" });
      }
      res.json({ message: "Kategorin har raderats!" }); // Bekräftelse på att kategorin har raderats
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid radering av kategori." });
    }
  });

}