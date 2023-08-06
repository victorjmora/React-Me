import React from "react";
import profile from "React-Me/source/images/ProfilePic.jpg";

function About() {
  return (
    <section className="about">
      <img src={profile} className="profile-picture" alt="developer" />

      <h2>About me</h2>
      <p>
       My name is Victor and I am originally from Venezuela. I came here
        with my mom at age 3 and have been in Florida ever since. I work in phone sales but have desperately 
        been wanting to leave for years because im wanting a new career that is a bit less stressful. My interest
        with programming began 3 years ago and I finally got my opportunity to go to school for it in this bootcamp
        and i can honestly say that i love it. Now im trying to get as much information that i learned to be able to perfect
        my craft and finally have a different career thats not sales.
      </p>
    </section>
  );
}

export default About;