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

const Iconbeauty: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M746.666667 192a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64v64h64a64 64 0 0 1 64 64v320a64 64 0 0 1-64 64H576.682667a95.445333 95.445333 0 0 0 9.813333-36.949333L586.666667 853.333333v-21.333333H810.666667V512h-64v0.341333h-170.666667l0.021333-22.976a96.426667 96.426667 0 0 0-41.386666-41.386666H576V384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64h170.666667z m-448-9.984a42.666667 42.666667 0 0 1 21.952 6.08l86.570666 51.946667A128 128 0 0 1 469.333333 349.802667V490.666667a64 64 0 0 1 64 64v277.333333a64 64 0 0 1-64 64H256a64 64 0 0 1-64-64V554.666667a64 64 0 0 1 64-64V224.682667a42.666667 42.666667 0 0 1 42.666667-42.666667zM256 832h213.333333V554.88H256V832z m64-569.621333v228.266666h85.333333v-140.842666a64 64 0 0 0-31.082666-54.869334L320 262.378667zM682.666667 384h-42.666667v63.957333L682.666667 448V384z m64-128h-170.666667v64h170.666667v-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconbeauty.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconbeauty) : Iconbeauty;