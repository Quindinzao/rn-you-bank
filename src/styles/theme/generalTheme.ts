import { Platform } from 'react-native';

const ios = Platform.OS === 'ios';

export const generalTheme = {
  borderRadii: '2px',
  fontFamily: {
    nunitoRegular: ios ? 'Nunito Regular' : 'Nunito-Regular',
    nunitoMedium: ios ? 'Nunito Medium' : 'Nunito-Medium',
    nunitoSemiBold: ios ? 'Nunito SemiBold' : 'Nunito-SemiBold',
    nunitoBold: ios ? 'Nunito Bold' : 'Nunito-SemiBold',
  },
};
