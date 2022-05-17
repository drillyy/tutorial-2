import hero_collage from "../images/montage.png";

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero--image" src={hero_collage} alt="Hero Collage" />
      <h1 className="hero--header ">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
