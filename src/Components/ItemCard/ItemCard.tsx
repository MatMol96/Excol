import { Colors } from '@/Theme/Variables'
import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

interface Props {
  title: string
  backgroundColor?: string
}

const ItemCard = ({ title, backgroundColor = Colors.primary }: Props) => {
  return (
    <View style={{ ...styles.container, backgroundColor: backgroundColor }}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default ItemCard
