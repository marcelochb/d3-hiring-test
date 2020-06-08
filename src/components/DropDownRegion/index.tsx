import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { DropDownContainer, DropDownHeader, DropDownListContainer, ListItem, DropDownList } from './styles';
import { useDropDown } from '../../utils/hooks';
import { TypeDropDownRegion } from '../../utils/types';

export const DropDownRegion: React.FC<TypeDropDownRegion> = ({ searchCountriesByRegion }) => {
  const { getDropDown, handleDropDown } = useDropDown();

  return (
    <DropDownContainer>
      <DropDownHeader onClick={handleDropDown.toggling}>
        {getDropDown.selectedOption || "Filter by region"}
        <FontAwesomeIcon icon={faChevronDown} />
      </DropDownHeader>
      {getDropDown.isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {getDropDown.options.map(option => (
              <ListItem onClick={() => {
                searchCountriesByRegion(option.value);
                handleDropDown.setSelectedOption(option.value);
                handleDropDown.toggling();
              }} key={Math.random()}>
                {option.label}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}
