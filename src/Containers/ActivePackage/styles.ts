import { Colors, FontSize, MetricsSizes } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingRight: 45,
    marginBottom: MetricsSizes.regular,
  },
  bodyContainer: {
    paddingHorizontal: 25,
  },
  submitContainer: {
    marginBottom: MetricsSizes.large,
  },
  infoText: {
    color: Colors.grey,
    fontSize: FontSize.regular,
  },
  gMeetLinkTitle: {
    color: Colors.primary,
    fontSize: FontSize.regular,
    fontWeight: 'bold',
  },
  gMeetLink: {
    color: Colors.primary,
    fontSize: FontSize.regular,
  },
})

export default styles
