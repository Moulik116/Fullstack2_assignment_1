import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';

interface FormData {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login here</Text>
      <Text style={styles.subtitle}>Welcome back you’ve been missed!</Text>
      
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={(values: FormData) => {

          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholderTextColor="#A5A5A5" 
            />
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              placeholderTextColor="#A5A5A5" 
            />
            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>

            <Text onPress={() => navigation.navigate('ForgotPassword')} style={styles.link}>Forgot your password?</Text>
            <Text onPress={()=> navigation.navigate('Register')}style={styles.createAccount}>Create new account</Text>

            <View style={styles.socialContainer}>
              <Text style={styles.orText}>Or continue with</Text>
              <View style={styles.socialButtons}>
                <TouchableOpacity style={styles.socialButton}><Text>G</Text></TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}><Text>F</Text></TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}><Text>A</Text></TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 8, 
    color: '#3B6E9E' 
  },
  subtitle: { 
    fontSize: 16, 
    color: '#666', 
    marginBottom: 24 
  },
  formContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 12, 
    marginBottom: 12, 
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  errorText: { 
    color: 'red', 
    marginBottom: 8 
  },
  button: { 
    backgroundColor: '#3B6E9E',
    padding: 15, 
    alignItems: 'center', 
    borderRadius: 5,
  },
  buttonText: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  link: { 
    color: '#3B6E9E', 
    marginTop: 8, 
    textAlign: 'center' 
  },
  createAccount: { 
    color: '#3B6E9E', 
    textAlign: 'center',
    marginTop: 12
  },
  socialContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  orText: {
    marginBottom: 10,
    color: '#666',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  socialButton: {
    width: 40,
    height: 40,
    backgroundColor: '#D5E8F3', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 5,
  },
});

export default LoginScreen;
