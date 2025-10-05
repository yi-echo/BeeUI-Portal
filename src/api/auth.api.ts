import httpService from "@/utils/axios";

export const register = (data: any) => {
  return httpService.post("/auth/signup", data);
};

export const login = (data: any) => {
  return httpService.post("/auth/signin", data);
};