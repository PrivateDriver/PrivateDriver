import React from 'react';
import { View, Button } from 'react-native';
import { Formik, FormikProps } from 'formik';
import { TextInput, Text, HelperText } from 'react-native-paper';
import * as yup from 'yup';

interface FormValues {
  textValue: string;
}

const validationSchema = yup.object().shape({
  textValue: yup
    .number()
    .typeError('Must be a number type') // Validates for numerical value
    .positive('Must be a positive value') // Validates against negative values
    .required('Please enter mileage. The field cannot be left blank.') // Sets it as a compulsory field
    .min(1000, 'Please check mileage as it appears on dashboard.'), // Sets a minimum value
});

const CheckinForm: React.FC = () => {
  const [isTyping, setIsTyping] = React.useState<boolean>(false);

  return (
    <Formik
      initialValues={{ textValue: '' }}
      validationSchema={validationSchema}
      onSubmit={(values: FormValues) => {
        // Handle form submission
        console.log(values);
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }: FormikProps<FormValues>) => (
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
          <HelperText type="error" visible={touched.textValue && !!errors.textValue}>
            {errors.textValue}
          </HelperText>
          {touched.textValue && errors.textValue && <Text style={{ color: 'red' }}>{errors.textValue}</Text>}
          <Button title="Submit" onPress={() => handleSubmit()} />
        </View>
      )}
    </Formik>
  );
};

export default CheckinForm;