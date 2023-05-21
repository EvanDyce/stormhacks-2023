import RatingItem from './RatingItem';
import classes from './RatingList.module.css';

function RatingList(props) {
    return <ul className={classes.list}>
        {props.meetups.map((meetup) => (
            <RatingItem 
                key={meetup.id} 
                id={meetup.id} 
                // image={meetup.image} 
                username={meetup.username}
                name={meetup.name}
                comment={meetup.comment}
                date={meetup.date}
            />
        ))}
    </ul>
}

export default RatingList;