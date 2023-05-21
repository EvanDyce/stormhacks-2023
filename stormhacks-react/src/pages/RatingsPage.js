import RatingList from "../components/ratings/RatingList";

const Data = [
    {
      id: 'm1',
      username: 'jwuswagman',
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
    return (
        <section>
            <h1>Ratings</h1>
            <RatingList meetups={Data}/>
        </section>);
}

export default RatingsPage;