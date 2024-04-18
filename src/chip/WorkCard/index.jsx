"use client";

import React, { useState } from "react";
import styled from "styled-components";
import data from "./data.json";
import { RxExternalLink } from "react-icons/rx";
import { BiDetail } from "react-icons/bi";
import Link from "next/link";
import DetailModal from "@/chip/DetailModal";

const WorkCard = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModalWithContent = (data) => {
    setModalContent(data);
    setModalShow(true);
  };

  // const reversedData = [...data].reverse();

  return (
    <>
      {data &&
        Array.isArray(data) &&
        data.map((item) => {
          // const image = {item.img}
          return (
            <>
              <div
                data-aos="zoom-in"
                key={data.id}
                className="flex flex-col justify-center items-center gap-4 inline-block sm:w-full md:w-[380px] m-4 sm:mr-6"
              >
                <POPUP className="img-content relative">
                  <div className="h-[280px] w-[380px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[280px] sm:bg-cover mx-auto ">
                    <img
                      src={item.img}
                      alt={item.title}
                      className=" object-fit w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                    />
                  </div>

                  <div
                    className={` popup w-full  h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[100%] p-4 m-4`}
                  >
                    {/* <p className=" text-gray-900 text-base leading-[1.4] text-justify w-[90%]">
                    {data.desc}
                  </p> */}
                    <div className=" flex items-center justify-center gap-4">
                      <Link
                        href={item.link}
                        className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                        passHref
                      >
                        <RxExternalLink className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                        <p className="text-black">Preview</p>
                      </Link>
                      <button
                        onClick={() => openModalWithContent(item)}
                        className="mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                      >
                        <BiDetail className="text-black bg-white rounded-full border w-[35px] h-[35px] p-2" />
                        <p className="text-black">Detail</p>
                      </button>
                    </div>
                  </div>
                </POPUP>
                <p className="text-gray-800 text-xl font-medium sm:text-lg">
                  {item.title}
                </p>
              </div>
              <DetailModal
                show={modalShow}
                onClose={() => setModalShow(false)}
                title={modalContent.title}
                imageUrl={modalContent.data_img}
              >
                <p>{modalContent.desc}</p>
              </DetailModal>
            </>
          );
        })}
    </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
