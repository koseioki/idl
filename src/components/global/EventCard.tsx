import "./EventCard.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function EventCard({
  title,
  date,
  place,
  slug,
  description,
}: {
  title: string;
  date: string;
  place: string;
  slug: string;
  description: string;
}) {
  const year = new Date(date).getFullYear();
  const month = new Date(date).toLocaleString("default", { month: "long" });
  const day = new Date(date).getDate();
  //   const formattedDate = `${day} ${month} ${year}`;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${slug}`);
  };

  return (
    <li className="event-card">
      <article onClick={handleClick}>
        <div>
          <div className="info">
            <div>
              <h3>
                <NavLink to={`${slug}`}>{title}</NavLink>
              </h3>
              <div>{description}</div>
            </div>
            <div>
              <div>Place: {place}</div>
            </div>
          </div>

          <div className="date">
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
          </div>
        </div>

        <img src={`../../data/events/${slug}.jpg`} alt="" />
      </article>
    </li>
  );
}
