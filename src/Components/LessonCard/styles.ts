import { Colors, FontSize, MetricsSizes } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 25,
    overflow: 'hidden',
    paddingVertical: 15,
    paddingLeft: 15,
    marginBottom: MetricsSizes.regular,
  },
  timeContainer: {
    marginRight: MetricsSizes.large,
  },
  time: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: FontSize.small,
  },
  lesson: {
    fontSize: FontSize.regular,
    color: Colors.white,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  professor: {
    color: Colors.white,
  },
  iconButton: {
    //height: '100%',
    width: MetricsSizes.large,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(1,1,1,0.3)',
  },
  icon: { color: Colors.white, alignSelf: 'center' },
  goToLesson: {
    backgroundColor: Colors.white,
    marginBottom: MetricsSizes.regular,
  },
})

export default styles
