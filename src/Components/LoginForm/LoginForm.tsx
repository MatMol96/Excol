import React from 'react'
import { View, Text, TextInput, Button, Pressable } from 'react-native'
import { Controller } from 'react-hook-form'
import styles from './styles'
import { useTranslation } from 'react-i18next'

interface Props {
  useForm: any
  onSubmit: (data: any) => void
}

const LoginForm = ({ useForm, onSubmit }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm
  const { t } = useTranslation()
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t('privateArea.username')}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="username"
        rules={{ required: true }}
      />
      <Text style={styles.label}>{t('privateArea.password')}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{ required: true }}
      />

      <View>
        <Button
          title={t('privateArea.login')}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  )
}

export default LoginForm
