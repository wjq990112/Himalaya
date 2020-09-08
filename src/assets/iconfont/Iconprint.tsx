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

const Iconprint: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M704 512v384H320V512h384z m-64 64H384v256h256V576z m0-469.333333a64 64 0 0 1 64 64v64h106.666667a64 64 0 0 1 64 64v362.666666a64 64 0 0 1-64 64h-64v-64h64V298.666667H213.333333v362.666666h64v64h-64a64 64 0 0 1-64-64V298.666667a64 64 0 0 1 64-64h106.666667V170.666667a64 64 0 0 1 64-64h256zM426.666667 362.666667v64h-149.333334v-64h149.333334z m213.333333-192H384v64h256V170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconprint.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconprint) : Iconprint;