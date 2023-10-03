import { pool } from './database.js';
import "./dotenv.js";
import recipeData from "../data/recipes.js";

const createRecipeTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS recipes;

        CREATE TABLE IF NOT EXISTS recipes (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            pricePoint VARCHAR(10) NOT NULL,
            audience VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            submittedBy VARCHAR(255) NOT NULL,
            submittedOn TIMESTAMP NOT NULL
        );
    `
    
    try {
        const res = await pool.query(createTableQuery);
        console.log('🎉 recipe table created successfully');
    } catch (err) {
        console.error('⚠️ error creating recipe table', err);
    }
};

const seedRecipeTable = async () => {
        await createRecipeTable();

        recipeData.forEach((recipe) => {
            const insertQuery = {
                text: 'INSERT INTO recipes (name, pricePoint, audience, image, description, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7)'
            };

            const values = [
                recipe.name,
                recipe.pricePoint,
                recipe.audience,
                recipe.image,
                recipe.description,
                recipe.submittedBy,
                recipe.submittedOn
            ];

            pool.query(insertQuery, values, (err, res) => {
                if (err) {
                    console.error('⚠️ error inserting recipe', err);
                    return;
                }
    
                console.log(`✅ ${recipe.name} added successfully`)
            });
    
        });
};

seedRecipeTable();