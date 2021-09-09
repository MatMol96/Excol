import FloatingDrawerButton from '@/Components/FloatingDrawerButton'
import Header from '@/Components/Header'
import PinboardCard from '@/Components/PinboardCard'
import ToTheBottomCard from '@/Components/ToTheBottomCard'
import { useTheme } from '@/Theme'
import { Colors, FontSize } from '@/Theme/Variables'
import pinboard from '@/__mocks__/data/pinboard'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, SafeAreaView, FlatList } from 'react-native'
import styles from './styles'

interface Props {
  navigation: any
}

const Pinboard = ({ navigation }: Props) => {
  const { t } = useTranslation()
  const { Layout } = useTheme()
  return (
    <SafeAreaView style={{ ...styles.container, ...Layout.fullSize }}>
      <View style={styles.headerContainer}>
        <Header
          title={t('pinboard.headerTitle')}
          navigation={navigation}
          style={{
            title: { color: Colors.white, fontSize: FontSize.large },
            icon: { color: Colors.white, marginTop: 5 },
          }}
        />
      </View>
      <ToTheBottomCard>
        <>
          <FlatList
            data={pinboard}
            renderItem={({ item }) => <PinboardCard data={item} />}
            showsVerticalScrollIndicator={false}
          />
        </>
      </ToTheBottomCard>
      <FloatingDrawerButton navigation={navigation} color={Colors.white} />
    </SafeAreaView>
  )
}

export default Pinboard
