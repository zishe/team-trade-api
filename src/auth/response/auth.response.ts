export interface AuthResponse {
    success: boolean;
    error?: string;
    authData?: AuthData;
}

export interface AuthData {
    jwt: string;
    userId: string;
}
