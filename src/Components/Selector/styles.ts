import { Colors, FontSize, MetricsSizes } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'

const styles = StyleSheet.create({
  title: { color: Colors.primary, fontSize: FontSize.regular },
  description: { color: Colors.grey, fontSize: FontSize.small },
  pickerContainer: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.grey,
    overflow: 'hidden',
    padding: 0,
  },
})

export default styles
