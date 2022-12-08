import logo from "./logo.svg";
import "./App.css";

// import BootstrapComponent from "./components/bootstrapComp/bootstrapComp";
// import FontAwesomeComponent from "./components/fontAwesomeComp/fontAwesomeComp";
import Navigation from "./components/navigation/navigation";
import Hero from "./components/hero/hero";
import NewsStories from "./components/newsStories/newsStories";
import FooterSection from "./components/footerSection/footerSection";
import Subscription from "./components/sub/sub";

function App() {
  return (
    <div className="App">
      {/* <BootstrapComponent></BootstrapComponent>
      <FontAwesomeComponent></FontAwesomeComponent> */}
      <Navigation></Navigation>
      <Hero></Hero>
      <NewsStories></NewsStories>
      <Subscription></Subscription>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
