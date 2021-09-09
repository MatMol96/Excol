import FloatingDrawerButton from '@/Components/FloatingDrawerButton'
import Header from '@/Components/Header'
import LessonPackageCard from '@/Components/LessonPackageCard'
import { useTheme } from '@/Theme'
import { Colors, FontSize } from '@/Theme/Variables'
import activePackages from '@/__mocks__/data/activePackages'
import warningNotes from '@/__mocks__/data/warningNotes'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, SafeAreaView, FlatList } from 'react-native'
import styles from './styles'

interface Props {
  navigation: any
  route: any
}

const WarningNote = ({ navigation }: Props) => {
  const { t } = useTranslation()
  const { Layout } = useTheme()
  return (
    <SafeAreaView style={{ ...styles.container, ...Layout.fullSize }}>
      <View style={styles.headerContainer}>
        <Header
          title={t('warningNote.headerTitle')}
          navigation={navigation}
          style={{ title: { color: Colors.primary, fontSize: FontSize.large } }}
        />
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          data={warningNotes}
          renderItem={({ item }) => <LessonPackageCard data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <FloatingDrawerButton navigation={navigation} />
    </SafeAreaView>
  )
}

export default WarningNote
