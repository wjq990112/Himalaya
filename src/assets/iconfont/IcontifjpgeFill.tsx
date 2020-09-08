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

const IcontifjpgeFill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M628.437333 170.666667L789.333333 331.434667V437.333333h53.333334v320H789.333333V789.333333a64 64 0 0 1-64 64H298.666667a64 64 0 0 1-64-64v-32H181.333333v-320H234.666667V234.666667a64 64 0 0 1 64-64h329.770666zM725.333333 757.333333H298.666667V789.333333h426.666666v-32zM479.018667 520.021333h-115.392v30.528h38.592v121.92h38.4v-121.92h38.4v-30.528z m50.88-0.192h-38.4v152.64h38.4v-152.64z m119.424 0h-102.144v152.64h38.4v-57.6h55.488v-29.76h-55.488v-34.56h63.744v-30.72zM572.736 234.666667H298.666667v202.666666h426.666666v-54.378666h-152.576L572.736 234.666667z m64 34.773333v49.514667h49.557333l-49.557333-49.514667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IcontifjpgeFill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IcontifjpgeFill) : IcontifjpgeFill;