import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Welcome Screen</Text>

      {/* Image */}
      <Image
       source={require('../../assets/home.png')}


        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>Discover Your Dream Job here</Text>
      
      <Text style={styles.subtitle}>
        Explore all the existing job roles based on your interest and study major
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#000',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
  buttonLogin: {
    backgroundColor: '#3B6E9E', 
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  buttonRegister: {
    backgroundColor: '#D5E8F3', 
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3B6E9E', 
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
