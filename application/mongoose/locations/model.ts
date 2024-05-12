/**
 * Creates the LocationsModel from the LocationSchema
 * and the LocationInterface.
 * The LocationsModel provides the interfaces
 * to the database collection "locations".
 */
import mongoose, { model } from "mongoose";

// Use the absolute path "schemas/location" instead of
// "../schemas/locations" (baseUrl in tsconfig.json)
import { LocationSchema, LocationType } from "mongoose/locations/schema";

// create and export the LocationsModel
// return from cache or create a new one
// locations mapps to the collection name on the database
export default mongoose.models.locations ||
  model<LocationType>("locations", LocationSchema);
