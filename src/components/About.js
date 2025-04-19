import { image } from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I'm a passionate web developer with experience in React and JavaScript.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;