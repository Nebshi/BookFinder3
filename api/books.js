import Book from "../model/Books.js";

export default function (server, mongoose) {

  // GET alla böcker
  server.get('/api/books', async (req, res) => {
    try {
      res.json(await Book.find());
    } catch (error) {
      res.status(500).json({ message: "Ett fel uppstod på servern vid hämtning av böcker." });
    }
  });

  // GET en specifik bok baserat på ID
  server.get('/api/books/:id', async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: "Boken hittades inte" });
      }
      res.json(book);
    } catch (error) {
      res.status(500).json({ message: "Ett fel uppstod på servern vid hämtning av en bok." });
    }
  });

  // POST skapa en ny bok
  server.post('/api/books', async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      res.status(201).json(savedBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid skapande av ny bok." });
    }
  });

  // PUT uppdatera en befintlig bok baserat på ID
  server.put('/api/books/:id', async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedBook) {
        return res.status(404).json({ message: "Boken hittades inte" });
      }
      res.json(updatedBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid uppdatering av bok." });
    }
  });

  // DELETE radera en bok baserat på ID
  server.delete('/api/books/:id', async (req, res) => {
    try {
      const deletedBook = await Book.findByIdAndDelete(req.params.id);
      if (!deletedBook) {
        return res.status(404).json({ message: "Boken hittades inte" });
      }
      res.json({ message: "Boken har raderats!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Ett fel uppstod på servern vid radering av bok." });
    }
  });

}