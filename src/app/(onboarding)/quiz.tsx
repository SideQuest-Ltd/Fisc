import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../constants/colors';
import { auth, firestore } from '../../lib/firebase';

export default function QuizScreen() {
  const [loading, setLoading] = useState(false);

  const handleSkip = async () => {
    const user = auth().currentUser;
    if (!user) return;

    setLoading(true);
    try {
      await firestore().collection('users').doc(user.uid).set({
        onboarded: true,
      }, { merge: true });
      // Signing out will cause the auth listener in useAuth to update the user state to null,
      // which will trigger the layout's auth gate to redirect back to /(auth)/sign-in.
      await auth().signOut();
    } catch (error) {
      console.error('Error skipping onboarding:', error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set up your budget</Text>
      <Text style={styles.subtitle}>
        This is a placeholder for the onboarding flow.
      </Text>

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleSkip}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color={Colors.card} />
        ) : (
          <Text style={styles.buttonText}>Skip for now (Dev)</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: Colors.primary,
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: Colors.muted,
    marginBottom: 48,
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.expense, // Using error/red color to emphasize it's a dev-only action
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: Colors.card,
    fontSize: 16,
    fontWeight: '600',
  },
});
