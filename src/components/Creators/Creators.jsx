import Title from "../Common/Title";
import { useEffect, useState } from "react";
import { fetchAsyncCreators } from "../../redux/slice/creatorsUtils";
import { STATUS } from "../../utils/status";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loader/Loader";
import CreatorsList from "./CreatorsList";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Creators = () => {
  const dispatch = useDispatch();
  const creators = useSelector((state) => state.creators.creators.results);
  const creatorsStatus = useSelector((state) => state.creators.creatorsStatus);

  const [currentPage, setCurrentPage] = useState(1);

  const onClickNextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0);
  };

  const onClickPrevPage = () => {
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(fetchAsyncCreators(currentPage));
  }, [currentPage]);
  return (
    <div className="min-h-screen bg-slate-950 p-10 flex flex-col items-center">
      <Title titleName={{ firstText: "OUR", secondText: "CREATORS" }} />
      <div>
        {creatorsStatus === STATUS.SUCCEEDED ? (
          <CreatorsList creators={creators} />
        ) : (
          <Loading />
        )}
      </div>
      <div className="flex  justify-between">
        <button
          onClick={onClickPrevPage}
          className="flex bg-transparent justify-center items-center text-slate-500 text-2xl cursor-pointer hover:text-white outline-none border-none"
        >
          <AiOutlineArrowLeft /> <span className="pl-2">Prev</span>
        </button>
        <button
          onClick={onClickNextPage}
          className="flex bg-transparent justify-center items-center text-slate-500 text-2xl cursor-pointer hover:text-white outline-none border-none"
        >
          <span className="pr-2">Next</span>
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Creators;
