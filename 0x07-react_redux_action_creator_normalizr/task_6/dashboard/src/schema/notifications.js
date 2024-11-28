import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

// Define schemas
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Normalize data
const normalizedData = normalize(notificationsData.default.notifications, [notification]);

/**
 * Get all notifications by user ID using the normalized data.
 * @param {string} userId - The user ID to filter notifications by.
 * @returns {Array} - List of notification contexts for the user.
 */
export const getAllNotificationsByUser = (userId) => {
  const userNotifications = normalizedData.result.filter(
    (notificationId) => normalizedData.entities.notifications[notificationId].author === userId
  );

  return userNotifications.map(
    (notificationId) =>
      normalizedData.entities.messages[
        normalizedData.entities.notifications[notificationId].context
      ]
  );
};

export { normalizedData };
