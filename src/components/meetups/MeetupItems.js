function MeetupItems(props) {
  return (
    <li>
      <div>
        <img src={props.img}>alt={props.title}</img>
      </div>
      <div>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div>
        <button>Favorites</button>
      </div>
    </li>
  );
}
export default MeetupItems;
