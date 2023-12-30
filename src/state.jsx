import { atom } from "recoil";

export const storeDatas = atom({
    key: 'storeDatas',
    default: []
})

export const myLocation = atom({
    key: 'myLocation',
    default: {
        latitude: 0,
        longitude: 0,
    }
})