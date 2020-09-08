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

const Iconkuaidiwuliu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 149.333333c52.202667 0 101.824 11.029333 146.666667 30.869334a140.330667 140.330667 0 0 0-18.432 61.994666 296 296 0 0 0-65.941334-22.357333 447.914667 447.914667 0 0 1 69.098667 108.437333h16.874667c10.133333 20.373333 23.893333 41.002667 40.917333 61.781334l1.877333 2.261333h-36.565333c7.808 28.224 12.928 57.536 15.04 87.68h127.445333c-0.853333-7.914667-2.005333-15.744-3.456-23.466667l11.349334-9.536 5.994666-5.312 9.024-8.362666c9.344-8.896 18.346667-18.176 26.922667-27.733334C869.12 439.232 874.666667 474.965333 874.666667 512c0 65.536-17.386667 126.997333-47.786667 180.053333v1.28h-0.746667C763.413333 801.770667 646.229333 874.666667 512 874.666667c-200.298667 0-362.666667-162.368-362.666667-362.666667S311.701333 149.333333 512 149.333333z m237.312 544.021334h-104.874667a448.277333 448.277333 0 0 1-70.144 110.805333 298.730667 298.730667 0 0 0 175.018667-110.805333z m-369.749333 0h-104.874667a298.709333 298.709333 0 0 0 175.018667 110.805333 447.914667 447.914667 0 0 1-70.144-110.805333z m193.664 0h-122.453334A385.173333 385.173333 0 0 0 512 777.578667a384.256 384.256 0 0 0 61.226667-84.224z m235.733333-149.333334h-127.424a446.826667 446.826667 0 0 1-14.4 85.333334h119.594667a296.746667 296.746667 0 0 0 22.229333-85.333334z m-466.496 0H215.04a296.746667 296.746667 0 0 0 22.229333 85.333334h119.594667a446.826667 446.826667 0 0 1-14.4-85.333334z m274.88 0h-210.688a382.293333 382.293333 0 0 0 16.938667 85.333334h176.810666c8.746667-27.242667 14.506667-55.829333 16.938667-85.333334z m-402.325333-64h127.445333c2.133333-30.165333 7.253333-59.52 15.04-87.722666l-119.210667-0.021334a296.725333 296.725333 0 0 0-23.253333 87.722667z m191.637333 0h210.688c-2.496-30.378667-8.533333-59.733333-17.706667-87.701333h-175.274666a382.250667 382.250667 0 0 0-17.706667 87.68zM786.666667 149.333333c57.429333 0 104 45.248 104 101.077334l-0.064 3.562666c-1.28 33.386667-20.288 70.954667-51.477334 109.056a438.997333 438.997333 0 0 1-52.458666 53.653334 392.704 392.704 0 0 1-15.786667-14.250667 438.997333 438.997333 0 0 1-36.693333-39.402667c-31.168-38.101333-50.154667-75.669333-51.456-109.056a92.586667 92.586667 0 0 1-0.064-3.562666C682.666667 194.56 729.237333 149.333333 786.666667 149.333333z m-336.981334 70.506667l-2.602666 0.576a298.709333 298.709333 0 0 0-170.581334 107.882667h104.106667a448.32 448.32 0 0 1 69.077333-108.458667zM512 246.4l-4.693333 4.970667a385.109333 385.109333 0 0 0-55.253334 76.928l119.893334-0.021334A385.216 385.216 0 0 0 512 246.4z m274.666667-22.784a29.717333 29.717333 0 1 0 0 59.434667 29.717333 29.717333 0 0 0 0-59.434667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconkuaidiwuliu.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(Iconkuaidiwuliu) : Iconkuaidiwuliu;