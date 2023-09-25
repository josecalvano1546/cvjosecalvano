import LanguageSwitcher from "./components/LanguageSwitcher";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function Home() {
  return (
    <main>
      <ThemeSwitcher />
      <LanguageSwitcher />
    </main>
  );
}
