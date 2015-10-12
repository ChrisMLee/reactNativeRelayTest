import mongoose from 'mongoose';

import {UserSchema as User } from '../data/Models/UserSchema.js';

mongoose.connect('mongodb://localhost/rnRelayTest');

let userLucas = new User({
  name: "Lucas",
  surname: "Moura",
  team: "Paris Saint-Germain",
  type: "user"
});

userLucas.save();

setTimeout(function () {
  console.log(userLucas.id);
  mongoose.disconnect();
}, 1000);