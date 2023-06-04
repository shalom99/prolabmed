"use client";
import UserForm from "@/components/UserForm";

import { useMultistepForm } from "@/lib/useMultistepForm";
import { FC, FormEvent, useState } from "react";
import ServicesForm from "@/components/ServicesForm";
import ConfirmForm from "../ConfirmForm";

type pageProps = {};

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  password: string;
  date: string;
  service: string;
};

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  password: "",
  date: "",
  service: "",
};

const StepperModal: FC<pageProps> = ({}) => {
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
      alert("Succes Account Creation");
      setData(INITIAL_DATA);
    }
  }

  return (
    <div className="relative h-full bg-red-200">
      <div className="grid grid-cols-3 gap-5 my-5">
        <div className="border-b-4 border-accent" />
        <div className="border-b-2 border-black" />
        <div className="border-b-2 border-black" />
      </div>


      <h2 className="text-center font-bold">Create an Appointment</h2>

      <div className="mx-auto bg-white border-t border-black p-2 m-5">
        <form onSubmit={onSubmit}>
          <div className="absolute top-0 right-0">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="absolute bottom-0 grid grid-cols-2 gap-5 mt-5">
            {!isFirstStep && (
              <button  className="bg-accent px-5 py-2 text-white rounded-lg" type="button" onClick={back}>
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
  );
};

export default StepperModal;
