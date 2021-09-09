import { Colors, FontSize, MetricsSizes } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginBottom: MetricsSizes.regular,
  },
  textContainer: {
    paddingVertical: 15,
  },
  lessonTextContainer: {
    backgroundColor: Colors.transparent,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  counter: {
    flexDirection: 'row',
  },
  text: {
    fontSize: FontSize.medium,
    color: Colors.primary,
  },
  subText: {
    fontSize: FontSize.regular,
    color: Colors.grey,
  },
  breakLine: {
    flex: 1,
    height: 2,
    backgroundColor: Colors.grey,
    width: 60,
    alignSelf: 'center',
  },
})

export default styles
