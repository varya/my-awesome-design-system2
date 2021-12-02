import React from "react";
import styled from "styled-components";
import { string, number } from "prop-types";

import { ReactComponent as SettingsIcon } from "./svg/setting.svg";
import { ReactComponent as HeartIcon } from "./svg/heart.svg";
import { ReactComponent as MenuIcon } from "./svg/menu.svg";
import { ReactComponent as ArrowBackIcon } from "./svg/arrowBack.svg";
import { ReactComponent as chevronDownIcon } from "./svg/chevronDown.svg";
import { ReactComponent as viewGridIcon } from "./svg/viewGrid.svg";
import { ReactComponent as viewItemIcon } from "./svg/viewItem.svg";
import { ReactComponent as filterIcon } from "./svg/filter.svg";
/* Icon
 *
 * SVG icons wrapper
 */

export const icons = {
  settings: SettingsIcon,
  heart: HeartIcon,
  menu: MenuIcon,
  arrowBack: ArrowBackIcon,
  chevronDown: chevronDownIcon,
  filter: filterIcon,
  viewGrid: viewGridIcon,
  viewItem: viewItemIcon,
};

const Icon = ({ name, width = 24, height = 24, color, ...props }) => {
  const SvgIcon = icons[name];
  return (
    <span className="icon" {...props} css={{ display: "inline-flex" }}>
      <SvgIcon fill={color} width={width} height={height} />
    </span>
  );
};

Icon.propTypes = {
  name: string,
  color: string,
  height: number,
  width: number,
};

export default Icon;
