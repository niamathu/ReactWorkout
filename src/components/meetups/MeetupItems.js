import classes from "./meetupItems.module.css";

function MeetupItems(props) {
  return (
    <li className={classes.item}>
      <div className={classes.img}>
        <img src={props.img}>alt={props.title}</img>
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button>Favorites</button>
      </div>
    </li>
  );
}
export default MeetupItems;
