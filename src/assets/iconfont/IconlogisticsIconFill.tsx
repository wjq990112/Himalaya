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

const IconlogisticsIconFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M591.36 780.437333a250.794667 250.794667 0 0 1 193.237333-7.146666l81.344 30.506666-22.464 59.925334-81.344-30.506667a186.794667 186.794667 0 0 0-149.12 7.829333l-6.741333 3.242667a234.154667 234.154667 0 0 1-193.066667 1.28l-8.832-3.904a208.682667 208.682667 0 0 0-166.954666-1.109333l-52.778667 22.613333-25.216-58.816 52.778667-22.613333a272.682667 272.682667 0 0 1 218.154666 1.450666l8.832 3.904a170.154667 170.154667 0 0 0 145.194667-3.285333zM576 170.666667a64 64 0 0 1 64 64v64h64a64 64 0 0 1 64 64v159.978666l28.650667 10.773334a64 64 0 0 1 38.613333 79.018666L810.666667 691.050667a194.410667 194.410667 0 0 1-18.965334 42.24l-7.104-2.666667a250.794667 250.794667 0 0 0-193.237333 7.146667l-6.976 3.370666a170.154667 170.154667 0 0 1-145.194667 3.285334l-8.832-3.904a272.682667 272.682667 0 0 0-198.976-8.832A193.216 193.216 0 0 1 213.333333 691.050667l-24.597333-78.613334a64 64 0 0 1 38.613333-79.018666L256 522.645333V362.666667a64 64 0 0 1 64-64h64v-64a64 64 0 0 1 64-64h128z m128 192H320v136L512 426.666667l192 72V362.666667z m-128-128h-128v64h128v-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconlogisticsIconFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconlogisticsIconFill) : IconlogisticsIconFill;