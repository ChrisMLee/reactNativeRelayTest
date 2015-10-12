import User from './Models/UserSchema.js';

import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInterfaceType,
  GraphQLString,
  GraphQLInt,
  GraphQLInputObjectType
  } from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
} from 'graphql-relay';

var {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    if (type === 'User') {
      return User.getUserById({id: id});
    } else {
      return null;
    }
  },
  (obj) => {
    if (obj.type == "user") {
      return UserType;
    } else {
      return null;
    }
  }
);

let UserType = new GraphQLObjectType({
  name: 'User',
  description: 'A user',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    surname: {
      type: GraphQLString
    },
    team: {
      type: GraphQLString
    },
    type: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }),

  interfaces: [nodeInterface]
});

let UserQueries = {
  user: {
    type: UserType,
    args: {
      id: {
        type: GraphQLID
      }
    },
    resolve: (root, {id}) => {
      return User.getUserById(id)
    }
  }
};

let RootQuery = new GraphQLObjectType({
  name: 'RootQuery',

  fields: () => ({
    user: UserQueries.user,
    node: nodeField
  })
});

let schema = new GraphQLSchema({
  query: RootQuery
});

export default schema;