// import layoutStyles from "styles/layout.module.css";

import Head from "next/head";
import type {
    GetServerSideProps,
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
    PreviewData,
    NextPage,
} from "next";

import LocationDetail from "components/location-details";
import dbConnect from "middleware/db-connect";
import { findLocationsById } from "mongoose/locations/services";

import { LocationType } from "mongoose/locations/schema";
import { ParsedUrlQuery } from "querystring";

const Location: NextPage = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    let location: LocationType = JSON.parse(props.data?.location);
    let title = `The Food Finder - Details for ${location?.name}`;

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content={`The Food Finder. Detail page for ${location?.name}`}
                />
            </Head>

            <h1>{location?.name}</h1>
            <LocationDetail location={location} />
        </div>
    );
};

/**
 * getServerSideProps: (Server-side Rendering): Fetch data on each request.
 * Write server-side code (filesystem / database.) directly in getServerSideProps.
 * Do not fetch next API routes. Import the logic directly.
 */
export const getServerSideProps: GetServerSideProps = async (
    context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
    let locations: LocationType[] | [];
    let { locationId } = context.query;
    try {
        // connect to database
        await dbConnect();
        // call function from service
        locations = await findLocationsById([locationId as string]);
        if (!locations.length) {
            throw new Error(`Locations ${locationId} not found`);
        }
    } catch (err: any) {
        // show 404 not found page
        return {
            notFound: true,
        };
    }
    return {
        // the props will be received by the page component
        props: { data: { location: JSON.stringify(locations.pop()) } },
    };
};

export default Location;
