import { NavLink, useParams } from "react-router-dom";
import "./SideNav.css";
export function SideNav() {
    const {slug} = useParams();
    
    return (
        <nav className="side-nav" aria-label="Secondary">
            <ul>
                <li><NavLink to={`/research-projects/${slug}/about-this-project`}>About this research</NavLink></li>
                <li><NavLink to={`/research-projects/${slug}/types-of-marginalisation`}>Types of marginalisation</NavLink></li>
                <li><NavLink to={`/research-projects/${slug}/related-resources`}>Related resources</NavLink></li>
                <li><NavLink to={`/research-projects/${slug}/contact-information`}>Contact information</NavLink></li>
            </ul>
        </nav>
    );
}