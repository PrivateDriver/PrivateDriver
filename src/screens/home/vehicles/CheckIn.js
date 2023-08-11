import React from 'react'
import { View, Button } from 'react-native'
import { useFormik } from 'formik'
import { Checkbox, TextInput as PaperTextInput } from 'react-native-paper'
import { useTheme } from 'react-native-paper'
import { Colors } from 'react-native-paper'
import * as yup from 'yup' // Import yup
import { object, string, number, date, InferType } from 'yup'

const { primary, secondary, tertiary, darkLight, brand } = Colors

// Define the validation schema using yup
const validationSchema = yup.object().shape({
  mileage: yup.number().required('Mileage is required').min(0, 'Mileage must be non-negative'),
  agreement: yup.boolean().oneOf([true], 'You must agree to the terms'),
})

const CheckInForm = () => {
  const formik = useFormik({
    initialValues: {
      mileage: '',
      agreement: true,
    },
    validationSchema, // Use the validation schema here
    onSubmit: values => {
      console.log(values)
    },
  })

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox
          position="leading"
          status={formik.values.agreement ? 'checked' : 'unchecked'}
          onPress={() => formik.setFieldValue('agreement', !formik.values.agreement)}
        />
        <PaperTextInput
          style={{ flex: 1, margin: 8 }}
          label="Mileage"
          value={formik.values.mileage}
          onChangeText={formik.handleChange('mileage')}
          onBlur={formik.handleBlur('mileage')}
        />
      </View>
      {formik.errors.mileage && <Text style={{ color: 'red' }}>{formik.errors.mileage}</Text>}
      <Button title="Submit" onPress={formik.handleSubmit} />
    </View>
  )
}

export default function CheckIn() {
  const theme = useTheme()
  return (
    <View theme={theme}>
      <CheckInForm />
    </View>
  )
}
