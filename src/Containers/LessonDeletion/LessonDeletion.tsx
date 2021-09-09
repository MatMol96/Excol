import Button from '@/Components/Button'
import FloatingDrawerButton from '@/Components/FloatingDrawerButton'
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
}

const LessonDeletion = ({ navigation }: Props) => {
  const { t } = useTranslation()
  const { Layout } = useTheme()
  const [discipline, setDiscipline] = useState(null)
  return (
    <SafeAreaView style={{ ...styles.container, ...Layout.fullSize }}>
      <View style={styles.headerContainer}>
        <Header
          title={t('lessonDeletion.headerTitle')}
          navigation={navigation}
          style={{ title: { color: Colors.primary, fontSize: FontSize.large } }}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.submitContainer}>
          <Text style={styles.infoText}>{t('lessonDeletion.alertInfo')}</Text>
        </View>
        <View style={styles.selector}>
          <Selector
            title={t('lessonDeletion.disciplineSelector.title')}
            selectedValue={discipline}
            setSelectedValue={setDiscipline}
            dataList={[]}
          />
        </View>
        <View style={styles.submitContainer}>
          <Button title={t('lessonDeletion.submitRequest')} />
        </View>
        <View>
          <Text style={styles.infoText}>{t('lessonDeletion.info')}</Text>
        </View>
      </View>
      <FloatingDrawerButton navigation={navigation} />
    </SafeAreaView>
  )
}

export default LessonDeletion
