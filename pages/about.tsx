import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="px-10 pt-14 md:max-w-4xl mx-auto">
        <h3 className="font-semibold text-4xl mb-7">Why?</h3>
        <p className="font-mono">
          This proyect was created to mapping my goals and express myself to the
          world. I just wanted to have a place to me and my thougts and I
          thought, "I suppose internet is a good place to do that" 🤔
        </p>
        <h4 className="font-semibold text-2xl mt-7 mb-4">
          What in the world is this?
        </h4>
        <p className="font-mono">
          It's just a blog that will help me to improve in life and achive my
          goals, that's the "why" of the this site name, I chose "delta" cuz is
          the greek symbol for "change" of "diference" (what I'm looking for to
          me with this proyect). Pushing myself to a better me 𝚫
        </p>
        <h4 className="font-semibold text-2xl mt-7 mb-4">Blog updates?</h4>
        <p className="font-mono">Let me ask to my mind-crewmates 🧠</p>
        <div className="py-11 md:flex gap-6">
          <img
            src="img/me.png"
            alt="personal-image"
            className="h-80 rounded-md mx-auto"
          />
          <div className="mt-8 md:mt-5">
            <h5 className="font-medium text-2xl">Mars Nunez</h5>
            <p className="font-light text-xl mb-4">June 12th - 2001</p>
            <ul className="font-mono font-light">
              <li>
                <ChevronRightIcon className="h-4 inline" /> Software Engineer 💻
              </li>
              <li>
                <ChevronRightIcon className="h-4 inline" /> Books & Manga Reader
                📚
              </li>
              <li>
                <ChevronRightIcon className="h-4 font-bold inline" /> Folk Metal
                🧚‍♂️
              </li>
              <li>
                <ChevronRightIcon className="h-4 font-bold inline" /> I preffer
                listen and read instead talk 💬
              </li>
              <li>
                <ChevronRightIcon className="h-4 font-bold inline" /> Its just
                my laptop and me, all day and night inside my room with windows
                closed 🧑‍💻
              </li>
              <li>
                <ChevronRightIcon className="h-4 font-bold inline" /> West
                Warriors 🌉 & East Celtics 🍀
              </li>
              <li>
                <ChevronRightIcon className="h-4 font-bold inline" /> Rain &
                animals lover 💚
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
