// @TODO STRIPPERS (paint?)

db.users.update({}, {$set: {'items.pets.Turkey-Base': 5, 'flags.newStuff': true}}, {multi: true});