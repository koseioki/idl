import AboutImage from "../../assets/img/kosei.jpeg";
import { RenderMarkdown } from "../../utils/RenderMarkdown";
import AboutIntersectionalDesignLab from "./about-intersectional-design-lab.md?raw";
import AboutTeam from "./about-team.md?raw";
import { H1 } from "../../components/header-and-footer/H1";
import "./About.css";
import { Drawing } from "../../components/global/Drawing";
export function About() {
  return (
    <>
      <main id="main-content">
        <H1>About</H1>

        <h2>Intersectional Design Lab</h2>
        <Drawing
          name="HomeNGO"
          alt=""
        />
        <RenderMarkdown mdFile={AboutIntersectionalDesignLab} />
        <Drawing name="Research" alt="" />
        <Drawing name="Experiment" alt="" />
        <Drawing name="Share" alt="" />
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
