import httpService from "@/utils/axios";

export const getUsers = (params: any) => {
  return httpService.get("/user", { params });
};

export const updateUser = (id: number, data: any) => {
  return httpService.put(`/user/${id}`, data);
};

export const deleteUser = (id: number) => {
  return httpService.delete(`/user/${id}`);
};