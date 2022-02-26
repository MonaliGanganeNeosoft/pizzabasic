import axios from "axios";
import { My_Url } from "./Url";
let token=localStorage.getItem(_token);
export function addSignup(data){
    return axios.post(`${My_Url}/signup`,data)
}
export function login(data){
    return axios.post(`${My_Url}login`,data)
}