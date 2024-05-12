import { locationQueries } from "graphql/locations/queries";
import { locationMutations } from "graphql/locations/mutations";

export const resolvers = {
    Query: {
        ...locationQueries,
    },
    Mutation: {
        ...locationMutations,
    },
};
