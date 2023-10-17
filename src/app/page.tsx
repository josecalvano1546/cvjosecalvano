import LanguageSwitcher from "./components/LanguageSwitcher";
import NavBar from "./components/NavBar/NavBar";
import ThemeSwitcher from "./components/ThemeSwitcher";
import HomeSection from "./components/Sections/Home";
export default function Home() {
  return (
    <body>
      <NavBar />
      <main style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <HomeSection />
        <section
          id="about"
          style={{ width: "100%", height: "100vh", background: "green" }}
        />
        <section
          id="experience"
          style={{ width: "100%", height: "100vh", background: "blue" }}
        />
        <section
          id="education"
          style={{ width: "100%", height: "100vh", background: "yellow" }}
        />

        <section
          id="portfolio"
          style={{ width: "100%", height: "100vh", background: "orange" }}
        />
        <section
          id="contact"
          style={{ width: "100%", height: "100vh", background: "blue" }}
        />
      </main>
    </body>
  );
}
