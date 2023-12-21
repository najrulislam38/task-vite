import { Link } from "react-router-dom";
import bannerImg from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay  bg-opacity-50"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold font-poppins">
            Manage Your Task
          </h1>
          <p className="mb-5">
            Optimize your time management with built-in timers, reports, and
            insights to enhance your overall efficiency.
          </p>
          <Link to={"/login"}>
            <button className="btn btn-accent">Let's Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
