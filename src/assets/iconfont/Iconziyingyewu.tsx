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

const Iconziyingyewu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M789.333333 170.666667a64 64 0 0 1 64 64v554.666666a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V234.666667a64 64 0 0 1 64-64h554.666666z m0 64H234.666667v554.666666h57.813333V441.962667c0-12.608 6.506667-24.32 17.216-31.018667l195.050667-85.333333c24.341333-15.210667 55.936 2.304 55.936 31.018666V789.333333h94.464V553.92l-61.034667-21.482667v-67.84l108.416 38.122667c9.429333 6.144 15.466667 16.234667 16.490667 27.306667l0.149333 3.370666L719.146667 789.333333H789.333333V234.666667z m-292.650666 164.330666l-140.181334 61.333334L356.48 789.333333h140.202667v-165.952l-97.557334 40.298667v-69.248l97.557334-40.277333v-44.245334l-97.536 41.514667v-69.546667l97.536-41.493333v-41.386667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconziyingyewu.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconziyingyewu) : Iconziyingyewu;