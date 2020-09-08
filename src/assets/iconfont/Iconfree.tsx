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

const Iconfree: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M829.866667 313.6a64 64 0 0 1 64 64v213.333333a64 64 0 0 1-64 64H262.08L168.597333 746.666667l-0.021333-91.733334H168.533333v-277.333333a64 64 0 0 1 64-64h597.333334z m-6.4 74.666667h-125.866667v185.6h125.866667v-38.4h-78.933334v-40.533334h68.266667v-34.133333h-68.266667v-36.266667h78.933334v-36.266666z m-136.533334 0h-125.866666v185.6h125.866666v-38.4h-78.933333v-40.533334h68.266667v-34.133333h-68.266667v-36.266667h78.933333v-36.266666z m-212.181333 0H392.533333v185.6h46.933334l-0.021334-68.458667 18.154667-0.021333 0.682667 1.664c6.826667 16.64 12.650667 28.970667 17.450666 36.949333 5.333333 8.874667 11.733333 18.133333 19.2 27.733333h57.6l-3.690666-5.098666c-18.026667-24.917333-29.226667-41.216-33.578667-48.896a418.261333 418.261333 0 0 1-10.666667-20.48 58.581333 58.581333 0 0 0-29.866666-108.992h0.021333z m-92.885333 0H256v185.6h46.933333v-70.4h68.266667v-36.266667h-68.266667v-42.666667h78.933334v-36.266666z m85.333333 38.4a23.466667 23.466667 0 0 1 0 46.933333h-27.733333V426.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconfree.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconfree) : Iconfree;