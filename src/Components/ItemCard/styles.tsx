import { Colors, FontSize, MetricsSizes } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    marginVertical: MetricsSizes.regular,
    paddingVertical: MetricsSizes.regular,
    paddingHorizontal: MetricsSizes.regular,
  },
  text: {
    color: Colors.white,
    fontSize: FontSize.large,
  },
})

export default styles
