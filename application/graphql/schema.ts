/**
 * Define the schema for the GraphQL server
 */
import gql from "graphql-tag";
import locationTypeDefsCustom from "graphql/locations/custom.gql";
import locationTypeDefsQueries from "graphql/locations/queries.gql";
import locationTypeDefsMutations from "graphql/locations/mutations.gql";

// For the schema we will import gql from apollo-server-micro
// and create a constant called "typeDefs"
// in which we will use gql and inside we will define our types, inputs, queries and mutations
// Each QUERY matches and executes a RESOLVER of the same name

export const typeDefs = gql`

  ${locationTypeDefsCustom}
  
  type Query {
    ${locationTypeDefsQueries}
  }
  
  type Mutation {
    ${locationTypeDefsMutations}
  }

`;
