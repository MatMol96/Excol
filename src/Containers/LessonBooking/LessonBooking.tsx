import Button from '@/Components/Button'
import FloatingDrawerButton from '@/Components/FloatingDrawerButton'
import Header from '@/Components/Header'
import Selector from '@/Components/Selector/Selector'
import { useTheme } from '@/Theme'
import { Colors, FontSize } from '@/Theme/Variables'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View, SafeAreaView, Pressable, Text } from 'react-native'
import styles from './styles'

interface Props {
  navigation: any
}

const LessonBooking = ({ navigation }: Props) => {
  const { t } = useTranslation()
  const { Layout } = useTheme()
  const [discipline, setDiscipline] = useState(null)
  const [availability, setAvailability] = useState(null)
  const [mode, setMode] = useState(null)
  return (
    <SafeAreaView style={{ ...styles.container, ...Layout.fullSize }}>
      <View style={styles.headerContainer}>
        <Header
          title={t('lessonBooking.headerTitle')}
          navigation={navigation}
          style={{ title: { color: Colors.primary, fontSize: FontSize.large } }}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.selector}>
          <Selector
            title={t('lessonBooking.disciplineSelector.title')}
            selectedValue={discipline}
            setSelectedValue={setDiscipline}
            dataList={[]}
          />
        </View>
        <View style={styles.selector}>
          <Selector
            title={t('lessonBooking.availabilitySelector.title')}
            description={t('lessonBooking.availabilitySelector.description')}
            selectedValue={availability}
            setSelectedValue={setAvailability}
            dataList={[]}
          />
        </View>
        <View style={styles.selector}>
          <Selector
            title={t('lessonBooking.modeSelector.title')}
            selectedValue={mode}
            setSelectedValue={setMode}
            dataList={[]}
          />
        </View>
        <View style={styles.submitContainer}>
          <Button title={t('lessonBooking.submitRequest')} />
        </View>
        <View>
          <Text style={styles.infoText}>{t('lessonBooking.info')}</Text>
        </View>
      </View>
      <FloatingDrawerButton navigation={navigation} />
    </SafeAreaView>
  )
}

export default LessonBooking
