import { useState } from "react";

export const useDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["Africa", "América", "Asia", "Europa", "Oceania"];

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  return {
    getDropDown: {
      isOpen,
      selectedOption,
      options,
    },
    handleDropDown: {
      toggling,
      onOptionClicked,
    },
  };
};
