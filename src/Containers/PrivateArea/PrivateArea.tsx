import FloatingDrawerButton from '@/Components/FloatingDrawerButton'
import Header from '@/Components/Header'
import { useTheme } from '@/Theme'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, SafeAreaView, TextInput, Button } from 'react-native'
import { useForm } from 'react-hook-form'
import styles from './styles'
import LoginForm from '@/Components/LoginForm'

interface Props {
  navigation: any
}

const PrivateArea = ({ navigation }: Props) => {
  const { t } = useTranslation()
  const { Layout } = useTheme()
  const useLoginForm = useForm()
  const onSubmit = (data: any) => console.log(data)
  return (
    <SafeAreaView style={{ ...styles.container, ...Layout.fullSize }}>
      <View style={styles.headerContainer}>
        <Header title={t('privateArea.headerTitle')} navigation={navigation} />
      </View>
      <View>
        <LoginForm useForm={useLoginForm} onSubmit={onSubmit} />
      </View>
      <FloatingDrawerButton navigation={navigation} />
    </SafeAreaView>
  )
}

export default PrivateArea
