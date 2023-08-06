import React from "react";
import profile from "../../images/profile.jpeg";

function About() {
  return (
    <section className="about">
      <img src={profile} className="profile-picture" alt="developer" />

      <h2>About me</h2>
      <p>
        I was born in Manchester Connecticut and grew up in Central FL. My
        hobbies are video games and Muay Thai. When i'm not playing or fighting
        I enjoy hanging out with my five year old daughter. The motivation for
        this career change is a better life for me and her.
      </p>
    </section>
  );
}

export default About;