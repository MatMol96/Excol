import { FontSize } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    marginBottom: 25,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textContainer: {
    flexShrink: 1,
  },
  text: {
    flexShrink: 1,
    fontSize: FontSize.regular,
  },
})

export default styles
