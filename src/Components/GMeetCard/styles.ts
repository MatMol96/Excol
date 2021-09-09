import { Colors, FontSize, MetricsSizes } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: Colors.lightGreen,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    overflow: 'hidden',
    paddingVertical: 15,
    paddingHorizontal: 15,
    paddingLeft: 15,
    marginBottom: MetricsSizes.regular,
  },
  iconContainer: {
    marginRight: MetricsSizes.large,
  },
  icon: {
    width: 50,
    height: 50,
  },
  textContainer: {
    flexShrink: 1,
  },
  text: {
    fontSize: FontSize.regular,
    color: Colors.primary,
  },
})

export default styles
