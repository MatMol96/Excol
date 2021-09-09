import React from 'react'
import { Text, Pressable, StyleProp, TextStyle } from 'react-native'
import styles from './styles'

interface Props {
  onPress?: () => void
  title: string
  style?: {
    fontSize?: StyleProp<any>
  }
  pressableStyle?: {
    backgroundColor?: StyleProp<any>
    marginTop?: StyleProp<any>
    paddingVertical?: StyleProp<any>
  }
}

const Button = ({ onPress, title, style, pressableStyle }: Props) => {
  return (
    <Pressable
      style={{ ...styles.button, ...pressableStyle }}
      onPress={onPress}
    >
      <Text style={{ ...styles.buttonTitle, ...style }}>{title}</Text>
    </Pressable>
  )
}

export default Button
