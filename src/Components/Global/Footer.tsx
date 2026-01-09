import "./Footer.css";
export function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h2 className="sr-only">Site footer</h2>
        <p>Intersectional Design Lab (Beta)</p>
        <p>
          Email: <a href="mailto:hello@intersectionaldesignlab.org">
            hello@intersectionaldesignlab.org
          </a>
        </p>
        <p>
          Phone: <a href="tel:+4591964325">+45 9196 4325</a>
        </p>
        <p>@ 2026 Intersectional Design Lab</p>
      </div>
    </footer>
  );
}
