import MeetupList from "../components/meetups/MeetupList";
import NewRatingForm from "../components/ratings/NewRatingForm";
import { useNavigate } from 'react-router-dom';

function ArchivesPage() {
  const navigate = useNavigate();

  function addRatingHandler(ratingData) {
    fetch(
      'https://materate-a3b56-default-rtdb.firebaseio.com/ratings.json',
      {
        method: 'POST',
        body: JSON.stringify(ratingData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      navigate('/ratings')
    }
    );
  }

    return (
        <section>
            <h1>Rate a Person!</h1>
            {/* <MeetupList meetups={Data}/> */}
            <NewRatingForm onAddRating={addRatingHandler}></NewRatingForm>
        </section>);
}

export default ArchivesPage;