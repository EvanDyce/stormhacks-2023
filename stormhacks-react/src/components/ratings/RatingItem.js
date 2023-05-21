import Card from '../ui/Card';
import classes from './RatingItem.module.css';

function RatingItem(props) {
    function alertFunc() {
        alert("Reported!");
    }

    return <li className={classes.item}>
        <Card>
            <div className={classes.content}>
                <header>
                    <table>
                        <tr>
                            <td>
                                <text>{"Rating: " + props.rating + "/5"}</text>
                                {/* <text>test</text> */}
                            </td>
                            <td>
                                <text>{props.date}</text>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <text>{"Name: " + props.name}</text>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <text>{"Comments: " + props.comment}</text>
                            </td>
                            <td className={classes.actions}>
                                <button onClick={alertFunc}>
                                    !
                                </button>
                            </td>
                        </tr>
                    </table>
                </header>
            </div>
        </Card>
    </li>
}

export default RatingItem;