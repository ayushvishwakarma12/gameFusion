import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsRssFill, BsSteam, BsTwitch, BsYoutube } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  setSidebarOf,
  setSidebarOn,
  selectSidebarStatus,
} from "../../redux/slice/sidebarSLice";

// const Navbar = () => (
//   <nav className="  bg-gradient-to-r bg-slate-900  min-h-[80px] dark:bg-gray-900 min-w-full">
//     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//       <a href="/" className="flex items-center">
//         <span className="self-center text-xl md:text-4xl text-white font-bold mr-2">
//           Game
//         </span>
//         <span className="self-center text-xl md:text-4xl bg-gradient-to-r from-[#a4b7de] to-cyan-600 hover:bg-gradient-to-l delay-1000 trasition-all ease-in-out bg-clip-text text-transparent font-bold whitespace-nowrap dark:text-white">
//           Zone
//         </span>
//       </a>
//       <button
//         data-collapse-toggle="navbar-default"
//         type="button"
//         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//         aria-controls="navbar-default"
//         aria-expanded="false"
//       >
//         <span className="sr-only">Open main menu</span>
//         <svg
//           className="w-5 h-5"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 17 14"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M1 1h15M1 7h15M1 13h15"
//           />
//         </svg>
//       </button>
//       <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//         <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg bg-inherit md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//           <li>
//             <a
//               href="#"
//               className="block py-2 pl-3 pr-4 text-white bg-gradient-to-r from-[#1e40af] to-[#5d78b0] bg-clip-text bg-inherit rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
//               aria-current="page"
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//             >
//               About
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//             >
//               Services
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//             >
//               Pricing
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
//             >
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// );

