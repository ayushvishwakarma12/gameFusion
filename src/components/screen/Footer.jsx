import { useDispatch, useSelector } from "react-redux";
//import { selectAllGames, selectAllGamesStatus } from "./utils/gameUtils";
import { useEffect } from "react";

import { fetchAsynchGames } from "../utils/slice/gameUtils2";
import { apiUrl } from "../api/apiUrl";

export default function Home() {
  const dispatch = useDispatch();
  console.log(apiUrl);

  useEffect(() => {
    dispatch(fetchAsynchGames());
  }, []);

  return (
    <div className="flex flex-col h-screen shadow-black  bg-[url('../../public/background1.jpg')] bg-cover ">
      <navbar className="flex justify-between p-3 bg-black">
        <div className="text-white font-mono text-lg">
          <h1>Logo</h1>
        </div>
        <ul className="flex gap-4 text-white font-mono text-lg">
          <li className="hover:text-cyan-500 hover:scale-110 cursor-pointer">
            Home
          </li>
          <li className="hover:text-cyan-500 cursor-pointer">About</li>
          <li className="hover:text-cyan-500 cursor-pointer">Contact</li>
          <li className="hover:text-cyan-500 cursor-pointer">Search</li>
        </ul>
      </navbar>
      <footer className="bg-black text-white h-1/5 flex justify-center items-center mt-auto">
        <h4 className="text-xl">Copyright: Gaming website</h4>
      </footer>
    </div>
  );
}
