/**
 * Creates the location services.
 * They perform the CRUD operations on the mongoDB
 * via the Mongoose LocationModel.
 * They are the internal APIs and are also the actual
 * entry points for the external GraphQL resolvers.
 */

import Locations from "mongoose/locations/model";
import {
    FilterWishlistType,
    FilterLocationType,
} from "mongoose/locations/custom";
import { LocationType } from "mongoose/locations/schema";

/**
 * actual filter function
 */
async function findLocations(
    filter: {} | FilterLocationType | FilterWishlistType
) {
    try {
        let result: Array<LocationType | null> = await Locations.find(filter);
        return result as unknown as LocationType;
    } catch (err) {
        console.log(err);
    }
    return {};
}

/**
 *    * API / facade Find all "location"-documents from the "locations"-collection via the "locations"-model
 */
export async function findAllLocations() {
    let filter = {};
    return (await findLocations(filter)) as unknown as LocationType;
}

/**
 * API / facade to Find a single "location"-document from the "locations"-collection via the "locations"-model
 */
export async function findLocationsById(location_ids: string[]) {
    let filter: FilterLocationType = { location_id: location_ids };
    return (await findLocations(filter)) as unknown as LocationType;
}

/**
 *    * API / facade get all locations whose on_wishlist array contains the given userId
 */
export async function onUserWishlist(user_id: string) {
    let filter: FilterWishlistType = {
        on_wishlist: {
            $in: [user_id],
        },
    };
    return (await findLocations(filter)) as unknown as LocationType;
}

/**
 *    * API / facade udate the wishlist array, either add or remove items
 */
export async function updateWishlist(
    location_id: string,
    user_id: string,
    action: string
) {
    let filter = { location_id: location_id };
    let options: {
        upsert: boolean;
        returnDocument: "before" | "after" | undefined;
    } = { upsert: true, returnDocument: 'after' };
    let update = {};

    switch (action) {
        case "add":
            update = { $push: { on_wishlist: user_id } };
            break;
        case "remove":
            update = { $pull: { on_wishlist: user_id } };
            break;
    }

    try {
        let result: LocationType | null = await Locations.findOneAndUpdate(
            filter,
            update,
            options
        );
        return result;
    } catch (err) {
        console.log(err);
    }
    return {};
}
