// import layoutStyles from "styles/layout.module.css";

import Head from "next/head";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";

import LocationsList from "components/locations-list";
import dbConnect from "middleware/db-connect";
import { findAllLocations } from "mongoose/locations/services";

import { LocationType } from "mongoose/locations/schema";

const Home: NextPage = (
    props: InferGetStaticPropsType<typeof getStaticProps>
) => {
    const locations: LocationType[] = JSON.parse(props.data?.locations);
    let title = `The Food Finder - Home`;

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="The Food Finder - Home" />
            </Head>

            <h1>Welcome to the Food Finder!</h1>
            <LocationsList locations={locations} />
        </div>
    );
};

/**
 * getStaticProps: Static Generation, the page HTML is generated at build time.
 */
export const getStaticProps: GetStaticProps = async () => {
    let locations: LocationType[] | [];
    try {
        // connect to database
        await dbConnect();
        // call function from service
        locations = await findAllLocations();
    } catch (err: any) {
        // show 404 not found page
        return {
            notFound: true,
        };
    }
    return {
        // the props will be received by the page component
        props: {
            data: { locations: JSON.stringify(locations) },
        },
    };
};

export default Home;
