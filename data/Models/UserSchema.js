import mongoose from 'mongoose';

let UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    index: true,
    default: mongoose.Types.ObjectId
  },
  name: String,
  surname: String,
  team: String,
  type: String
});

UserSchema.set('toJSON', {getters: true});

let User = mongoose.model('User', UserSchema);

exports.UserSchema = User;

function getUserById(id) {
  return new Promise((resolve, reject) => {
    User.findOne({id:id}).exec((err,res) => {
      console.log('getUserById was called!');
      err ? reject(err) : resolve(res);
    });
  });
}

exports.getUserById = getUserById;