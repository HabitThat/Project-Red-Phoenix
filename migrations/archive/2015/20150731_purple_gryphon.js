// @TODO STRIPPERS (paint?)

db.users.update(
  {},
  {$set: {'items.mounts.Gryphon-RoyalPurple': true}},
  {multi: true}
);
