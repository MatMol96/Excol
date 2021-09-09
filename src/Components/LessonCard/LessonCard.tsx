import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

interface Props {
  data: any
  onPress?: () => void
  setSelected?: (data: any) => void
}

const LessonCard = ({ data, onPress, setSelected }: Props) => {
  const { t } = useTranslation()
  const [showPopup, setShowPopup] = useState(false)

  const onPressCard = () => {
    setSelected && setSelected(data)
    onPress && onPress()
  }

  return (
    <Pressable onPress={onPressCard}>
      <View style={{ ...styles.container, backgroundColor: data.bgColor }}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{data.startTime}</Text>
          <Text style={styles.time}>{data.endTime}</Text>
        </View>
        <View>
          <Text style={styles.lesson}>{data.lesson}</Text>
          <Text style={styles.professor}>{data.professor}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default LessonCard
