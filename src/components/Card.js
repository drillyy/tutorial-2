import star from "../images/Star 1.png";
import katie from "../images/katie.png";
import wedding from "../images/wedding-photography 1.png";
import mountain_biking from "../images/mountain-bike 1.png";

export default function Card(props) {
  const images = [katie, wedding, mountain_biking];
  let badgeText
  if (props.item.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
      badgeText = "ONLINE"
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img className="card--image" src={images[props.item.id-1]} alt={props.alt} />
      <div className="card--stats">
        <img className="card--star" src={star} alt="star" />
        <span>{props.item.stats.rating}</span>
        <span className="grey">({props.item.stats.reviewCount}) • </span>
        <span className="grey">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
