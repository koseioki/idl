import "./EventCard.css";
import { NavLink } from "react-router-dom";
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
  const handleClick = (event) => {
    const target = event.target as HTMLElement | null;

    // Ignore clicks that happen on the link or anything inside it (icon, span, etc.)
    if (target?.closest("a")) return;

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
