import { arrayOf, string, shape } from "prop-types";
import React from "react";
import styled from "styled-components";
import Icon, { icons } from "../Icon";
import {
  Listbox,
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
  ListboxArrow,
} from "@reach/listbox";
import "@reach/listbox/styles.css";

/* Select
 *
 * A dropdown list of values.
 */
const Select = ({ defaultValue, options, ...props }) => {
  if (!options) {
    return null;
  }
  const renderOptions = (options) => {
    return (
      <>
        {options.map((option, index) => {
          return (
            <ListboxOption key={`option-${index}`} value={option.value}>
              {option.title}
            </ListboxOption>
          );
        })}
      </>
    );
  };

  return (
    <StyledSelect
      arrow={<Icon name="chevronDown" width={10} height={10} />}
      {...props}
    >
      <>
        {defaultValue && (
          <ListboxOption key="default" value="default">
            {defaultValue}
          </ListboxOption>
        )}
        {options && renderOptions(options)}
      </>
    </StyledSelect>
  );
};

Select.propTypes = {
  /* text which will be always displayed by default. If omitted, first value is selected */
  defaultValue: string,
  options: arrayOf(
    shape({
      title: string.isRequired,
      value: string.isRequired,
    })
  ).isRequired,
};

export const StyledSelect = styled(Listbox)`
  > [data-reach-listbox-button] {
    padding: 8px 16px;
    font-family: "DM Sans";
    line-height: 24px;
    font-weight: bold;
    border-color: "rgba(188, 199, 213, 1)";
    border-radius: 12px;
    color: "rgba(12, 17, 24, 1)";
    position: relative;
    outline: none;
    align-items: baseline;
  }
  > [data-reach-listbox-arrow] {
    right: 0.75rem;
    pointer-events: none;
    display: block;
  }
`;

export default Select;
