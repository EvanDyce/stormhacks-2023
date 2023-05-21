import { useRef } from 'react';

import classes from './NewRatingForm.module.css';
import Card from '../ui/Card';

function NewRatingForm(props) {
    const nameInputRef = useRef();
    const imageInputRef = useRef();
    const ratingInputRef = useRef();
    const commentsInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = nameInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredRating = ratingInputRef.current.value;
        const enteredComments = commentsInputRef.current.value;

        const ratingData = {
            name: enteredTitle,
            image: enteredImage,
            rating: enteredRating,
            comment: enteredComments,
            date: 'May 21, 2023'
        }

        props.onAddRating(ratingData);
    }

    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Name</label>
                <input type='text' required id='name' ref={nameInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='title'>Image</label>
                <input type='url' required id='image' ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='title'>Rating / 5</label>
                <input type='text' required id='address' ref={ratingInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='title'>Comments</label>
                <textarea id='comment' required rows='5' ref={commentsInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Rating</button>
            </div>
        </form>
    </Card>
}

export default NewRatingForm;