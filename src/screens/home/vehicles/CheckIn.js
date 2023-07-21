import React from 'react'
import { View, TextInput, Button } from 'react-native'
import { useFormik } from 'formik'
import { Checkbox, TextInput as PaperTextInput } from 'react-native-paper'
import { useTheme } from 'react-native-paper'
import { Colors } from 'react-native-paper'

const { primary, secondary, tertiary, darkLight, brand } = Colors

const CheckInForm = () => {
  const formik = useFormik({
    initialValues: {
      mileage: '',
      agreement: true,
    },
    onSubmit: values => {
      console.log(values)
    },
    // validationSchema: YOUR_VALIDATION_SCHEMA, // Define your validation schema here if needed
  })

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox
          position="leading"
          status={formik.values.mileage ? 'checked' : 'unchecked'}
          onPress={() => formik.setFieldValue('agreement', !formik.values.agreement)}
        />
        <PaperTextInput
          style={{ flex: 1 }}
          label="Mileage"
          value={formik.values.mileage}
          onChangeText={formik.handleChange('mileage')}
          onBlur={formik.handleBlur('mileage')}
        />
      </View>

      <Button title="Submit" onPress={formik.handleSubmit} />
    </View>
  )
}

export default function CheckIn() {
  const theme = useTheme()
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <CheckInForm />
    </View>
  )
}
