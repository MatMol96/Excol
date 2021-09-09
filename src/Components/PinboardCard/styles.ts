import { Colors, FontSize, MetricsSizes } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginBottom: MetricsSizes.regular,
  },
  circleContainer: {
    marginRight: MetricsSizes.regular,
  },
  circle: {
    color: Colors.primary,
  },
  title: {
    color: Colors.primary,
    fontSize: FontSize.regular,
  },
  fileName: {
    color: Colors.grey,
    fontSize: FontSize.small,
  },
})

export default styles
