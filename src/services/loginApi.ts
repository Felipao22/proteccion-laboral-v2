import { apiSlice } from "../store/apiSlice";

export interface responseLogin {
  message: string;
  user: User;
  token: string;
  error: string;
  warning: string;
}

export interface User {
  userId: string;
  email: string;
  name: string;
  lastName: string;
  password: string;
  nombreEmpresa: string;
  cuit: number;
  nombreSede: string;
  ciudad: string;
  direccion: string;
  telefono: string;
  emails: any;
  accessUser: any;
  emailJefe: string;
  deleted: boolean;
  active: boolean;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface dataLogin {
  email: string;
  password: string;
}

export interface dataLogout {
  message: string;
}

export const loginApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postLogin: builder.mutation<responseLogin, dataLogin>({
      query: (data: dataLogin) => ({
        url: "user/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    postLogOut: builder.mutation<dataLogout, void>({
      query: (data) => ({
        url: "user/logout",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
  overrideExisting: true,
});

export const { usePostLoginMutation, usePostLogOutMutation } = loginApi;
