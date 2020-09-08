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

const Icontxt: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M628.437333 149.333333L789.333333 310.101333V426.666667h42.666667v341.333333h-42.666667v42.666667a64 64 0 0 1-64 64H298.666667a64 64 0 0 1-64-64v-42.666667H192V426.666667h42.666667V213.333333a64 64 0 0 1 64-64h329.770666zM725.333333 768H298.666667v42.666667h426.666666v-42.666667zM436.352 520.021333h-115.392v30.528h38.592v121.92h38.4v-121.92h38.4v-30.528z m45.504-0.192h-40.512l39.936 74.688-43.968 77.952h41.088l29.568-55.68 29.568 55.68h41.088l-43.968-77.952 39.936-74.688h-40.512l-26.112 52.8-26.112-52.8z m213.12 0.192h-115.392v30.528h38.592v121.92h38.4v-121.92h38.4v-30.528z m-122.24-306.709333L298.666667 213.333333v213.333334h426.666666v-43.712h-152.576L572.736 213.333333z m64 34.773333v70.869334h70.912l-70.912-70.869334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontxt.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icontxt) : Icontxt;