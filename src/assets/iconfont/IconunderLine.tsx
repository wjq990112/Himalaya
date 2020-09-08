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

const IconunderLine: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M812.714667 810.666667v64H213.333333v-64h599.381334zM379.370667 160v64H309.333333v279.616c0 103.829333 87.253333 188.949333 196.778667 191.914667l5.888 0.085333c112.256 0 202.666667-86.314667 202.666667-192V224H640v-64h208.704v64H778.666667v279.616c0 139.562667-116.117333 252.522667-260.010667 255.914667l-6.656 0.085333c-146.944 0-266.666667-114.282667-266.666667-256V224H170.666667v-64h208.704z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconunderLine.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconunderLine) : IconunderLine;