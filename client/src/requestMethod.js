import axios from "axios";

const BASE_URL = "http://localhost:3001/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTA5MWIwY2M1YTVmN2Q4YTgzNTNhNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDU5MTg1NCwiZXhwIjoxNjU0ODUxMDU0fQ.wSw8tNVoQZPCs67_yXqzukxsylV44N6FLg22VA_OYLE"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})