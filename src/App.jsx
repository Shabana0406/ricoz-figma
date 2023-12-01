import "./App.css";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Header from "./components/Header";
import Media from "./components/Media";
import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Tools from "./components/Tools";
import UniqueFeature from "./components/UniqueFeature";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <UniqueFeature />
      <Media />
      <Courses />
      <Stories />
      <Tools />
      <Contact />
    </div>
  );
}

export default App;
