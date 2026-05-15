import { Stack, Redirect, useSegments } from 'expo-router';
import useAuth from '../hooks/useAuth';

export default function RootLayout() {
  const { user, profile, loading } = useAuth();
  const segments = useSegments();

  if (loading) {
    return null;
  }

  const inAuthGroup = segments[0] === '(auth)';
  const inOnboardingGroup = segments[0] === '(onboarding)';
  const inTabsGroup = segments[0] === '(tabs)';

  if (!user && !inAuthGroup) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  if (user && profile?.onboarded === false && !inOnboardingGroup) {
    return <Redirect href="/(onboarding)/quiz" />;
  }

  if (user && profile?.onboarded === true && !inTabsGroup) {
    return <Redirect href="/(tabs)/dashboard" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
