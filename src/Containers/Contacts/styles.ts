import { Colors, FontSize } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e3b505',
  },
  headerContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    paddingRight: 45,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 25,
    paddingTop: 40,
  },
  basedOn: {
    fontSize: FontSize.regular,
  },
  serviceList: {
    marginTop: 25,
  },
})

export default styles
