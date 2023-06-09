"use client";
import { FC, useState, FormEvent } from "react";
import { createPortal } from "react-dom";
import { BiX } from "react-icons/bi";

import UserForm from "../UserForm";
import ServicesForm from "../ServicesForm";
import ConfirmForm from "../ConfirmForm";
import { useMultistepForm } from "@/hooks/useMultistepForm";
import { FormData } from "@/types";
import toast from 'react-hot-toast'


const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  password: "",
  date: "",
  service: "",
  request: "",
};

type ModalProps = {
  title: string;
  open: boolean;

  onClose: () => void;
};
const Modal: FC<ModalProps> = ({ title, open, onClose }) => {

  const [isOpen, setIsOPen] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { currentStepIndex, step, isFirstStep, isLastStep, back, next, resetStep } =
    useMultistepForm([
      <UserForm {...data} key={1} updateFields={updateFields} />,
      <ServicesForm {...data} key={2} updateFields={updateFields} />,
      <ConfirmForm {...data} key={3} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) {
      return next();
    } else {
      toast.success("Appointment Creation Successful");
      setData(INITIAL_DATA);
      resetStep();
      onCloseModal();
    }
  }


  //disable scroll on modal load
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    return null;
  }

  function onCloseModal() {
    document.body.style.overflow = "visible";
    setData(INITIAL_DATA)
    resetStep();
    onClose();
  }




  return createPortal(
    <>
      {/* modal background */}
      <div className="fixed inset-0 backdrop-blur-xl z-30 flex justify-center items-center">
        <div className="relative mx-4 w-full md:w-4/6 lg:w-3/6 xl:w-2/5 h-auto lg:h-auto md:h-auto bg-white px-5 py-5 rounded-md shadow-xl border-2">
          {/* modal content */}

          <div className="relative flex justify-between h-full items-center py-4">
            <button className="absolute left-5" onClick={onCloseModal}>
              <BiX size={25}  className=" text-primarytext" />
              </button>
            <h3 className="grow text-center">{title}</h3>
          </div>

          {/* stepper start */}
          <div className="relative w-full h-auto">

            <div id="stepperLevel" className="grid grid-cols-3 gap-5 py-5">
              <div className={`${currentStepIndex == 0 ? 'border-accent border-b-4': 'border-black border-b-2'}`} />
              <div className={`${currentStepIndex == 1 ? 'border-accent border-b-4': 'border-black border-b-2'}`} />
              <div className={`${currentStepIndex == 2 ? 'border-accent border-b-4': 'border-black border-b-2'}`} />
            </div>

            <div className="mx-auto h-auto ">
              <form onSubmit={onSubmit}>

                {/* <div className="absolute top-0 right-0">
                  {currentStepIndex + 1} / {steps.length}
                </div> */}

                {step}

                <div className="grid grid-cols-1 gap-5 mt-5">
                  {!isFirstStep && (
                    <button
                      className="bg-red-400 px-5 py-2 text-white rounded-lg"
                      type="button"
                      onClick={back}
                    >
                      Back
                    </button>
                  )}
                  <button
                    className="bg-accent px-5 py-2 text-white rounded-lg"
                    type="submit"
                  >
                    {isLastStep ? "Create Appointment!" : "Next"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* end stepper */}
        </div>
      </div>
    </>,
    document.body
  );
};

export default Modal;
