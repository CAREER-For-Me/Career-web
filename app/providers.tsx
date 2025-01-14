"use client";

import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserSpecProvider } from "./context/UserSpecContext";
const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <SessionProvider>
      <UserSpecProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </UserSpecProvider>
    </SessionProvider>
  );
};

export default Providers;
