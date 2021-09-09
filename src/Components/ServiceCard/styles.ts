import { Colors, FontSize, MetricsSizes } from '@/Theme/Variables'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderRadius: 25,
    height: 200,
    marginBottom: 25,
  },
  titleContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: MetricsSizes.regular,
    paddingVertical: MetricsSizes.tiny,
    position: 'absolute',
    bottom: 0,
  },
  title: {
    fontSize: FontSize.regular,
    color: Colors.primary,
  },
})

export default styles
