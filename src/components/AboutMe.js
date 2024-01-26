import { useScrollEffect } from "../hooks/useScrollEfect";

const SobreMi = () => {
  const [visible] = useScrollEffect("scrollEffectAbout");

  return (
    <div
      className={`container-sobreMi scrollEffectAbout ${visible && "visible"}`}
      id="aboutMe"
    >
      <h1>About me</h1>
      <p>
        Experienced and results-driven Software Engineer boasting nearly three
        years of hands-on expertise in both front-end and back-end development.
        I am recognized for my unwavering dedication to producing top-notch
        code, and my optimistic demeanor shines through in the collaborative
        environments I excel in.
      </p>
      <p>
        What truly distinguishes me is my fervor for independently acquiring new
        skills, propelling me into the captivating realm of programming. This
        self-driven initiative not only propels my professional advancement but
        also positions me as a resourceful contributor in fast-paced and
        evolving work settings.
      </p>
      <p>
        My commitment to staying abreast of the ever-changing technology
        landscape positions me as a valuable asset to any dynamic team. I thrive
        in environments where continuous improvement is the norm. Explore
        further below to discover a glimpse of my diverse projects and
        proficiency in cutting-edge technologies.
      </p>
    </div>
  );
};

export default SobreMi;
