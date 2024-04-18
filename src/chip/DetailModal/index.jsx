import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import { CSSTransition } from "react-transition-group";
import { AiOutlineClose } from "react-icons/ai";
import "animate.css";

const GlobalStyle = createGlobalStyle`
  body.modal-open {
    overflow: scroll;
  }
`;
// #4db6ac
const tealColor = "#000"; // Replace with the exact color from your image

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1050;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${tealColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0;
  padding: 80px 40px;
  box-sizing: border-box;
`;

const ModalHeader = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const CloseButton = styled.button`
  position: relative;
  background: #000;
  border: 2px solid #fff;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  color: #fff;
  z-index: 100;
`;

const ModalContent = styled.div`
  color: #fff;
  width: 100%;
  max-width: 960px;
  text-align: center;
  overflow: auto; /* Allows content to scroll */
  max-height: 100%; /* Sets the maximum height to prevent overflow */
  border: 2px solid #fff;
`;

// Assuming you have an image placeholder
// const Image = styled.div`
//   width: 100%;
//   max-width: 50vh;
//   height: 200px;
//   margin-bottom: 24px;
// `;
const Image = styled.img`
  max-width: 100%;
  max-height: 40vh; // Use 80% of the viewport height
  margin: 0px auto 20px auto;
  object-fit: contain; // This will ensure the image is scaled properly
  padding: 20px;
  border: 1px solid rgb(105 105 105 / 48%);

  @media (max-width: 600px) {
    padding: 10px;
    max-width: 90%;
   }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 16px;
  border-bottom: 2px solid #fff;
`;

const TextContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;
`;

const FixedHeader = styled.div`
  position: sticky;
  top: 0;
  background: ${tealColor};
  padding: 20px;
  border-radius: 8px 8px 0 0;
`;

const ScrollableContent = styled.div`
  overflow-y: auto; /* Enables vertical scroll for overflow content */
  padding: 20px;

  margin-top: -20px; /* Overlap to cover the gap */

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const DetailModal = ({ show, onClose, children, title, imageUrl }) => {
  // Prevent the body from scrolling when the modal is open
  if (show) {
    document.body.classList.add("modal-open");
  } else {
    document.body.classList.remove("modal-open");
  }

  return ReactDOM.createPortal(
    <>
      <GlobalStyle />
      <CSSTransition
        in={show}
        unmountOnExit
        timeout={{ enter: 700, exit: 700 }}
        classNames={{
          enter: "animate__animated",
          enterActive: "animate__zoomIn",
          exit: "animate__animated",
          exitActive: "animate__bounceOut",
        }}
      >
        <ModalOverlay onClick={onClose}>
          <ModalWrapper onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <CloseButton onClick={onClose}>
                <AiOutlineClose size={24} />
              </CloseButton>
            </ModalHeader>
            <ModalContent>
              <FixedHeader>
                <Title>{title}</Title>
              </FixedHeader>
              <Image src={imageUrl} alt={title} />
              <ScrollableContent>
                <TextContent>{children}</TextContent>
              </ScrollableContent>
            </ModalContent>
          </ModalWrapper>
        </ModalOverlay>
      </CSSTransition>
    </>,
    document.getElementById("modal-root")
  );
};

export default DetailModal;
