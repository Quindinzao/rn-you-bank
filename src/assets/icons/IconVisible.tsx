import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';
const IconVisible = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Rect width={20} height={20} fill="url(#pattern0_5_184)" />
    <Defs>
      <Pattern
        id="pattern0_5_184"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_5_184" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_5_184"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default IconVisible;
