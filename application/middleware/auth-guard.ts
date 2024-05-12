import { GraphQLError } from "graphql/error";
import { JWT } from "next-auth/jwt";

interface paramInterface {
    user_id: string;
    location_id: string;
}
interface contextInterface {
    token: JWT;
}

export const authGuard = (
    param: paramInterface,
    context: contextInterface
): boolean | Error => {
    if (!context || !context.token || !context.token.fdlst_private_userId) {
        return new GraphQLError("User is not authenticated", {
            extensions: {
                http: { status: 500 },
                code: "UNAUTHENTICATED",
            },
        });
    }
    if (context?.token?.fdlst_private_userId !== param.user_id) {
        return new GraphQLError("User is not authorized", {
            extensions: {
                http: { status: 500 },
                code: "UNAUTHORIZED",
            },
        });
    }
    return true;
};
