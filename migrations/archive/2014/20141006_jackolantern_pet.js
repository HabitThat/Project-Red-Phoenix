// @TODO STRIPPERS (paint?)

db.users.update({_id: '9'}, {$set: {'items.pets.JackOLantern-Base': 5, 'flags.newStuff': true}}, {multi: true});