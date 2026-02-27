import AboutImage from "../../assets/img/kosei.jpeg";
import { RenderMarkdown } from "../../utils/RenderMarkdown";
import AboutIntersectionalDesignLab from "./about-intersectional-design-lab.md?raw";
import AboutTeam from "./about-team.md?raw";
import { H1 } from "../../components/header-and-footer/H1";
import "./About.css";
export function About() {
  return (
    <>
      <main id="main-content">
        <H1>About</H1>

        <h2>Intersectional Design Lab</h2>
        <RenderMarkdown mdFile={AboutIntersectionalDesignLab} />

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
            <RenderMarkdown mdFile={AboutTeam} />
          </div>
        </div>
      </main>
    </>
  );
}
