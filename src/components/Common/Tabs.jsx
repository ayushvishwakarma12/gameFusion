import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { AiOutlineMenu } from "react-icons/ai";
import GenreItem from "../Genre/GenreItem";

const Tabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState(data[0]); // using first genre as the default tab
  const [tabButtonStatus, setTabButtonStatus] = useState(false);
  console.log(data);

  const tabClickHandler = (id) => {
    data.map((item) => {
      if (item.id === id) {
        setActiveTab(item);
      }
    });
  };

  const tabButtonsHandler = () =>
    setTabButtonStatus((prevStatus) => !prevStatus);

  return (
    <TabsWrapper className="bg-white pb-10">
      <div className="container">
        <div className="tabs-content">
          <ul
            className={`tabs-buttons opacity-90 hover:opacity-100 absolute rounded-tr-2xl rounded-br-2xl top-0 left-0 z-40 shadow-2xl pt-16 pb-16 shadow-slate-800 ${
              tabButtonStatus ? "show" : ""
            } bg-slate-800`}
          >
            <button
              type="button"
              className="tabs-buttons-close bg-white d-flex align-items-center justify-content-center"
              onClick={tabButtonsHandler}
            >
              <AiOutlineMenu size={30} />
            </button>
            {data.map((item) => {
              return (
                <li
                  key={item?.id}
                  className={`tabs-button ${
                    item?.id === activeTab.id ? "tabs-active" : ""
                  }`}
                >
                  <button
                    className="text-white"
                    type="button"
                    onClick={() => tabClickHandler(item?.id)}
                  >
                    {item?.name}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="ml-auto xl:max-w-[1000px] md:pr-2 xl:pr-10 lg:min-h-[135vh] xl:min-h-[140vh] 2xl:min-h-[160vh] 2xl:max-w-[1100px] flex-wrap">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-h-[1200px] overflow-auto">
              {activeTab?.games?.map((item) => (
                <>
                  <GenreItem key={item.id} gameItem={item} />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TabsWrapper>
  );
};

export default Tabs;

Tabs.propTypes = {
  data: PropTypes.array,
  sliceValue: PropTypes.number,
};

const TabsWrapper = styled.div`
  position: relative;
  min-height: 1000px;
  background-color: var(--clr-violet-dark-active);

  .tabs-buttons {
    position: absolute;
    left: 0;
    top: 0;
    width: 286px;
    z-index: 99;
    padding-top: 60px;
    padding-bottom: 60px;
    /* box-shadow: rgba(0, 0, 0, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
    transition: var(--transition-default);

    .tabs-buttons-close {
      position: absolute;
      right: -32px;
      top: 0;
      width: 32px;
      height: 32px;
      display: none;

      &:hover {
        background-color: var(--clr-pink-normal);
        color: var(--clr-white);
      }
    }

    @media screen and (max-width: 1480px) {
      width: 240px;
    }

    @media screen and (max-width: 1380px) {
      width: 200px;
    }

    @media screen and (max-width: 1280px) {
      transform: translateX(-88%);
      width: 286px;

      .tabs-buttons-close {
        display: block;
      }

      &.show {
        transform: translateX(0);
      }
    }
  }

  .tabs-button {
    button {
      padding: 12px 30px;
      font-family: "Barlow";
      font-weight: 500;
      font-size: 18px;
      letter-spacing: 0.1em;
      /* border-bottom: 1px solid rgba(255, 255, 255, 0.03); */
      width: 100%;
      text-align: start;
    }

    &:hover:not(.tabs-active) {
      background-color: #a4319e;
    }
  }

  .tabs-active {
    background-color: #e11d48;
    button {
      color: #ffffff;
    }
  }

  .tabs-body {
    max-width: 1050px;
    margin-left: auto;
  }
`;
