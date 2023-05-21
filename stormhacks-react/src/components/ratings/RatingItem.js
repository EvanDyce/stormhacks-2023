import Card from '../ui/Card';
import classes from './RatingItem.module.css';
import profilepic from './profilepiclogo.png'

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
                            <td rowspan="4">
                                <img src={props.image} alt={props.title} className={classes.userimage} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src={profilepic} alt="Profile Picture Logo" className={classes.profilelogo} />
                                <text>{"Rating: " + props.rating + "/5"}</text>
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