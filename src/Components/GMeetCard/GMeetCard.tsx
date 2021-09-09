import { useTheme } from '@/Theme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, Pressable, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

interface Props {
  onPress?: () => void
}

const GMeetCard = ({ onPress }: Props) => {
  const { t } = useTranslation()
  const { Layout, Images } = useTheme()

  const onPressCard = () => {
    onPress && onPress()
  }

  return (
    <Pressable onPress={onPressCard}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={Images.googleMeetIcon}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{t('gMeetCard.joinToLesson')}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default GMeetCard
