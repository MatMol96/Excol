import React from 'react'
import { View, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import styles from './styles'

interface Props {
  navigation: any
  color?: string
}

const FloatingDrawerButton = ({
  navigation,
  color = Colors.primary,
}: Props) => {
  return (
    <View style={styles.iconContainer}>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Icon
          name="menu"
          size={45}
          style={{ ...styles.icon, ...{ color: color } }}
        />
      </Pressable>
    </View>
  )
}

export default FloatingDrawerButton
