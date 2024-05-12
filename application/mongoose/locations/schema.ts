/**
 * Creates the LocationSchema for the LocationsModel.
 * It defines the properties of a location document
 * from the locations collection in the foodfinder database
 */
import { Schema, InferSchemaType } from "mongoose";

// create the Schema corresponding to the document interface.
export const LocationSchema: Schema = new Schema<LocationType>({
    address: {
        type: "String",
        required: true,
    },
    street: {
        type: "String",
        required: true,
    },
    zipcode: {
        type: "String",
        required: true,
    },
    borough: {
        type: "String",
        required: true,
    },
    cuisine: {
        type: "String",
        required: true,
    },
    grade: {
        type: "String",
        required: true,
    },
    name: {
        type: "String",
        required: true,
    },
    on_wishlist: {
        type: ["String"],
        required: true,
    },
    location_id: {
        type: "String",
        required: true,
    },
});

export declare type LocationType = InferSchemaType<typeof LocationSchema>;
