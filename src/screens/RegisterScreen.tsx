import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

interface FormData {
  fullName: string;
  phone: string;
}

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();

  const registerValidationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    phone: Yup.string().required('Phone number is required'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Formik
        initialValues={{ fullName: '', phone: '' }}
        validationSchema={registerValidationSchema}
        onSubmit={(values: FormData) => {
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value={values.fullName}
            />
            {touched.fullName && errors.fullName && <Text style={styles.errorText}>{errors.fullName}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Phone"
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              keyboardType="phone-pad"
            />
            {touched.phone && errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

            <Button onPress={handleSubmit} title="Register" />
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

export default RegisterScreen;
