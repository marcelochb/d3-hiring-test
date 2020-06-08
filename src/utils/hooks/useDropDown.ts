import { useState } from "react";

export const useDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { label: "Todos", value: "Todos" },
    { label: "Africa", value: "Africa" },
    { label: "América", value: "Americas" },
    { label: "Asia", value: "Asia" },
    { label: "Europa", value: "Europe" },
    { label: "Oceania", value: "Oceania" },
    { label: "Polar", value: "Polar" },
  ];

  const toggling = () => setIsOpen(!isOpen);

  return {
    getDropDown: {
      isOpen,
      selectedOption,
      options,
    },
    handleDropDown: {
      toggling,
      setSelectedOption,
    },
  };
};
