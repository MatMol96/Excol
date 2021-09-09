import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationConstants } from '@/Constants/navigation'
import LessonsSchedule from '@/Containers/LessonsSchedule'
import Support from '@/Containers/Support'
import LessonBooking from '@/Containers/LessonBooking'
import LessonDeletion from '@/Containers/LessonDeletion'
import LessonRemote from '@/Containers/LessonRemote'
import Pinboard from '@/Containers/Pinboard'
import Report from '@/Containers/Report'
import HourCount from '@/Containers/HourCount'
import ActivePackage from '@/Containers/ActivePackage'
import WarningNote from '@/Containers/WarningNote'

const Stack = createStackNavigator()

interface Props {}

const SupportStackNavigator = (props: Props) => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={navigationConstants.support} component={Support} />
      <Stack.Screen
        name={navigationConstants.lessonsSchedule}
        component={LessonsSchedule}
      />
      <Stack.Screen
        name={navigationConstants.lessonBooking}
        component={LessonBooking}
      />
      <Stack.Screen
        name={navigationConstants.lessonDeletion}
        component={LessonDeletion}
      />
      <Stack.Screen
        name={navigationConstants.lessonRemote}
        component={LessonRemote}
      />
      <Stack.Screen name={navigationConstants.report} component={Report} />
      <Stack.Screen
        name={navigationConstants.hourCount}
        component={HourCount}
      />
      <Stack.Screen
        name={navigationConstants.activePackage}
        component={ActivePackage}
      />
      <Stack.Screen
        name={navigationConstants.warningNote}
        component={WarningNote}
      />
      <Stack.Screen name={navigationConstants.pinboard} component={Pinboard} />
    </Stack.Navigator>
  )
}

export default SupportStackNavigator
