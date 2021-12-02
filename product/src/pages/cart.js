import React from "react";
import styled from "styled-components";
import { Button, Icon, SummaryTable, colors } from "design-system";
import { Link } from "react-router-dom";

const data = require("../data/data.js");
const items = data.products;

const Cart = ({
  match: {
    params: { id },
  },
}) => {
  const item = items[id];
  return (
    <div>
      <StyledDiv1>
        <StyledDiv2>
          <StyledImage1 src={data.user.avatar} />
          <Button isOutline>
            <Icon name="menu" />
          </Button>
        </StyledDiv2>
        <Styledh1>Shopping Cart</Styledh1>
        <StyledDiv3>
          <StyledImg src={item.image} alt="" />
          <StyledDiv4>
            <Styledh6>{item.name}</Styledh6>
            <Styledh62>{item.price}</Styledh62>
            <StyledP>{item.description}</StyledP>
          </StyledDiv4>
        </StyledDiv3>
        <StyledBorder />
        <StyledDiv5>
          <SummaryTable
            items={[
              { name: "Subtotal", price: item.price },
              { name: "Estimated Delivery & Handling", price: "€0.00" },
            ]}
            total={item.price}
          />
          <Button as={Link} to="/checkout" isStretched>
            Checkout
          </Button>
        </StyledDiv5>
      </StyledDiv1>
    </div>
  );
};

const StyledImage1 = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 16px;
`;

const StyledDiv1 = styled.div`
  padding: 64px 40px;
`;

const Styledh1 = styled.h1`
  margin-bottom: 40px;
  letter-spacing: -1.6px;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: space-between;
`;
const StyledDiv4 = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: center;
  margin-left: 16px;
  align-content: flex-start;
`;

const StyledDiv5 = styled.div`
  margin-top: 32px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  width: 96px;
  height: 100px;
`;

const Styledh6 = styled.h6`
  max-width: 58%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-right: auto;
`;

const Styledh62 = styled.h6`
  font-weight: 700;
`;
const StyledP = styled.p`
  opacity: 0.6;
`;

const StyledBorder = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.onSurface100};
  margin: 32px 0;
`;

export default Cart;
