import { FC, useState } from "react";

import Input from "./inputs/Input";
import { format } from "date-fns";

type UserData = {
  date: string;
  service: string;
  request: string;
};

type ServicesFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const ServicesForm: FC<ServicesFormProps> = ({
  date,
  service,
  request,
  updateFields,
}) => {
  const [isOpenCalender, setIsOpenCalender] = useState(false);

  const calculateMaxMonth = (succeedingMonths = 3) => {
    const date = new Date();
    // accessing current month of the date
    const currentMonth = date.getMonth();
    // adding required number of months
    date.setMonth(currentMonth + succeedingMonths);
    return format(date, "yyyy-MM-dd");
  };



  console.log(calculateMaxMonth());

  return (
    <>
      <h2 className="text-center mb-5">What do you need?</h2>
      <div className="grid lg:grid-cols-1 gap-5">
        <Input
          id="date"
          label="Date"
          required
          type="date"
          min={format(new Date(), "yyyy-MM-dd")}
          max={calculateMaxMonth()}
          value={date}
          onChange={(e) => updateFields({ date: e.target.value })}
        />

        {/* <Input
          id="service"
          label="Service"
          required
          type="text"
          value={service}
          autoComplete="off"
          onChange={(e) => updateFields({ service: e.target.value })}
        /> */}

 
          <select name="services"   
                  required
                  value={service}
                  onChange={(e) => updateFields({ service: e.target.value })}
                  className="
                      peer
                      w-full
                      p-4
                      pt-6 
                      font-light 
                      bg-white 
                      border-2
                      rounded-md
                      outline-none
                      transition
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                      ">
              <option value="">--Please choose a service--</option>
              <option value="CHEMISTRY">CHEMISTRY</option>
              <option value="HEMATOLOGY">HEMATOLOGY</option>
              <option value="IMMUNO-SEROLOGY">IMMUNO-SEROLOGY</option>
              <option value="X-RAY">X-RAY</option>
              <option value="ULTRASOUND">ULTRASOUND</option>
              <option value="CLINICAL MICROSCOPY">CLINICAL MICROSCOPY</option>
          </select>


         
       
        <Input
          id="service"
          label="Additional Request"
          type="text"
          value={request}
          autoComplete="off"
          onChange={(e) => updateFields({ request: e.target.value })}
        />
      </div>
    </>
  );
};

export default ServicesForm;
