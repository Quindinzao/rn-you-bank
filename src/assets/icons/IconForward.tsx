import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image, SvgProps } from 'react-native-svg';
const IconForward = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    {...props}
  >
    <Rect width={32} height={32} fill="url(#pattern0_107_229)" />
    <Defs>
      <Pattern
        id="pattern0_107_229"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_107_229" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_107_229"
        width={96}
        height={96}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABtUlEQVR4nO3dz2pTURSF8fjnTcTaoVRKfeaORCl0pk+Ss1ZOCk40QqFaOjglGBCEkAx6s2j294MMOjvsb3MzOemdzQAAAAAAAGoaY7xIn6Gk1tp7Sde2f9u+t/2ltXaaPlel4d/aHv99Vr33i/T5jp7+bv7Y8vlFhAmNMV5uHjvbAhBhapLudgQgwsQBPu0RgAhTsf1m/YVLhCBJZ5J+7BuhtfYxed6jJCLkiQh5IkKeiJAnIuSJCHkiQp6IkCci5IkIeSJCnoiQJyLkiQh5IkKeiJAnIuSJCHkiQp6IkCci5IkIeSJCnoiQJyLk9d4v1jfr9ryBt1oulyfpM1ePcJk+b/XH0ff0WY+S7Q+2f+4KIOkmfdaj03kEPZvhr/gSDjx2+DXOBBh+kNl8hl+S2XyGX5LZfIZfktl8hl+S2XyGX5LZfIZfktl8hl+S2XyGX5LZfIZfktl8hl+S2XyGX5LZfIZf0nw+f8e/Lg6yfcV1wZAxxqvNK0u4qxkK8FrSAxdlgyR945Zy0GKxON/yGhNe4nPgCF83j6M/kj733t8e7AD496W8frHP5k8AAAAAAADMntQjuQsxPinb2g4AAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);
export default IconForward;
