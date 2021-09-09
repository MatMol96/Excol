import React from 'react'
import { View, Image } from 'react-native'
import { useTheme } from '@/Theme'

interface Props {
  height?: number | string
  width?: number | string
  mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center'
}

const Brand = ({ height, width, mode }: Props) => {
  const { Layout, Images } = useTheme()

  return (
    <View style={{ height, width }}>
      <Image
        style={Layout.fullSize}
        source={Images.splashScreenLogo2x}
        resizeMode={mode}
      />
    </View>
  )
}

Brand.defaultProps = {
  height: 300,
  mode: 'contain',
  width: 300,
}

export default Brand
