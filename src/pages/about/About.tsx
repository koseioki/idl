import AboutImage from "../../assets/img/kosei.jpeg";
import AboutIntersectionalDesignLab from "./about-intersectional-design-lab.mdx";
import AboutTeam from "./about-team.mdx";
import { H1 } from "../../components/header-and-footer/H1";
import "./About.css";
export function About() {
  return (
    <>
      <main id="main-content">
        <H1>About</H1>

        <h2>Intersectional Design Lab</h2>
 
        <AboutIntersectionalDesignLab />

        <h2>Team</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <img src={AboutImage} className="profile-image" alt="" />
          </div>
          <div>
            <AboutTeam />
          </div>
        </div>
      </main>
    </>
  );
}
