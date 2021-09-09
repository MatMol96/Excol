import React, { ReactElement } from 'react'
import { View } from 'react-native'
import styles from './styles'

interface Props {
  children: ReactElement
}

const ToTheBottomCard = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>
}

export default ToTheBottomCard
