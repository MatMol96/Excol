import React from 'react'
import { View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import styles from './styles'

interface Props {
  title?: string
  dataList: {
    label: string
    value: string | number
  }[]
  description?: string
  selectedValue: any
  setSelectedValue: (itemValue: any) => void
}

const Selector = ({
  title,
  dataList,
  description,
  selectedValue,
  setSelectedValue,
}: Props) => {
  return (
    <View>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          {dataList.map(item => (
            <Picker.Item label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  )
}

export default Selector
