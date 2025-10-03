import { QueryClient } from "@tanstack/react-query";
import type { ErrorResponse } from "../entities/response";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError(error) {
        const err = error as ErrorResponse;
        if (err.response?.status === 401) {
          localStorage.removeItem("macify_admin_token");
          const url = window.location.origin + "/login";
          window.location.href = url;
        }
        return false;
      },
    },
    mutations: {
      onError: (error) => {
        const err = error as ErrorResponse;
        if (err.response?.status === 401) {
          localStorage.removeItem("macify_admin_token");
          const url = window.location.origin + "/login";
          window.location.href = url;
        }
        return false;
      },
    },
  },
});

export default client;
