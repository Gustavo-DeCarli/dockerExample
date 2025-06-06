import mongoose from 'mongoose';

class Database {
  private DB_URL = "mongodb://localhost:27017/local";

  createConnection() {
    mongoose.connect(this.DB_URL);
  }
}

export default Database;