"use client";

import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AvgSpecProvider } from "./context/AvgspecContext";
import { UserSpecProvider } from "./context/UserSpecContext";
const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <SessionProvider>
      <UserSpecProvider>
        <AvgSpecProvider>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </AvgSpecProvider>
      </UserSpecProvider>
    </SessionProvider>
  );
};

export default Providers;
