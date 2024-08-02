import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

class ApiCore {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, config);
  }

  async post<T, R>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    return this.axiosInstance.post<R>(url, data, config);
  }

  async put<T, R>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    return this.axiosInstance.put<R>(url, data, config);
  }

  async delete<R>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    return this.axiosInstance.delete<R>(url, config);
  }

  async patch<T, R>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<R>> {
    return this.axiosInstance.patch<R>(url, data, config);
  }
}

export default ApiCore;
