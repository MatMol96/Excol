import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useTheme } from '@/Theme'
import { useDispatch } from 'react-redux'
import InitStartup from '@/Store/Startup/Init'
import { Brand } from '@/Components'
import { Colors } from '@/Theme/Variables'

const IndexStartupContainer = () => {
  const { Layout } = useTheme()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(InitStartup.action())
  }, [dispatch])

  return (
    <View
      style={[
        Layout.fill,
        Layout.colCenter,
        { backgroundColor: Colors.primary },
      ]}
    >
      <Brand />
    </View>
  )
}

export default IndexStartupContainer
