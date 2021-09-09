import { useTheme } from '@/Theme'
import React from 'react'
import { View, Text, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

interface Props {
  data: any
}

const PinboardCard = ({ data }: Props) => {
  const { Layout } = useTheme()
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.warn('Card pressed')}>
        <View style={{ ...Layout.rowHCenter }}>
          <View style={styles.circleContainer}>
            <Icon name="circle" size={30} style={styles.circle} />
          </View>
          <View>
            <View>
              <Text style={styles.title}>{data.title}</Text>
            </View>
            {data.subTitle && (
              <View>
                <Text style={styles.title}>{data.subTitle}</Text>
              </View>
            )}
            <View>
              <Text style={styles.fileName}>{data.fileName}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default PinboardCard
