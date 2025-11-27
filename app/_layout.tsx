import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { View, Text } from "react-native";
import "../global.css";
import { Stack } from "expo-router";

//Se almacena en caché las consultas de React Query en el cliente
const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }} />
    </QueryClientProvider>
  );
}
