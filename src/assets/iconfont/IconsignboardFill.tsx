/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const IconsignboardFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M545.536 152.96a64 64 0 0 1 20.970667 20.949333L643.264 298.666667H789.333333c35.349333 0 64 31.146667 64 69.546666v394.24c0 38.4-28.650667 69.546667-64 69.546667H234.666667c-35.349333 0-64-31.146667-64-69.546667V368.213333C170.666667 329.813333 199.317333 298.666667 234.666667 298.666667h146.048l76.778666-124.757334a64 64 0 0 1 88.042667-20.970666zM640 597.333333H277.333333v64h362.666667v-64z m106.666667-149.333333H277.333333v64h469.333334v-64zM512 207.445333L455.872 298.666667h112.256L512 207.445333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconsignboardFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconsignboardFill) : IconsignboardFill;