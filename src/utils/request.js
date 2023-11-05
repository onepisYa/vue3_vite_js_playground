import axios from 'axios';
import { useAxios } from '@vueuse/integrations/useAxios'


const CODE = [404, 11]

// 创建请求实例
const instance = axios.create({
  baseURL: import.meta.env.VITE_PROXY_DOMAIN, // url = base url + request url
  timeout: 5000,
});
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
   return response
  },
  (error) => {
    const { response } = error;
    console.log("error in request")
    if (response && response.data) {
      return Promise.reject(error);
    }
    const { message } = error;
    console.error(message);
    return Promise.reject(error);
  },
);

// 导出常用函数

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const post = (url, data = {}, params = {}) => {
  return instance({
    method: 'post',
    url,
    data,
    params,
  });
};

/**
 * @param {string} url
 * @param {object} params
 */
export const get = (url, params = {}) => {
  return instance({
    method: 'get',
    url,
    params,
  });
};

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const put = (url, data = {}, params = {}) => {
  return instance({
    method: 'put',
    url,
    params,
    data,
  });
};

/**
 * @param {string} url
 * @param {object} params
 */
export const _delete = (url, params = {}) => {
  return instance({
    method: 'delete',
    url,
    params,
  });
};


/**
 * 当你的 isUse 设置为 true 的时候，你可以使用 useAxios 来获取数据返回内容如下，否则和 普通 Axios 一样
 *
 * @param {*} config
 * @param {object} - { prefix = null, isUse = false, immediate = false }
 * @returns {*} - { response, data, error, finished: isFinished, loading: isLoading, isFinished, isLoading, cancel: abort, isAborted, canceled: isAborted, aborted: isAborted, isCanceled: isAborted, abort, execute, then }
 */
export const request = (config, { prefix = null, isUse = false, immediate = false } = {}) => {
  const url = prefix ? `${prefix}${config.url}` : `${config.url}`
  config.url = url
  if (isUse) {
    const res = useAxios(url, config, instance, { immediate: immediate })
    console.log('useAxios', res)
    return res
    // execute 仅仅返回一个 then
    // 但是 await execute 之后 会返回所有的东西。
  } else {
    return instance(config)
  }
}


export const useRequest = (config, { prefix = null, isUse = true, immediate = true } = {}) => {
  return request(config, { prefix, isUse, immediate })
}


/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const usePost = (url, data = {}, params = {}, immediate = true) => {
  return useRequest({
    method: 'post',
    url,
    data,
    params,
  }, { immediate });
};

/**
 * @param {string} url
 * @param {object} params
 */
export const useGet = (url, params = {}, immediate = true) => {
  return useRequest({
    method: 'get',
    url,
    params,
  }, { immediate }
  );
};

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const usePut = (url, data = {}, params = {}, immediate = true) => {
  return useRequest({
    method: 'put',
    url,
    params,
    data,
  }, { immediate }
  );
};

/**
 * @param {string} url
 * @param {object} params
 */
export const _useDelete = (url, params = {}, immediate = true) => {
  return useRequest({
    method: 'delete',
    url,
    params
  }, { immediate }
  );
};

export default instance;