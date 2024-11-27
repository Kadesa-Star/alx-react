import * as notificationsData from '../../notifications.json';

export const getAllNotificationsByUser = (userId) => {
  return notificationsData.default.notifications
    .filter((item) => item.author.id === userId)
    .map(({ context }) => context);
};

