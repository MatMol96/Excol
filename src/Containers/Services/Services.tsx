import FloatingDrawerButton from '@/Components/FloatingDrawerButton'
import Header from '@/Components/Header'
import ServiceCard from '@/Components/ServiceCard'
import { useTheme } from '@/Theme'
import ourServices from '@/__mocks__/data/ourServices'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { SafeAreaView, FlatList, View, Pressable } from 'react-native'
import styles from './styles'

interface Props {
  navigation: any
}

const Services = ({ navigation }: Props) => {
  const { t } = useTranslation()
  const { Layout } = useTheme()
  return (
    <SafeAreaView style={{ ...styles.container, ...Layout.fullSize }}>
      <View style={styles.headerContainer}>
        <Header title={t('ourServices.headerTitle')} />
      </View>
      <FlatList
        data={ourServices}
        renderItem={({ item }) => (
          <Pressable onPress={() => console.warn('Card pressed')}>
            <ServiceCard imageURI={item.imageUri} title={item.title} />
          </Pressable>
        )}
        style={styles.serviceList}
      />
      <FloatingDrawerButton navigation={navigation} />
    </SafeAreaView>
  )
}

export default Services
