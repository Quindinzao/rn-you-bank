import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';
const IconInvisible = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Rect width={20} height={20} fill="url(#pattern0_5_187)" />
    <Defs>
      <Pattern
        id="pattern0_5_187"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_5_187" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_5_187"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default IconInvisible;
