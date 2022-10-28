import { forwardRef, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormDateInput = forwardRef((props, ref: any) => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date: Date) => {
    setStartDate(date);
  };

  return (
    <div className="flex items-center gap-2">
      <label className="text-[color:var(--theme-navy-darker)] text-lg block">
        Date
      </label>
      <DatePicker
        ref={ref}
        dateFormat="MM.dd.yy"
        selected={startDate}
        onChange={handleChange}
        className="bg-[color:var(--theme-navy-darker)] rounded-lg font-light text-sm px-4 py-2 cursor-pointer w-[86px] h-8"
      />
    </div>
  );
});

export default FormDateInput;
