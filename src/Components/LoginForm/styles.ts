import { Colors, FontSize, MetricsSizes } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  label: {
    color: Colors.white,
    fontSize: FontSize.regular,
    marginTop: MetricsSizes.large,
    marginBottom: MetricsSizes.small,
  },
  button: {
    marginTop: 40,
    marginHorizontal: 40,
    paddingVertical: MetricsSizes.tiny,
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  buttonTitle: {
    color: Colors.white,
    fontSize: FontSize.large,
    textAlign: 'center',
  },
  container: {},
  input: {
    backgroundColor: Colors.white,
    fontSize: FontSize.regular,
    height: 60,
    padding: MetricsSizes.small,
    borderRadius: 10,
  },
})

export default styles
