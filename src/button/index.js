const fetchFn = require('@system.fetch');
const network = require('@system.network');
const storage = require('@system.storage')

/* 
  获取缓存
 */
const getStorage = (key1) => {
    return new Promise((resolve, reject) => {
        storage.get({
            key: key1,
            success: function (data) {
                let obj = { data: data, flag: true }
                resolve(obj)
            },
            fail: function (data, code) {
                console.log(`获取存储 fail, code = ${code}`)
                let obj = { data: data, flag: false, code: code }
                resolve(obj);
            }
        })
    })
}
//设置存储
const setStorage = (key1, value) => {
    return new Promise((resolve, reject) => {
        storage.set({
            key: key1,
            value: JSON.stringify(value),
            success: function (data) {
                console.log('设置存储 success')
                let obj = { data: data, flag: true }
                resolve(obj)
            },
            fail: function (data, code) {
                console.log(`设置存储 fail, code = ${code}`)
                let obj = { data: data, flag: false, code: code }
                resolve(obj)
            }
        })
    })
}
//清除缓存
const clearStorage = () => {
    return new Promise((resolve, reject) => {
        storage.clear({
            success: function (data) {
                console.log('清除缓存 success')
                let obj = { data: data, flag: true }
                resolve(obj)
            },
            fail: function (data, code) {
                console.log(`清除缓存 fail, code = ${code}`)
                let obj = { data: data, flag: false, code: code }
                resolve(obj)
            }
        })
    })
}
//将对象转换成字符串key=value的格式
const objTostring = (obj) => {
    let arr = [];
    for (let key in obj) {
        arr.push(`${key}=${obj.key}`)
    };
    return arr.length > 0 ? arr.join(`&`) : '';
}
// 5秒超时
let timeout = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let obj = { data: 'timeout', flag: false }
        resolve(obj)
    }, 5 * 1000);
})
/* 
    get 请求
 */
const get = (url, obj) => {
    let ur = objTostring(obj) ? `${url}?${objTostring(obj)}` : url;
    let p = new Promise((resolve, reject) => {
        fetchFn.fetch({
            url: ur,
            method: "GET",
            responseType: "json",
            seccess: (res) => {
                console.log(`成功返回：${JSON.stringify(res)}`)
                let obj = { data: res, flag: true }
                resolve(obj)
            },
            fail: (res) => {
                console.log(`失败返回：${JSON.stringify(res)}`)
                let obj = { data: res, flag: false }
                resolve(obj)
            }
        })
    })
    return Promise.race(p, timeout)
}
/* 
    post请求
*/
const post = (header, url, obj) => {
    console.log(`post服务传入的data数据：${JSON.stringify(obj)}`)
    console.log(`post服务传入的header数据：${JSON.stringify(header)}`)
    let p = new Promise((resolve, reject) => {
        fetchFn.fetch({
            url: url,
            header: Object.assign({}, header, {
                'Content-Type': 'application/json'
            }),
            responseType: "json",
            method: "POST",
            data: JSON.stringify(obj),
            success: (res) => {
                console.log(`POST成功返回：${JSON.stringify(res.data)}`)
                let obj = { data: res, flag: true }
                resolve(obj)
            },
            fail: (res) => {
                console.log(`POST失败返回：${JSON.stringify(res)}`)
                let obj = { data: res, flag: false }
                resolve(obj)
            }
        })
    })
    return Promise.race(p, timeout)
}
const fetch = (url, obj, method, header) => {//method GET POST
    let fetObj = {
        method: method,
        responseType: "json",
    }
    if (method == "GET") {
        let ur = objTostring(obj) ? `${url}?${objTostring(obj)}` : url;
        fetObj = Object.assign({}, fetObj, {ur})
    } else {
        fetObj = Object.assign({}, fetObj, {
            url, data: JSON.stringify(obj), header: Object.assign({}, header, {
                'Content-Type': 'application/json'
            })
        })
    }
    let p = new Promise((resolve, reject) => {
        fetchFn.fetch(Object.assign({}, fetObj, {
            success: (res) => {
                console.log(`${method}成功返回：${JSON.stringify(res.data)}`)
                let obj = { data: res, flag: true }
                resolve(obj)
            },
            fail: (res) => {
                console.log(`${method}失败返回：${JSON.stringify(res)}`)
                let obj = { data: res, flag: false }
                resolve(obj)
            }
        }))
    })
    return Promise.race(p, timeout)
}

const hasNetwork = () => {
    return new Promise((resolve, reject) => {
        network.getType({
            success: function (data) {//data.type=2g，3g，4g，wifi，none
                let flag = data.type == 'none' ? false : true
                let obj = { data: data.type, flag: flag }
                resolve(obj)
            }
        })
    })
}
export default {
    get,
    post,
    fetch,
    hasNetwork,
    getStorage,
    setStorage,
    clearStorage
}