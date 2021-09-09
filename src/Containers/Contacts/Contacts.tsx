import ContactCard from '@/Components/ContactCard'
import FloatingDrawerButton from '@/Components/FloatingDrawerButton'
import Header from '@/Components/Header'
import ToTheBottomCard from '@/Components/ToTheBottomCard'
import { useTheme } from '@/Theme'
import ourContacts from '@/__mocks__/data/ourContacts'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import styles from './styles'

interface Props {
  navigation: any
}

const Contacts = ({ navigation }: Props) => {
  const { t } = useTranslation()
  const { Layout } = useTheme()
  return (
    <SafeAreaView style={{ ...styles.container, ...Layout.fullSize }}>
      <View style={styles.headerContainer}>
        <Header title={t('ourContacts.headerTitle')} navigation={navigation} />
      </View>
      <ToTheBottomCard>
        <>
          <Text style={styles.basedOn}>{`${t('ourContacts.basedOn')} :`}</Text>
          <FlatList
            data={ourContacts}
            renderItem={({ item }) => <ContactCard {...item} />}
            style={styles.serviceList}
          />
        </>
      </ToTheBottomCard>
      <FloatingDrawerButton navigation={navigation} />
    </SafeAreaView>
  )
}

export default Contacts
