import { StyleSheet, View, Dimensions } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const { width } = Dimensions.get('screen')

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})
