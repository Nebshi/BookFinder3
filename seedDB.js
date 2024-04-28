import mongoose from 'mongoose';
import Category from './model/Category.js'; // Importera Category-modellen
import { faker } from '@faker-js/faker';// Importera faker för att generera slumpmässiga värden

console.log("Start seeding database!");

async function seedDB() {
  try {
    mongoose.connect("mongodb+srv://neby:neby123@cluster0.rsjx5gd.mongodb.net/BookFinder");

    const categories = [
      { name: 'Fiction', description: 'Books that are not based on real events or people.' },
      { name: 'Non-fiction', description: 'Books based on real events, facts, or people.' },
      { name: 'Fantasy', description: 'Books that feature elements of magic, mythology, or the supernatural.' }
      // Lägg till fler kategorier efter behov
    ];

    // Generera fler kategorier med slumpmässiga värden för genre och beskrivning
    for (let i = 0; i < 10; i++) {
      const newCategory = {
        name: faker.random.word(),
        description: faker.lorem.sentence()
      };
      categories.push(newCategory);
    }

    // Loopa igenom varje kategori och spara den i databasen
    for (const categoryData of categories) {
      const category = new Category(categoryData);
      await category.save();
      console.log(`Category '${category.name}' saved successfully.`);
    }

    console.log('All categories seeded successfully.');
  } catch (error) {
    console.error('Error seeding categories:', error);
  }
}

seedDB();