import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

export interface FetchResponse<T> {
  data: T[];
}

export interface SingleResponse<T> {
  data: T;
}

export type CurrentClient = "admin" | "user";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Global Axios Error:", error);
    return Promise.reject(error);
  }
);

export default class APIClient<T> {
  private endpoint: string;
  private client: CurrentClient | undefined;

  constructor(endpoint: string, client?: CurrentClient) {
    this.endpoint = endpoint;
    this.client = client;
  }

  private getAuthHeaders(): Record<string, string> {
    const token = this.getToken();
    return token ? { Authorization: token } : {};
  }

  private getToken(): string | null {
    const tokenKey =
      this.client === "admin"
        ? import.meta.env.VITE_REACT_APP_ADMIN_TOKEN
        : import.meta.env.VITE_REACT_APP_USER_TOKEN;

    return localStorage.getItem(tokenKey);
  }

  get = (
    params?: AxiosRequestConfig
  ): Promise<AxiosResponse<FetchResponse<T>>> => {
    return instance.get<FetchResponse<T>>(this.endpoint, {
      ...params,
      headers: {
        ...params?.headers,
        ...this.getAuthHeaders(),
      },
    });
  };

  openGet = (
    params?: AxiosRequestConfig
  ): Promise<AxiosResponse<FetchResponse<T>>> => {
    return instance.get<FetchResponse<T>>(this.endpoint, params);
  };

  openGetSingle = (
    params?: AxiosRequestConfig
  ): Promise<AxiosResponse<SingleResponse<T>>> => {
    return instance.get<SingleResponse<T>>(this.endpoint, params);
  };

  getSingle = (
    params?: AxiosRequestConfig
  ): Promise<AxiosResponse<SingleResponse<T>>> => {
    return instance.get<SingleResponse<T>>(this.endpoint, {
      ...params,
      headers: {
        Authorization: this.getToken(),
      },
    });
  };

  upload = (
    data?: T,
    params?: AxiosRequestConfig,
    onProgress?: (progress: number) => void
  ) => {
    return instance.post(this.endpoint, data, {
      ...params,
      headers: {
        ...params?.headers,
        Authorization: this.getToken(),
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (event) => {
        if (onProgress && event.total) {
          const progress = Math.round((event.loaded * 100) / event.total);
          onProgress(progress);
        }
      },
    });
  };

  download = (
    params?: AxiosRequestConfig,
    setProgress?: (progress: number) => void
  ) => {
    return instance.get<string>(this.endpoint, {
      ...params,
      headers: {
        Authorization: this.getToken(),
      },
      onDownloadProgress: (event) => {
        if (setProgress && event.total) {
          const percentCompleted = Math.round(
            (event.loaded * 100) / event.total
          );
          setProgress(percentCompleted);
        }
      },
    });
  };

  post = (data?: T, params?: AxiosRequestConfig) => {
    return instance.post(this.endpoint, data, {
      ...params,
      headers: {
        ...params?.headers,
        Authorization: this.getToken(),
      },
    });
  };

  addProperty = (data?: T, params?: AxiosRequestConfig) => {
    return instance.post(this.endpoint, data, {
      ...params,
      headers: {
        ...params?.headers,
        Authorization: this.getToken(),
        "Content-Type": "multipart/form-data",
      },
    });
  };

  openPost = async (data?: T) => {
    return instance.post(this.endpoint, data).then((res) => res);
  };

  put = (data?: T, params?: AxiosRequestConfig) => {
    return instance.put(this.endpoint, data, {
      ...params,
      headers: {
        ...params?.headers,
        Authorization: this.getToken(),
      },
    });
  };

  patch = (data?: T, params?: AxiosRequestConfig) => {
    return instance.patch(this.endpoint, data, {
      ...params,
      headers: {
        ...params?.headers,
        Authorization: this.getToken(),
      },
    });
  };

  delete = (params?: AxiosRequestConfig) => {
    return instance.delete(this.endpoint, {
      ...params,
      headers: {
        ...params?.headers,
        Authorization: this.getToken(),
      },
    });
  };
}
