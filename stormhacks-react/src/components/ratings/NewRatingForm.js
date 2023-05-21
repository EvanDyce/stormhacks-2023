import classes from './NewRatingForm.module.css';
import Card from '../ui/Card';

function NewRatingForm(props) {
    return <Card>
        <form className={classes.form}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Image</label>
                <input type='url' required id='image'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='title'>Address</label>
                <input type='text' required id='address'/>
            </div>
            <div className={classes.control}>
                <label htmlFor='title'>Description</label>
                <textarea id='description' required rows='5'></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>
}

export default NewRatingForm;