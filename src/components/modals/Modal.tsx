"use client";
import { FC, useState, FormEvent } from "react";
import { createPortal } from "react-dom";
import { BiX } from "react-icons/bi";
import StepperModal from "./StepperModal";
import UserForm from "../UserForm";
import ServicesForm from "../ServicesForm";
import ConfirmForm from "../ConfirmForm";
import { useMultistepForm } from "@/hooks/useMultistepForm";
import { FormData } from "@/types";


const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  password: "",
  date: "",
  service: "",
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
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <ServicesForm {...data} updateFields={updateFields} />,
      <ConfirmForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) {
      return next();
    } else {
      alert("Success Appointment Creation");
      setData(INITIAL_DATA);
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
    onClose();
  }

  return createPortal(
    <>
      {/* modal background */}
      <div className="fixed inset-0 backdrop-blur-xl z-30 flex justify-center items-center">
        <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 h-auto lg:h-auto md:h-auto bg-white px-5 py-5 rounded-md shadow-xl">
          {/* modal content */}

          <div className="flex justify-between h-full items-center py-4">
              <BiX size={25} className="ml-5 text-primarytext" />
            <h3 className="grow text-center">{title}</h3>
          </div>

          {/* stepper start */}
          <div className="relative w-full h-auto">

            <div id="stepperLevel" className="grid grid-cols-3 gap-5 py-5">
              <div className={`${currentStepIndex == 0 ? 'border-accent': 'border-black'} border-b-4`} />
              <div className={`${currentStepIndex == 1 ? 'border-accent': 'border-black'} border-b-4`} />
              <div className={`${currentStepIndex == 2 ? 'border-accent': 'border-black'} border-b-4`} />
            </div>

            <div className="mx-auto h-auto ">
              <form onSubmit={onSubmit}>
                <div className="absolute top-0 right-0">
                  {currentStepIndex + 1} / {steps.length}
                </div>

                {step}

                <div className="grid grid-cols-2 gap-5 mt-5 bg-blue-200">
                  {!isFirstStep && (
                    <button
                      className="bg-accent px-5 py-2 text-white rounded-lg"
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
                    {isLastStep ? "Finish" : "Next"}
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
