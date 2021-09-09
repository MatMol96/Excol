import React from 'react'
import { View, Text, Pressable, StyleProp } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import styles from './styles'

interface Props {
  title: string
  navigation?: any
  style?: {
    title?: StyleProp<any>
    icon?: StyleProp<any>
  }
}

const Header = ({ title, navigation, style }: Props) => {
  const customStyles = { ...styles, ...style }
  return (
    <View>
      {navigation && (
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={45} style={customStyles.icon} />
        </Pressable>
      )}
      <Text style={customStyles.title}>{title}</Text>
    </View>
  )
}

export default Header
