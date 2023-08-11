import React from 'react'
import { View, Button } from 'react-native'
import { Formik } from 'formik'
import { TextInput } from 'react-native-paper'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  textValue: yup.string().required('This field is required'),
})

const CheckoutForm = () => {
  return (
    <Formik
      initialValues={{ textValue: '' }}
      validationSchema={validationSchema}
      onSubmit={values => {
        // Handle form submission
        console.log(values)
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View>
          <TextInput
            label="Text Input"
            value={values.textValue}
            onChangeText={handleChange('textValue')}
            left={
              <TextInput.Icon name="check" color={touched.textValue && !errors.textValue ? 'green' : 'transparent'} />
            }
            error={touched.textValue && !!errors.textValue}
          />
          {touched.textValue && errors.textValue && <Text style={{ color: 'red' }}>{errors.textValue}</Text>}
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  )
}

export default CheckoutForm