const Navbar = () => {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector(selectSidebarStatus);

  return (
    //   <NavbarWrapper className="d-flex align-items-center">
    //     <div className="container w-100">
    //       <div className="navbar-content">
    //         <div className="brand-and-toggler flex items-center justify-between w-full">
    //           <Link
    //             to="/"
    //             className="navbar-brand text-white text-uppercase no-wrap"
    //           >
    //             <span className="self-center text-xl md:text-4xl text-white font-bold mr-2">
    //               Game
    //             </span>
    //             <span className="self-center text-xl md:text-4xl bg-gradient-to-r from-[#a4b7de] to-cyan-600 hover:bg-gradient-to-l delay-1000 trasition-all ease-in-out bg-clip-text text-transparent font-bold whitespace-nowrap dark:text-white">
    //               Zone
    //             </span>
    //           </Link>
    //           <button
    //             type="button"
    //             className="navbar-show-btn text-white"
    //             onClick={() => dispatch(setSidebarOn())}
    //           >
    //             <HiOutlineMenuAlt3 size={25} />
    //           </button>
    //         </div>

    //         <div className={`navbar-collapse ${sidebarStatus ? "show" : " "}`}>
    //           <button
    //             type="button"
    //             className="navbar-hide-btn"
    //             onClick={() => dispatch(setSidebarOf())}
    //           >
    //             <MdClose size={25} />
    //           </button>

    //           <ul className="navbar-nav">
    //             <li className="nav-item">
    //               <Link to="/" className="nav-link">
    //                 home
    //               </Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link to="/creators" className="nav-link">
    //                 creators
    //               </Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link to="/stores" className="nav-link">
    //                 stores
    //               </Link>
    //             </li>
    //             <li className="nav-item">
    //               <Link to="/games" className="nav-link">
    //                 games
    //               </Link>
    //             </li>
    //           </ul>

    //           <ul className="connect-list d-flex justify-content-center align-items-center mt-5 flex-wrap">
    //             <li className="text-uppercase fw-7 w-100 connect-text mb-2">
    //               connect
    //             </li>
    //             <li className="connect-item">
    //               <Link to="/" className="connect-link">
    //                 <BsRssFill />
    //               </Link>
    //             </li>
    //             <li className="connect-item">
    //               <Link to="/" className="connect-link">
    //                 <BsSteam size={18} />
    //               </Link>
    //             </li>
    //             <li className="connect-item">
    //               <Link to="/" className="connect-link">
    //                 <BsTwitch size={18} />
    //               </Link>
    //             </li>
    //             <li className="connect-item">
    //               <Link to="/" className="connect-link">
    //                 <BsYoutube size={19} />
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </NavbarWrapper>
    // );
    <div className="w-full bg-slate-900 min-h-[78px] pl-5 pr-5 flex items-center justify-between">
      <div>
        <Link to="/" className="text-white text-uppercase">
          <span className="text-xl md:text-4xl text-white font-bold mr-2">
            Game
          </span>
          <span className="text-xl md:text-4xl bg-gradient-to-r from-[#a4b7de] to-cyan-600 hover:bg-gradient-to-l delay-1000 trasition-all ease-in-out bg-clip-text text-transparent font-bold whitespace-nowrap dark:text-white">
            Zone
          </span>
        </Link>
      </div>

      <ul className="hidden md:flex">
        <li className="hover:scale-110 ease-in-out transition-all duration-500">
          <Link
            to="/"
            className="text-white hover:text-to-blue-600 font-poppins font-medium tracking-widest pr-2 xl:pr-5 text-base xl:text-lg"
          >
            Home
          </Link>
        </li>
        <li className="hover:scale-110 ease-in-out transition-all duration-500">
          <Link
            to="/"
            className="text-white hover:text-to-blue-600 font-poppins font-medium tracking-widest pr-2 xl:pr-5 text-base xl:text-lg"
          >
            Creators
          </Link>
        </li>
        <li className="hover:scale-110 ease-in-out transition-all duration-500">
          <Link
            to="/"
            className="text-white hover:text-to-blue-600 font-poppins font-medium tracking-widest pr-2 xl:pr-5 text-base xl:text-lg"
          >
            Store
          </Link>
        </li>
        <li className="hover:scale-110 ease-in-out transition-all duration-500 pr-2 xl:pr-5">
          <Link
            to="/"
            className="text-white hover:text-to-blue-600 font-poppins font-medium tracking-widest text-base xl:text-lg"
          >
            Games
          </Link>
        </li>
      </ul>

      <ul className="hidden md:flex justify-center items-center">
        <li className="text-white font-poppins font-medium tracking-widest pr-5 text-lg">
          connect
        </li>
        <li className="pr-4">
          <Link to="/" className="text-white font-poppins hover:text-white">
            <BsRssFill size={20} />
          </Link>
        </li>
        <li className="pr-4">
          <Link to="/" className="text-white font-poppins hover:text-white">
            <BsSteam size={20} />
          </Link>
        </li>
        <li className="pr-4">
          <Link to="/" className="text-white font-poppins hover:text-white">
            <BsTwitch size={20} />
          </Link>
        </li>
        <li className="pr-4">
          <Link to="/" className="text-white font-poppins hover:text-white">
            <BsYoutube size={20} />
          </Link>
        </li>
      </ul>

      <div className="md:hidden">
        <button
          className="bg-transparent"
          onClick={() => dispatch(setSidebarOn())}
        >
          <GiHamburgerMenu className="text-white" size={20} />
        </button>
        <div
          className={`fixed bg-white w-64 right-0 top-0 h-full z-50 ${
            sidebarStatus ? " " : "hidden"
          }`}
        >
          <div className="text-end">
            <button
              type="button"
              className="text-slate-800 "
              onClick={() => dispatch(setSidebarOf())}
            >
              <MdClose size={25} className="ml-auto" />
            </button>
          </div>
          <ul className="navbar-nav p-3">
            <li className=" border-b-[1px] border-slate-500/20 p-2">
              <Link
                to="/"
                className="text-slate-900 uppercase tracking-widest font-poppins"
              >
                home
              </Link>
            </li>
            <li className=" border-b-[1px] border-slate-500/20 p-2 mt-5">
              <Link
                to="/creators"
                className="text-slate-900 uppercase tracking-widest font-poppins"
              >
                creators
              </Link>
            </li>
            <li className=" border-b-[1px] border-slate-500/20 p-2 mt-5">
              <Link
                to="/stores"
                className="text-slate-900 uppercase tracking-widest font-poppins"
              >
                stores
              </Link>
            </li>
            <li className=" border-b-[1px] border-slate-500/20 p-2 mt-5">
              <Link
                to="/games"
                className="text-slate-900 uppercase tracking-widest font-poppins"
              >
                games
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col justify-center mt-10">
            <li className="uppercase w-100 font-poppins tracking-widest text-lg">
              connect
            </li>
            <li className="flex items-center justify-center p-5">
              <li className="connect-item pr-3">
                <Link to="/" className="text-slate-900">
                  <BsRssFill size={20} />
                </Link>
              </li>
              <li className="connect-item pr-3">
                <Link to="/" className="text-slate-900">
                  <BsSteam size={20} />
                </Link>
              </li>
              <li className="connect-item pr-3">
                <Link to="/" className="text-slate-900">
                  <BsTwitch size={20} />
                </Link>
              </li>
              <li className="connect-item">
                <Link to="/" className="text-slate-900">
                  <BsYoutube size={20} />
                </Link>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const NavbarWrapper = styled.div`
  min-height: 78px;
  background: #090624;

  .navbar-brand {
    font-weight: 700;
    font-size: 32px;

    span {
      color: green;
    }
  }

  .nav-item {
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .nav-link {
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
    transition: green;

    &:hover {
      color: blue;
    }
  }

  .connect-text {
    letter-spacing: 2px;
  }

  .connect-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2px;
    margin-left: 2px;
  }

  .connect-link {
    padding: 6px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: blue;

    &:hover {
      color: green;
    }
  }

  .navbar-collapse {
    position: fixed;
    right: 0;
    top: 0;
    width: 280px;
    height: 100%;
    background-color: var(--clr-white);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 60px 20px 16px;
    text-align: center;
    transform: translateX(100%);
    transition: var(--transition-default);
    z-index: 999;

    // after the show sidebar is triggered
    &.show {
      transform: translateX(0);
    }
  }

  .navbar-hide-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    transition: var(--transition-default);
    &:hover {
      transform: scale(1.2);
    }
  }

  .navbar-show-btn {
    transition: var(--transition-default);
    &:hover {
      transform: scale(1.2);
    }
  }

  @media screen and (min-width: 992px) {
    .navbar-show-btn {
      display: none;
    }
    .navbar-collapse {
      transform: translateX(0);
      position: relative;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      background-color: transparent;
      box-shadow: none;
    }
    .navbar-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav-item {
      margin-left: 6px;
    }
    .navbar-nav {
      display: flex;
    }
    .navbar-hide-btn {
      display: none;
    }
    .nav-link {
      color: var(--clr-white);
      padding: 1px 10px;
    }
    .connect-list {
      display: flex;
      margin-top: 0;
      color: var(--clr-white);
      margin-left: 40px;
      .connect-text {
        width: auto;
        margin-bottom: 0;
        margin-right: 22px;
        display: none;
      }
      .connect-link {
        color: var(--clr-white);
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .nav-link {
      padding-right: 16px;
      padding-left: 16px;
    }
    .connect-list {
      margin-left: 88px;

      .connect-text {
        display: inline-block;
      }
    }
  }
`;
