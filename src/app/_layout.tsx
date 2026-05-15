import { Stack, useSegments, useRouter } from 'expo-router';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';

export default function RootLayout() {
  const { user, profile, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    const inAuthGroup = segments[0] === '(auth)';
    const inOnboardingGroup = segments[0] === '(onboarding)';
    const inTabsGroup = segments[0] === '(tabs)';

    if (!user && !inAuthGroup) {
      router.replace('/(auth)/sign-in');
    } else if (user && profile?.onboarded === false && !inOnboardingGroup) {
      router.replace('/(onboarding)/quiz');
    } else if (user && profile?.onboarded === true && !inTabsGroup) {
      router.replace('/(tabs)/dashboard');
    }
  }, [user, profile, loading, segments]);

  if (loading) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
