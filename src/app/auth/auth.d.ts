export interface authForm {
  username: string;
  password: string;
}

export interface AuthContextProps {
  authForm: authForm;
  setAuthForm: React.Dispatch<React.SetStateAction<authForm>>;
  loginUser: (form: authForm) => Promise<boolean>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isAuthenticated: boolean
}
