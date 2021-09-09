import FloatingDrawerButton from '@/Components/FloatingDrawerButton'
import Header from '@/Components/Header'
import ItemCard from '@/Components/ItemCard'
import ToTheBottomCard from '@/Components/ToTheBottomCard'
import { useTheme } from '@/Theme'
import { Colors, FontSize } from '@/Theme/Variables'
import supports from '@/__mocks__/data/supports'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, SafeAreaView, FlatList, Pressable } from 'react-native'
import styles from './styles'

interface Props {
  navigation: any
}

const Support = ({ navigation }: Props) => {
  const { t } = useTranslation()
  const { Layout } = useTheme()
  return (
    <SafeAreaView style={{ ...styles.container, ...Layout.fullSize }}>
      <View style={styles.headerContainer}>
        <Header
          title={t('support.headerTitle')}
          navigation={navigation}
          style={{ title: { color: Colors.primary, fontSize: FontSize.large } }}
        />
      </View>
      <ToTheBottomCard>
        <>
          <FlatList
            data={supports}
            renderItem={({ item }) => (
              <Pressable onPress={() => navigation.navigate(item.navigateTo)}>
                <ItemCard title={item.title} />
              </Pressable>
            )}
            showsVerticalScrollIndicator={false}
          />
        </>
      </ToTheBottomCard>
      <FloatingDrawerButton navigation={navigation} />
    </SafeAreaView>
  )
}

export default Support
