import { Colors, FontSize, MetricsSizes } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffc4a3',
  },
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingRight: 45,
  },
  nameContainer: {
    marginTop: MetricsSizes.regular,
  },
  label: {
    fontSize: FontSize.regular,
    color: Colors.grey,
  },
  value: {
    fontSize: FontSize.regular,
    color: Colors.primary,
  },
  emailContainer: {
    marginTop: MetricsSizes.large,
  },
  basedOn: {
    fontSize: FontSize.regular,
  },
  serviceList: {
    marginTop: 25,
  },
})

export default styles
