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

const Iconvideo1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M658.069333 256a64 64 0 0 1 64 64l-0.021333 33.664 49.28-38.4A64 64 0 0 1 874.666667 365.781333v338.368a64 64 0 0 1-103.338667 50.474667l-49.28-38.4v26.496a64 64 0 0 1-64 64H213.333333a64 64 0 0 1-64-64V320a64 64 0 0 1 64-64h444.736z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M376.106667 638.933333l132.224-88.981333a21.333333 21.333333 0 0 0-0.170667-35.498667l-132.202667-87.274666a21.333333 21.333333 0 0 0-33.088 17.792v176.277333a21.333333 21.333333 0 0 0 33.237334 17.706667z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconvideo1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconvideo1) : Iconvideo1;