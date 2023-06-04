"use client";
import { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { BiX } from "react-icons/bi";

type ModalProps = {
  title: string
  open: boolean;
  children: ReactNode;
  onClose: () => void;
};
const Modal: FC<ModalProps> = ({
  title,
  open,
  children,
  onClose,
}) => {
  //disable scroll on modal load
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    return null;
  }

  function onCloseModal() {
    document.body.style.overflow = "visible";
    onClose();
  }

  return createPortal(
    <>
      {/* modal background */}
      <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-blur-xl z-30" />
      {/* modal content */}
      <div className="fixed top-10 left-5 right-5 bottom-10 lg:left-[50%] lg:top-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] flex flex-col gap-5 z-50 shadow-2xl bg-white rounded-md">
        <div className="border-b border-gray-200 flex justify-between items-center">
          <button className="" onClick={onCloseModal}>
            <BiX size={50} className="text-primarytext" />
          </button>
          <h3 className="text-center grow">{title}</h3>
        </div>
        {children}
      </div>
    </>,
    document.body
  );
};

export default Modal;
