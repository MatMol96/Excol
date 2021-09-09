import FloatingDrawerButton from '@/Components/FloatingDrawerButton'
import Header from '@/Components/Header'
import ToTheBottomCard from '@/Components/ToTheBottomCard'
import { useTheme } from '@/Theme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, SafeAreaView } from 'react-native'
import { Avatar } from 'react-native-paper'
import styles from './styles'

interface Props {
  navigation: any
}

const Account = ({ navigation }: Props) => {
  const { t } = useTranslation()
  const { Layout } = useTheme()
  return (
    <SafeAreaView style={{ ...styles.container, ...Layout.fullSize }}>
      <View style={styles.headerContainer}>
        <Header title={t('account.headerTitle')} navigation={navigation} />
      </View>
      <ToTheBottomCard>
        <>
          <View style={{ ...Layout.rowVCenter }}>
            <Avatar.Image
              source={{
                uri: 'https://www.excol.net/wp-content/uploads/2017/07/cropped-LOGO-EXCOL-2013.jpg',
              }}
              size={200}
            />
          </View>
          <View style={{ ...Layout.rowVCenter, ...styles.nameContainer }}>
            <Text style={styles.value}>Nome Cognome</Text>
          </View>
          <View style={{ ...styles.emailContainer }}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>nomecognome@gmail.com</Text>
          </View>
        </>
      </ToTheBottomCard>
      <FloatingDrawerButton navigation={navigation} />
    </SafeAreaView>
  )
}

export default Account
