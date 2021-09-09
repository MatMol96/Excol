import { Colors, FontSize, MetricsSizes } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingRight: 45,
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: MetricsSizes.regular,
  },
  fullDate: {
    color: Colors.grey,
    fontSize: FontSize.regular,
  },
  listTitle: {
    color: Colors.white,
    fontSize: FontSize.regular,
    marginBottom: MetricsSizes.large,
  },
  modalContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: MetricsSizes.regular,
    paddingVertical: MetricsSizes.large,
    backgroundColor: Colors.primary,
  },
  modalLessonTitle: {
    fontSize: FontSize.large,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: MetricsSizes.regular,
  },
})

export default styles
