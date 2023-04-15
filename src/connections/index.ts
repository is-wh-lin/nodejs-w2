import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

const DB = process.env.DATABASE!.replace('<password>', process.env.DATABASE_PASSWORD!);
// const DB: string = 'mongodb://127.0.0.1:3000/post' // 本地資料庫

const connectToDatabase = async () => {
  try {
    console.log('💻 資料庫連線中');
    await mongoose.connect(DB);
    console.log('✅ 已成功連線資料庫');
  } catch (error) {
    console.log('❌ 連線資料庫失敗');
  }
};

connectToDatabase();
