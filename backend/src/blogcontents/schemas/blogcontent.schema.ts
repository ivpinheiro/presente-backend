import { Schema } from 'mongoose';
export const BlogContent = new Schema({
  title: String,
  author: String,
  authorEmail: String,
  urlTitle: String,
  content: String,
  contentSummary: String,
  publicationDate: { type: Date, default: Date.now },
  createdAt: Date,
  updatedAt: Date,
  category: String,
  keywords: [String],
  coverImage: String,
  language: String,
  readingTime: String,
});
