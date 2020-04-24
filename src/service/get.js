import axios from 'axios'

import {RootPath} from './config'

const Get = () => {
    const promise = new Promise((resolve, reject) => {
        axios.get(RootPath)
        .then((res) => {
            resolve(res.data)
        }, err => {
            reject(err)
        })
    })
    return promise
}

export default Get