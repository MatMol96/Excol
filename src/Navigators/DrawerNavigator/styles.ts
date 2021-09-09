import { Colors, FontSize } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  content: {
    flex: 1,
  },
  logoSection: {
    marginVertical: 10,
  },
  section: {
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
  },
  drawerItemLabel: {
    fontSize: FontSize.regular,
    color: Colors.white,
  },
  bottomSection: {
    borderTopColor: Colors.lightgrey,
    borderTopWidth: 1,
  },
})

export default styles
