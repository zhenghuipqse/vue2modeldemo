export function get(url, params, headers) {
    const p = new Promise((resolve, reject) => {

    });
    return p;
}

export function post(url, params, headers) {
    return new Promise((resolve, reject) => {

    });
}


/**
 * 请求重试
 * @param handler {function} 重试的方法
 * @param args {array} 原方法的所有参数
 * @return {function(Error): handler}
 */
export const retry = (handler, ...args) => {
    return (error = {}) => {
        const {code} = error;
        // timeout
        if (code === "ECONNABORTED") return handler(...args);
    };
};

export default {
    get,
    post,
    retry
};
