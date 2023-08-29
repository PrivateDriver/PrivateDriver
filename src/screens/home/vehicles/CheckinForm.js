import React from 'react'
import { View, Button } from 'react-native'
import { Formik } from 'formik'
import { TextInput, Text, HelperText } from 'react-native-paper'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  textValue: yup
    .number('Must be a number type') // Validates for numerical value
    .positive('Must be a positive value') // Validates against negative values
    .required('Please enter milage. The field cannot be left blank.') // Sets it as a compulsory field
    .min(1000, 'Please check milage as it appears on dashboard.'), // Sets a minimum value});
})

const CheckinForm = () => {
  const [isTyping, setIsTyping] = React.useState(false)

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
            onBlur={() => setIsTyping(false)}
            onFocus={() => setIsTyping(true)}
            left={<TextInput.Icon name="check" color={isTyping ? 'green' : 'transparent'} />}
            error={touched.textValue && !!errors.textValue}
          />
          <HelperText type="error" visible={touched.textField && errors.textField}>
            {errors.textField}
          </HelperText>
          {touched.textValue && errors.textValue && <Text style={{ color: 'red' }}>{errors.textValue}</Text>}
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  )
}

export default CheckinForm
