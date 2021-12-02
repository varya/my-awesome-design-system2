import React from "react";
import styled from "styled-components";
import { string, shape, arrayOf } from "prop-types";

/* SummaryTable
 *
 * SummaryTable displays order details in a table, each row has information on name and price for each item.
 */

const SummaryTable = ({ items, total, ...props }) => {
  return (
    items &&
    items.length > 0 && (
      <div {...props}>
        <StyledHeading>Summary</StyledHeading>
        <StyledGrid>
          {items.map((item) => (
            <React.Fragment key={item.name}>
              <p>{item.name}</p>
              <StyledPrice>{item.price}</StyledPrice>
            </React.Fragment>
          ))}
        </StyledGrid>
        {total && (
          <>
            <StyledBorder />
            <StyledGrid>
              <StyledItemName>Total</StyledItemName>
              <StyledTotal>{total}</StyledTotal>
            </StyledGrid>
          </>
        )}
      </div>
    )
  );
};

SummaryTable.propTypes = {
  items: arrayOf(
    shape({
      name: string,
      price: string,
    })
  ),
  total: string,
};

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  row-gap: 16px;
`;

const StyledBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 32px 0;
`;

const StyledItemName = styled.p`
  font-size: 18px;
  line-height: 28px;
`;

const StyledHeading = styled.h2`
  margin-bottom: 30px;
`;

const StyledPrice = styled.div`
  font-family: "DM Sans";
  font-size: 14px;
  font-weight: 700;
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.3px;
  text-align: right;
`;

const StyledTotal = styled.div`
  font-family: "DM Sans";
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 28px;
  letter-spacing: -0.4px;
  text-align: right;
`;

export default SummaryTable;
