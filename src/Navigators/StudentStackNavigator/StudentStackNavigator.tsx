import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationConstants } from '@/Constants/navigation'
import Student from '@/Containers/Student'
import LessonsSchedule from '@/Containers/LessonsSchedule'
import Pinboard from '@/Containers/Pinboard'
import LessonDeletion from '@/Containers/LessonDeletion'
import LessonRemote from '@/Containers/LessonRemote'

const Stack = createStackNavigator()

interface Props {}

const StudentStackNavigator = (props: Props) => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={navigationConstants.student} component={Student} />
      <Stack.Screen
        name={navigationConstants.lessonsSchedule}
        component={LessonsSchedule}
      />
      <Stack.Screen
        name={navigationConstants.lessonDeletion}
        component={LessonDeletion}
      />
      <Stack.Screen
        name={navigationConstants.lessonRemote}
        component={LessonRemote}
      />
      <Stack.Screen name={navigationConstants.pinboard} component={Pinboard} />
    </Stack.Navigator>
  )
}

export default StudentStackNavigator
