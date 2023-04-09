import Datepicker from "tailwind-datepicker-react";
import { useState } from "react";

import { setSelectedDate } from "../store/displaySlice";
import { useDispatch } from "react-redux";

const options = {
  autoHide: true,
  todayBtn: false,
  clearBtn: false,
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "bg-gray-700 dark:bg-gray-800",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "bg-gray-900",
    input: "",
    inputIcon: "",
    selected: "",
  },
  // icons: {
  //   // () => ReactElement | JSX.Element
  //   prev: () => <span>Previous</span>,
  //   next: () => <span>Next</span>,
  // },
  datepickerClassNames: "",
  defaultDate: new Date(),
  language: "en",
};

const DatePickerComp = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (selectedDate) => {
    dispatch(setSelectedDate(selectedDate));
    console.log(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };

  return (
    <div>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
};

export default DatePickerComp;
