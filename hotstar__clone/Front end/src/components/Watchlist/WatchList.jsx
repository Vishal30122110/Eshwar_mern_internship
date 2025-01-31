import { useEffect, useState } from "react";
import { Card } from "../WatchlistCard/Card";
import './watchlist.css';

export function WatchList() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);  // To handle any errors that may occur

    async function getWishlist() {
        try {
            const user = JSON.parse(localStorage.getItem('user'));
            if (!user || !user.token) {
                setError("User not authenticated");
                return;
            }
            const { token } = user;

            const response = await fetch('https://hotstar-v.herokuapp.com/watchlist', {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${token}`,  // Fixed: Authentication header should be "Authorization"
                }
            });

            if (!response.ok) {
                throw new Error("Failed to fetch watchlist");
            }

            const movies = await response.json();
            setData(movies);
        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        getWishlist();
    }, []);

    return (
        <div>
            <h3>Watchlist</h3>
            {error && <div className="error">{error}</div>}
            <div className="watchListRes">
                {data.length > 0 ? (
                    data.map((el) => (
                        <Card
                            key={el.id}
                            id={el.id}
                            title={el.title}
                            description={el.description}
                            imageUrl={el.imageUrl}
                        />
                    ))
                ) : (
                    <div>No movies in your watchlist</div>
                )}
            </div>
        </div>
    );
}
