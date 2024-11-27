import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

// Define user schema
const user = new schema.Entity('users');

// Define message schema with `guid` as the `idAttribute`
const message = new schema.Entity(
  'messages',
  {},
  { idAttribute: 'guid' }
);

// Define notification schema
const notification = new schema.Entity(
  'notifications',
  {
    author: user,
    context: message,
  }
);

// Normalize notifications data
const normalizedData = normalize(notificationsData.default.notifications, [notification]);

export { normalizedData, user, message, notification };
