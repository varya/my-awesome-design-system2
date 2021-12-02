module.exports = (name) => `
import React from "react";
import styled from "styled-components";

/* ${name}
 *
 * TODO: add component description
 */
const ${name} = (props) => {
  return <Styled${name}>${name}</Styled${name}>;
};

export const Styled${name} = styled.div\`\`;

export default ${name};
`;
