import { useState, type ReactNode } from "react";
import {
  usePostLoginMutation,
  usePostLogOutMutation,
  type dataLogin,
  type User,
} from "../services/loginApi";
import { clearUser, getUser, setUser } from "../utils/userStorage";
import {
  NotificationFailure,
  NotificationSuccess,
  NotificationWarning,
} from "../components/Common/Notifications";
import { useRouter } from "../hooks/useRouter";
import { AuthContext } from "./authContext";

export interface AuthContextType {
  isLoggedIn: boolean;
  login: (userData: dataLogin) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  isLoadingLogOut: boolean;
  client: User | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [client, setClient] = useState<User | null>(() => {
    const stored = getUser();
    return stored ? stored : null;
  });

  //Custom hook
  const { navigateTo } = useRouter();

  //Mutation Redux
  const [postLogin, { isLoading }] = usePostLoginMutation();
  const [postLogOut, { isLoading: isLoadingLogOut }] = usePostLogOutMutation();

  const login = async (userData: dataLogin): Promise<void> => {
    try {
      const { user, message, warning } = await postLogin(userData).unwrap();
      setClient(user);
      setUser(user);
      setIsLoggedIn(true);
      NotificationSuccess(message);
      if (warning) NotificationWarning(warning);
      if (user.isAdmin || user.isSuperAdmin) {
        navigateTo("/dashboard");
      } else {
        navigateTo("/usuarios");
      }
    } catch (error: any) {
      console.error("Error al iniciar sesión", error);

      const errorMsg =
        error?.data?.error ?? error?.message ?? "Ocurrió un error inesperado";

      NotificationFailure(errorMsg);
    }
  };

  const logout = async () => {
    try {
      clearUser();
      setIsLoggedIn(false);
      const response = await postLogOut().unwrap();
      if (response) {
        navigateTo("/iniciar-sesion");
      }
    } catch (error: any) {
      console.error("Error al cerrar sesión", error);
      NotificationFailure(error.data?.error ?? "Ocurrió un error inesperado");
    }
  };

  const value: AuthContextType = {
    isLoggedIn,
    login,
    logout,
    isLoading,
    isLoadingLogOut,
    client,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
}
