import RatingList from "../components/ratings/RatingList";

import {useState, useEffect} from 'react';

const Data = [
    {
      id: 'm1',
      rating: '5',
      name: 'John Wu',
      comment:
        'This team is so great, please give them the award',
	  date:
		'May 21, 2023',
    },
    {
		id: 'm2',
		username: 'Project 1',
		name: 'Meetupstreet 5, 12345 Meetup City',
		comment:
		  'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
		date:
		  'May 21, 2023',
    },
    {
        id: 'm3',
		username: 'Project 1',
		name: 'Meetupstreet 5, 12345 Meetup City',
		comment:
			'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
		date:
			'May 21, 2023',
      },
]; // replace this with the json file later or database ..?

function RatingsPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedRatings, setLoadedRatings] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://materate-a3b56-default-rtdb.firebaseio.com/ratings.json').then(response=>{
			return response.json();
		}).then(data=> {
			const ratings = [];

			for (const key in data) {
				const rating = {
					id: key,
					...data[key]
				};

				ratings.push(rating);
			}

			setIsLoading(false);
			setLoadedRatings(ratings);
		});
	}, []);

	if (isLoading) {
		return <section>
			<p>Loading...</p>
		</section>
	}

    return (
        <section>
            <h1>Ratings</h1>
            <RatingList meetups={loadedRatings}/>
        </section>);
}

export default RatingsPage;