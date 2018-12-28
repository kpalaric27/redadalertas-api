import { Schema } from 'mongoose';
import { eventSchemaObj } from './event';

const alertSchema = new Schema({
  // Event copy schema
  ...eventSchemaObj,

  // Alert-specific schema
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  sent: {
    by: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    at: {
      type: Date,
      default: Date.now
    },
  },
  expireNow: {
    // TO-DO: make sure this is the only thing users can edit
    type: Boolean,
    default: false
  }
});

export default alertSchema;