import Button from '@/Components/Button'
import FloatingDrawerButton from '@/Components/FloatingDrawerButton'
import GMeetCard from '@/Components/GMeetCard'
import Header from '@/Components/Header'
import Selector from '@/Components/Selector/Selector'
import { useTheme } from '@/Theme'
import { Colors, FontSize } from '@/Theme/Variables'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View, SafeAreaView, Text } from 'react-native'
import styles from './styles'

interface Props {
  navigation: any
  route: any
}

const LessonRemote = ({ navigation, route }: Props) => {
  const { t } = useTranslation()
  const { Layout } = useTheme()
  const [discipline, setDiscipline] = useState(null)
  return (
    <SafeAreaView style={{ ...styles.container, ...Layout.fullSize }}>
      <View style={styles.headerContainer}>
        <Header
          title={t('lessonRemote.headerTitle')}
          navigation={navigation}
          style={{ title: { color: Colors.primary, fontSize: FontSize.large } }}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.submitContainer}>
          <Text style={styles.infoText}>{route.params.professor}</Text>
        </View>
        <View style={{ marginBottom: 25 }}>
          <GMeetCard onPress={() => null} />
        </View>
        <View>
          <Text style={styles.gMeetLinkTitle}>
            {t('lessonRemote.gMeetLink')}
          </Text>
          <Text style={styles.gMeetLink}>{route.params?.meetLink}</Text>
        </View>
      </View>
      <FloatingDrawerButton navigation={navigation} />
    </SafeAreaView>
  )
}

export default LessonRemote
