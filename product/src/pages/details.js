import React from "react";
import styled from "styled-components";
import { Button, Icon, colors } from "design-system";
import { Link } from "react-router-dom";

const data = require("../data/data.js");
const items = data.products;

const Details = ({
  match: {
    params: { id },
  },
}) => {
  const item = items[id];
  return (
    item && (
      <div>
        <StyledDiv1>
          <StyledDiv2>
            <Link to="/">
              <Button isOutline>
                <Icon name="arrowBack" />
              </Button>
            </Link>
            <StyledDiv3>
              <h4>{item.name}</h4>
            </StyledDiv3>
          </StyledDiv2>
          <StyledDiv4>
            <StyledDiv5>
              <StyledButton isOutline>
                <Icon name="heart" />
              </StyledButton>
              <StyledImg src={item.image} alt={item.name} />
            </StyledDiv5>
            <StyledP>{item.category}</StyledP>
            <Styledh1>{item.name}</Styledh1>
            <Styledh2>{item.price}</Styledh2>
            <Button as={Link} to={`/cart/${id}`} isStretched>
              Add to Cart
            </Button>
            <StyledDiv6>
              <p>Added to your cart</p>
              <Button as={Link} to="/checkout" isBorderless>
                Checkout
              </Button>
            </StyledDiv6>
          </StyledDiv4>
        </StyledDiv1>
      </div>
    )
  );
};

const StyledDiv1 = styled.div`
  padding: 64px 40px;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const StyledDiv3 = styled.div`
  flex-grow: 2;
  display: flex;
  align-items: center;
  margin-left: 24px;
`;
const StyledDiv4 = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledDiv5 = styled.div`
  border-radius: 32px;
  margin-bottom: 24px;
  position: relative;
`;
const StyledDiv6 = styled.div`
  display: flex;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1),
    0px 1px 3px 0px rgba(0, 0, 0, 0.06);
  padding: 20px 24px;
  justify-content: space-between;
  border-radius: 16px;
  margin-top: 24px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  margin: 24px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  display: block;
`;

const StyledP = styled.p`
  margin-bottom: 8px;
  opacity: 0.6;
`;
const Styledh1 = styled.h1`
  margin-bottom: 16px;
`;
const Styledh2 = styled.h2`
  color: ${colors.primary900};
  margin-bottom: 40px;
`;

export default Details;
