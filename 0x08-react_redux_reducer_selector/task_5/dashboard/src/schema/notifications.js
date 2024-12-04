// notifications.js
import { normalize, schema } from 'normalizr';
import { Map } from 'immutable';
import * as notificationsData from '../../notifications.json';

// Define schemas
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Normalize function for notifications
export const notificationsNormalizer = (data) => {
  const normalizedData = normalize(data, [notification]);
  return Map(normalizedData.entities.notifications);
};

// Normalize the notifications data from JSON file
const normalizedNotifications = notificationsNormalizer(notificationsData.default.notifications);

/**
 * Get all notifications by user ID using the normalized data.
 * @param {string} userId - The user ID to filter notifications by.
 * @returns {Array} - List of notification contexts for the user.
 */
export const getAllNotificationsByUser = (userId) => {
  return normalizedNotifications
    .filter(notification => notification.author === userId) // Filter notifications by userId
    .map(notification => notification.context); // Extract message context
};

export { normalizedNotifications };
