import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useActivityMutation = () => {
  const useClient = useQueryClient();

  return useMutation({});
};
