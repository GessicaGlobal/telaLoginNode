import { create } from 'zustand';
import axios from 'axios';
import { createJSONStorage, persist } from 'zustand/middleware'


interface AuthStore {
    token?: string;
    user: {
        name: string;
        email: string;
    };
    signIn: (signInPayload: SignUpPayload) => Promise<string | null>;
    signOut: () => void;
    newUser: (signUpPayload: SignUpPayload) => Promise<string | null>;
}

type SignUpPayload = {
    name: string;
    email: string;
    password: string;
    confirmPassword:string;
    
};

export const useAuth = create(
    persist<AuthStore>(
        (set) => ({
            user: {
                name: 'name',
                email: 'email'
            },
            token: "FAKE_TOKEN",
            //autenticando login
            signIn: async (signInPayload) => {
                try {
                    const response = await axios.post('http://localhost:3000/auth/login', {
                        email: signInPayload.email,
                        password: signInPayload.password,
                    });

                    if (response.status === 200) {
                        const data = response.data;
                        const token = data.token;
                        if (token) {
                            set({ token });
                            return token;
                        } else {
                            return null;
                        }
                    } else {
                        throw new Error('Failed to authenticate');
                    }
                } catch (error) {
                    if (!error?.response?.data?.token) {
                        throw new Error('Error accessing the server');
                    } else if (error.response.status === 401) {
                        throw new Error('Invalid username or password!');
                    }
                }
            },
            signOut: () => set({ token: undefined }),
            //.....autenticacao de cadastro de usuario
            newUser: async (signInPayload) => {
                try {
                    const response = await axios.post('http://localhost:3000/auth/register', {
                        name: signInPayload.name,
                        email: signInPayload.email,
                        password: signInPayload.password,
                        confirmpassword:signInPayload.confirmPassword,
                    });

                    if (response.status === 200) {
                        const data = response.data;
                        const token = data.token;
                        if (token) {
                            set({ token });
                            return token;
                        } else {
                            return null;
                        }
                    } else {
                        throw new Error('Failed to authenticate');
                    }
                } catch (error) {
                    if (!error?.response?.data?.token) {
                        throw new Error('Error accessing the server');
                    } else if (error.response.status === 401) {
                        throw new Error('Invalid username or password!');
                    }
                }
            },
              //.....autenticacao de cadastro de usuario administrativo
              newUserAdmin: async (signInPayload) => {
                try {
                    const response = await axios.post('http://localhost:3000/auth/register', {
                        name: signInPayload.name,
                        email: signInPayload.email,
                        password: signInPayload.password,
                        confirmpassword:signInPayload.confirmPassword,
                    });

                    if (response.status === 200) {
                        const data = response.data;
                        const token = data.token;
                        if (token) {
                            set({ token });
                            return token;
                        } else {
                            return null;
                        }
                    } else {
                        throw new Error('Failed to authenticate');
                    }
                } catch (error) {
                    if (!error?.response?.data?.token) {
                        throw new Error('Error accessing the server');
                    } else if (error.response.status === 401) {
                        throw new Error('Invalid username or password!');
                    }
                }
            },
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => localStorage)
        },


    )
)
