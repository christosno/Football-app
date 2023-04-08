import React from "react";
import { Button, ButtonGroup } from "react-daisyui";

const DatePicker = () => {
  return (
    <div className="bg-sky-800/20 w-full rounded-2xl p-2 mb-4 flex justify-around align-middle">
      <div>
        <ButtonGroup className="hidden md:block">
          <Button className="text-xs" size="sm">
            12 Mar
          </Button>
          <Button className="text-xs" size="sm">
            12 Mar
          </Button>
          <Button className="text-xs" size="sm">
            12 Mar
          </Button>
          <Button className="text-xs" size="sm">
            12 Mar
          </Button>
          <Button className="text-xs" size="sm">
            12 Mar
          </Button>
        </ButtonGroup>

        <ButtonGroup className="md:hidden">
          <Button className="text-xs" size="sm">
            12 Mar
          </Button>
          <Button className="text-xs" size="sm">
            12 Mar
          </Button>
          <Button className="text-xs" size="sm">
            12 Mar
          </Button>
        </ButtonGroup>
      </div>
      <div>Picker</div>
    </div>
  );
};

export default DatePicker;
