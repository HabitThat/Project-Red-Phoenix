db.users.update(
  {},
  { $inc: { 'achievements.habitDays': 1 } },
  { multi: 1 },
);
