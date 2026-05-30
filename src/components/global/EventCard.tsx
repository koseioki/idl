import "./EventCard.css";
import { NavLink } from "react-router-dom";
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function EventCard({
  title,
  date,
  place,
  slug,
  description,
  imgUrl,
}: {
  title: string;
  date: string;
  place: string;
  slug: string;
  description: string;
  imgUrl?: string;
}) {
  const year = new Date(date).getFullYear();
  const month = new Date(date).toLocaleString("default", { month: "long" });
  const day = new Date(date).getDate();
  //   const formattedDate = `${day} ${month} ${year}`;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${slug}`);
  };

  // set image
  // const [Image, setImage] = useState<string | null>(null);
  // useEffect(() => {
  //   import(`../../data/events/${slug}.jpg`)
  //     .then((module) => {
  //       setImage(module.default);
  //     })
  //     .catch(() => {
  //       setImage(null); // or set to a default image if you have one
  //     });
  // }, [slug]);

  return (
    <li className="event-card">
      <article onClick={handleClick}>
        <div>
          <div className="info">
            <div>
              <h3>
                <NavLink to={`${slug}`}>{title}</NavLink>
              </h3>
              <div>
                <p>{description}</p>
              </div>
            </div>
            <div>
              <div>
                <p>Place: {place}</p>
              </div>
            </div>
          </div>

          <div className="date">
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
          </div>
        </div>
          <img src={imgUrl} alt="" />
      </article>
    </li>
  );
}
