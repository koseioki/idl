import { NavLink } from "react-router-dom";
export function Home() {
  return (
    <main>
      <h1>How can we make the digital world inclusive?</h1>
      <p>At Intersectional Design Lab, we research and share design practices for Information and Communication Technologies (ICT) to make the digital space a more inclusive place for everyone.</p>
      <NavLink to="/what-is-intersectional-design">Read more about "What is Intersectional Design?"</NavLink>
      <h2>What we do</h2>
    </main>
  )
}
