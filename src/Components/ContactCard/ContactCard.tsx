import { useTheme } from '@/Theme'
import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

interface Props {
  location: string
  address: string
  phone: string
  fax: string
  email: string
}

const ContactCard = ({ location, address, phone, fax, email }: Props) => {
  const { Layout } = useTheme()
  return (
    <View style={{ ...Layout.fullWidth, ...styles.card }}>
      <View style={{ ...styles.textContainer, ...Layout.fullWidth }}>
        <Text style={styles.text}>{location}</Text>
        <Text style={styles.text}>{address}</Text>
        <Text style={styles.text}>{`tel ${phone}`}</Text>
        <Text style={styles.text}>{`fax ${fax}`}</Text>
        <Text style={styles.text}>{email}</Text>
      </View>
      <View>
        <Icon name="google-maps" size={50} />
      </View>
    </View>
  )
}

export default ContactCard
