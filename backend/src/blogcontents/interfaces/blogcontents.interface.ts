import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export interface Blogcontent extends Document {
  readonly _id: mongoose.Schema.Types.ObjectId;
  readonly title: string;
  readonly author: string;
  readonly authorEmail: string;
  readonly urlTitle: string;
  readonly content: string;
  readonly contentSummary: string;
  readonly publicationDate: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly category: string;
  readonly keywords: [string];
  readonly coverImage: string;
  readonly language: string;
  readonly readingTime: string;
}
