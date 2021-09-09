import { useTheme } from '@/Theme'
import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'
import styles from './styles'

interface Props {
  imageURI: string
  title: string
}

const ServiceCard = ({ imageURI, title }: Props) => {
  const { Layout } = useTheme()

  return (
    <View style={{ ...Layout.fullWidth, ...styles.card }}>
      <ImageBackground
        style={{ ...Layout.fullSize }}
        source={{
          uri: imageURI,
        }}
      >
        <View style={{ ...styles.titleContainer, ...Layout.fullWidth }}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default ServiceCard
