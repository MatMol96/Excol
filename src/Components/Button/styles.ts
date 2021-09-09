import { Colors, FontSize, MetricsSizes } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
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
})

export default styles
