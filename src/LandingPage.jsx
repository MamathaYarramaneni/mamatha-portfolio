import "./LandingPage.css";

export default function LandingPage() {
  return (
    <header>
      <a href="home.html" class="logo">Mamatha Yarramaneni</a>
      <nav>
        <ul className="mainMenu">
          <li>
            <a href="home.html">Home</a>
          </li>
          <li>
            <a href="projects.html">Projects</a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
