import styled from "styled-components";
import PropTypes from "prop-types";

const Title = ({ titleName }) => {
  return (
    <div className="pt-5 text-center font-extrabold text-4xl tracking-widest mb-10 font-serif bg-slate-950">
      <h3 className="uppercase relative font-poppins text-white">
        {titleName.firstText}{" "}
        <span className=" text-[#e11d48]">{titleName.secondText}</span>
      </h3>
      <div className=" mt-4 h-2 w-40 ml-auto mr-auto bg-green-600 relative rounded-lg"></div>
    </div>
  );
};

export default Title;

Title.propTypes = {
  titleName: PropTypes.object,
};
