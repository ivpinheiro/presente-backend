import { Schema } from 'mongoose';
export const Activity = new Schema({
  title: String,
  author: String,
  authorEmail: String,
  activitiesWeek: [{}],
  startDate: Date,
  endDate: Date,
  presenceActivity: [{}],
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  category: String,
});
