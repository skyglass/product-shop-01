/**
 * Creates the location services.
 * They perform the CRUD operations on the mongoDB
 * via the Mongoose LocationModel.
 * They are the internal APIs and are also the actual
 * entry points for the external GraphQL resolvers.
 */

import Locations from "mongoose/locations/model";
import {
    FilterLocationType,
    FilterWishlistType,
} from "mongoose/locations/custom";
import { LocationType } from "mongoose/locations/schema";

/**
 * actual filter function
 */
async function findLocations(
    filter: FilterLocationType | FilterWishlistType | {}
): Promise<LocationType[] | []> {
    try {
        let result: Array<LocationType | undefined> = await Locations.find(
            filter
        );
        return result as LocationType[];
    } catch (err) {
        console.log(err);
    }
    return [];
}

/**
 * API / facade to Find all "location"-documents from"locations"-collection via the "locations"-model
 */
export async function findLocationsById(
    location_ids: string[]
): Promise<LocationType[] | []> {
    let filter = { location_id: location_ids };
    return await findLocations(filter);
}

/**
 *  * API / facade Find all "location"-documents from"locations"-collection via the "locations"-model
 */
export async function findAllLocations(): Promise<LocationType[] | []> {
    let filter = {};
    return await findLocations(filter);
}

/**
 *  * API / facade udate the wishlist array, either add or remove items
 */
export async function updateWishlist(
    location_id: string,
    user_id: string,
    action: string
): Promise<LocationType | null | {}> {
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

/**
 *  * API / facade get all locations whose on_wishlist array contains the given userId
 */
export async function onUserWishlist(
    user_id: string
): Promise<LocationType[] | []> {
    let filter: FilterWishlistType = {
        on_wishlist: {
            $in: [user_id],
        },
    };
    return await findLocations(filter);
}
