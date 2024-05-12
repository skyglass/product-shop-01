import { LocationType } from "mongoose/locations/schema";
import styles from "./index.module.css";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Button from "components/button";

interface PropsInterface {
    location: LocationType;
}

interface WishlistInterface {
    locationId: string;
    userId: string;
}

const LocationDetail = (props: PropsInterface): JSX.Element => {
    let location: LocationType = props.location;

    const { data: session } = useSession();
    const [onWishlist, setOnWishlist] = useState<Boolean>(false);
    const [loading, setLoading] = useState<Boolean>(false);

    useEffect(() => {
        let userId = session?.user.fdlst_private_userId;
        setOnWishlist(
            userId && location.on_wishlist.includes(userId) ? true : false
        );
    }, [session]);

    const wishlistAction = (props: WishlistInterface) => {
        const { locationId, userId } = props;
        if (loading) {
            return false;
        }
        setLoading(true);

        let action = !onWishlist ? "addWishlist" : "removeWishlist";
        fetch("/api/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: `
                            mutation wishlist {
                                ${action}(  
                                    location_id: "${locationId}", 
                                    user_id: "${userId}"
                                ) {
                                    on_wishlist
                                }
                            }`,
            }),
        })
            .then((result) => {
                if (result.status === 200) {
                    setOnWishlist(action === "addWishlist" ? true : false);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            {location && (
                <ul className={styles.root}>
                    <li>
                        <b>Address: </b>
                        {location.address}
                    </li>
                    <li>
                        <b>Zipcode: </b>
                        {location.zipcode}
                    </li>
                    <li>
                        <b>Borough: </b>
                        {location.borough}
                    </li>
                    <li>
                        <b>Cuisine: </b>
                        {location.cuisine}
                    </li>
                    <li>
                        <b>Grade: </b>
                        {location.grade}
                    </li>
                </ul>
            )}

            {session?.user.fdlst_private_userId && (
                <Button
                    variant={!onWishlist ? "outline" : "blue"}
                    disabled={loading ? true : false}
                    clickHandler={() =>
                        wishlistAction({
                            locationId: location.location_id,
                            userId: session?.user.fdlst_private_userId,
                        })
                    }
                >
                    {onWishlist && <>Remove from your Wishlist</>}
                    {!onWishlist && <>Add to your Wishlist</>}
                </Button>
            )}
        </div>
    );
};
export default LocationDetail;
