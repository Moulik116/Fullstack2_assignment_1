import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface FormData {
  email: string;
}

const ForgotPasswordScreen: React.FC = () => {
  const forgotPasswordValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={forgotPasswordValidationSchema}
        onSubmit={(values: FormData) => {

          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <Button onPress={handleSubmit} title="Reset Password" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 12 },
  errorText: { color: 'red', marginBottom: 8 },
});

export default ForgotPasswordScreen;
