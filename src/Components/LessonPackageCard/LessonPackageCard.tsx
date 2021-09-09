import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

interface Props {
  data: any
}

const LessonPackageCard = ({ data }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.lessonTextContainer}>
          <View>
            <Text style={styles.text}>{data.lesson}</Text>
          </View>
          <View style={styles.counter}>
            <Text style={{ ...styles.text, fontWeight: 'bold' }}>
              {data.counter}
            </Text>
            {data.end && (
              <>
                <Text style={styles.text}>{' | '}</Text>
                <Text style={styles.text}>{data.end}</Text>
              </>
            )}
          </View>
        </View>
        {data.date && (
          <View>
            <Text style={styles.subText}>{data.date}</Text>
          </View>
        )}
      </View>
      <View style={styles.breakLine} />
    </View>
  )
}

export default LessonPackageCard
