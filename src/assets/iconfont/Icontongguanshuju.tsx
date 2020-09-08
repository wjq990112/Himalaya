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

const Icontongguanshuju: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M725.333333 448a192 192 0 1 1 0 384 192 192 0 0 1 0-384z m42.666667-234.666667a64 64 0 0 1 64 64l0.021333 129.898667a254.122667 254.122667 0 0 0-64-19.690667L768 277.333333H213.333333v469.333334l279.232 0.021333c10.752 23.466667 24.96 45.013333 41.962667 64L213.333333 810.666667a64 64 0 0 1-64-64V277.333333a64 64 0 0 1 64-64h554.666667z m-42.666667 298.666667a128 128 0 1 0 0 256 128 128 0 0 0 0-256z m-0.810666 38.4l78.08 91.861333c11.690667 13.781333 10.026667 34.453333-3.754667 46.165334-7.744 5.12-9.301333 6.144-15.509333 7.061333l-5.696 0.725333H635.733333v-64h74.325334l-34.304-40.362666 48.768-41.450667z m-359.189334 70.933333v64h-90.666666v-64h90.666666z m64-128v64h-154.666666v-64h154.666666z m106.666667-149.333333v64h-261.333333v-64h261.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontongguanshuju.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icontongguanshuju) : Icontongguanshuju;