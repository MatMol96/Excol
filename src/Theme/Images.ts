import { ThemeImages, ThemeVariables } from '@/Theme/theme.type'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({}: ThemeVariables): ThemeImages {
  return {
    splashScreenLogo: require('@/Assets/Images/splash-screen-logo.png'),
    splashScreenLogo2x: require('@/Assets/Images/splash-screen-logo-2x.png'),
    googleMeetIcon: require('@/Assets/Images/Icons/google-meet-icon.png'),
    avatarLogo: require('@/Assets/Images/avatar-logo.png'),
  }
}
