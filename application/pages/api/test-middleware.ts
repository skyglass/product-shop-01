// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "middleware/db-connect";
// import Locations from "mongoose/locations/model";
import { findAllLocations } from "mongoose/locations/services";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    await dbConnect();
    // const locations = await Locations.find({});
    const locations = await findAllLocations();
    res.status(200).json(locations);
}
