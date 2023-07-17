import React from 'react'
import { Button, View, SafeAreaView } from 'react-native'
import { Checkbox, TextInput as PaperTextInput } from 'react-native-paper'
import { Formik, useFormik, useFormikContext } from 'formik'
import { StyledContainerCheckout, StyledFormAreaCheckout, MileageDiv } from '../../../components/styles'

const FormCheckbox = ({ name, label }) => {
  const { values, setFieldValue } = useFormikContext()

  const handleChange = () => {
    setFieldValue(name, !values[name])
  }

  return (
    <Checkbox.Item
      label={label}
      status={values[name] ? 'checked' : 'unchecked'}
      onPress={handleChange}
      position="leading"
    />
  )
}

const MileageForm = () => {
  const formik = useFormik({
    initialValues: {
      mileage: '',
    },
    onSubmit: values => {
      console.log(values)
    },
  })
  return (
    <View>
      <PaperTextInput label="Mileage Out" value={formik.values.username} />

      <Button title="Submit" onPress={formik.handleSubmit} />
    </View>
  )
}

const CheckOut = () => {
  return (
    <SafeAreaView>
      <StyledContainerCheckout>
        <Formik
          initialValues={{
            checked: false,
          }}
          onSubmit={values => console.log(values)}
        >
          {({ handleSubmit }) => (
            <View>
              <StyledFormAreaCheckout>
                <MileageDiv>
                  <FormCheckbox name="checked" label="Mileage" />
                  <MileageForm />
                </MileageDiv>
              </StyledFormAreaCheckout>
              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
      </StyledContainerCheckout>
    </SafeAreaView>
  )
}

export default CheckOut
