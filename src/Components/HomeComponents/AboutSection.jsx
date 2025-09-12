import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const AboutSection = () => {
  return (
    <div className="hero my-32">
      <div className="hero-content flex-col lg:flex-row p-0">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-xl" />
          <img
            src={parts}
            className="w-1/2 absolute top-1/2 left-1/3 border-8 border-white rounded-xl"
          />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-xl font-semibold">About Us</h1>
          <h2 className="text-[45px] font-semibold leading-tight">
            We are qualified <br />& of experience <br /> in this field
          </h2>
          <p className="">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
