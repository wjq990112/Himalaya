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

const IconaddAccount1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M605.034667 597.973333l24.277333 28.330667L629.333333 682.666667h-85.824v149.333333H629.333333l-0.149333 42.666667H213.333333a64 64 0 0 1-48.597333-105.642667l146.602667-171.050667A276.053333 276.053333 0 0 0 458.176 640a276.053333 276.053333 0 0 0 146.858667-42.026667zM735.509333 640v85.333333h85.333334v64h-85.333334v85.333334h-64v-85.333334h-85.333333v-64h85.333333v-85.333333h64z m-277.333333-490.666667c117.824 0 213.333333 95.509333 213.333333 213.333334s-95.509333 213.333333-213.333333 213.333333-213.333333-95.509333-213.333333-213.333333 95.509333-213.333333 213.333333-213.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconaddAccount1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconaddAccount1) : IconaddAccount1;