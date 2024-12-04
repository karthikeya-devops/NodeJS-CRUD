require("dotenv").config(); // Make sure dotenv is loaded
import { Sequelize, DataTypes } from "sequelize";

// Ensure the DATABASE_URL is defined in the .env file
const POSTGRES_URL = process.env.DATABASE_URL as string;

if (!POSTGRES_URL) {
  throw new Error("DATABASE_URL environment variable is not defined");
}

// Initialize Sequelize with the PostgreSQL URL
const sequelize = new Sequelize(POSTGRES_URL, {
  dialect: "postgres",  // Explicitly set the dialect to PostgreSQL
  logging: false,       // Disable logging (optional)
});

async function connectDB() {
  try {
    await sequelize.authenticate(); // Try to connect to the DB
    console.log("Connection Successful");
  } catch (error) {
    console.error("Unable to connect to the database: ", error);
  }
}

export { connectDB, sequelize, Sequelize, DataTypes };