export interface UserLoginInfo{
    email: string
    password: string
}

export interface UserInfo{
    id: number
    name: string
    surname: string
    email: string
    roles: Role[]
}

export interface UserInfoWithPassword{
    id: number
    name: string
    surname: string
    email: string
    password: string
    roles: Role[]
}

export interface LoginResponse {
    jwt: string
}
  
export interface Role{
    id: number
    name: string
}