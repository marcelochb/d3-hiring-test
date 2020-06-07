import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { DropDownContainer, DropDownHeader, DropDownListContainer, ListItem, DropDownList } from './styles';
import { useDropDown } from '../../utils/hooks';

export const DropDownRegion: React.FC = () => {
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
              <ListItem onClick={handleDropDown.onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}
