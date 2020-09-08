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

const Icondollar1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M545.024 176v66.645333l4.544 0.682667c28.16 4.202667 50.986667 12.778667 68.736 25.813333 15.658667 11.52 30.72 28.522667 45.184 50.901334l3.2 4.906666-62.293333 32.469334-2.645334-3.968c-21.888-32.853333-49.984-49.322667-84.032-49.322667-22.890667 0-42.048 6.442667-57.173333 19.157333-15.466667 13.013333-23.274667 29.376-23.274667 48.810667 0 17.706667 6.421333 32.682667 19.029334 44.458667 10.24 9.557333 29.12 20.416 57.344 32.938666l21.546666 9.301334c25.877333 11.264 47.253333 21.738667 64.341334 31.530666 18.944 10.922667 33.130667 21.354667 42.453333 31.210667 26.922667 27.093333 40.277333 59.52 40.277333 97.792 0 37.674667-12.117333 70.848-36.352 99.648-24 28.693333-56.192 48-96.64 58.069333l-4.053333 1.002667v69.952h-53.802667v-68.330667l-4.522666-0.704c-47.018667-7.210667-82.858667-22.229333-107.306667-45.056-22.613333-21.12-39.786667-53.034667-51.541333-95.637333l-1.536-5.546667 70.826666-13.824 1.514667 4.373334c10.816 31.146667 23.808 53.76 38.848 67.797333 17.92 15.317333 41.301333 22.933333 70.485333 22.933333 28.352 0 52.138667-8.597333 71.296-25.728 19.050667-17.130667 28.672-39.338667 28.672-66.218666 0-24.170667-8.106667-43.776-24.064-58.453334-7.893333-6.954667-19.242667-14.570667-34.773333-23.36a541.333333 541.333333 0 0 0-48.896-23.893333l-15.786667-6.784c-42.709333-18.474667-71.168-35.413333-84.672-50.474667-23.082667-24.192-34.517333-52.8-34.517333-86.293333 0-15.808 2.688-30.528 8.106667-44.224a123.157333 123.157333 0 0 1 23.488-36.992c10.176-10.922667 22.890667-20.629333 37.994666-28.970667 14.997333-8.106667 32.384-14.570667 52.096-19.392l4.053334-1.002666V176h53.845333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icondollar1.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Icondollar1) : Icondollar1;