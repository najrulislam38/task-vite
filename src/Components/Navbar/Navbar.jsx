import { Link } from "react-router-dom";
import Container from "../Container/Container";
import NavLogo from "../NavLogo/NaLogo";
import userProfile from "../../assets/User-Profile.png";
import "./Navbar.css";

const Navbar = () => {
  const user = false;

  const navLinks = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/features"}>Features</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="border-b shadow-sm">
      <Container>
        <div className="flex justify-between items-center py-3 ">
          <div className="">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <a className="text-xl md:text-3xl italic font-bold">
              <NavLogo />
            </a>
          </div>
          <div className="flex items-center gap-5">
            <div className=" hidden lg:flex">
              <ul className="flex gap-7 items-center ">{navLinks}</ul>
            </div>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {user?.photoURL ? (
                      <img src={"photoURL"} alt="user image" />
                    ) : (
                      <img src={userProfile} />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li className="text-gray-700  text-center font-semibold">
                    {user?.displayName ? (
                      <p className="py-2 text-center text-base font-poppins ">
                        {/* {} */}
                      </p>
                    ) : (
                      <p className="py-2 text-center font-poppins  text-base">
                        User
                      </p>
                    )}
                  </li>
                  <li>
                    <button
                      onClick={""}
                      className="btn btn-sm  btn-accent bg-[#00b8d6]  "
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to={"/login"}>
                <button className="btn btn-sm btn-accent py-2 px-5  font-poppins font-medium text-white">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
