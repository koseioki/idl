import { H1 } from "../components/header-and-footer/H1"; 
export function NotFound() {

  return (
    <main id="main-content">
      <H1>The page you are looking for does not exist</H1>
      <a href="/">Go back to the homepage</a>
    </main>
  );
}