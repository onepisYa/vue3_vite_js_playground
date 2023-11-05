// 在不支持 URLSearchParams 的地方快速将一个对象拼接为 查询字符串
// 在 支持 URLSearchParams 的时候，可以使用 append 来追加数组形式的 queryString 参数。
const originalParseQuery = (params, encode = true) => {

  return Object.keys(params).map(key => {
    let value = params[key];
    if (Array.isArray(value)) {
      value = value.map(v => encode ? encodeURIComponent(v) : v);
    } else if (encode) {
      value = encodeURIComponent(value);
    }

    return Array.isArray(value)
      ? value.map(v => `${key}=${v}`).join("&")
      : `${key}=${value}`

  }).join("&");
}

/**
 * 将URLSearchParams对象转换为未编码的查询字符串
 * @param {URLSearchParams} searchParams 
 * @returns {string}
*/
function stringifyURLSearchParams(searchParams) {
  return [...searchParams]
    .map(pair => {
      return decodeURIComponent(pair[0]) + '=' + decodeURIComponent(pair[1]); 
    })
    .join('&');
}

// 使用方式:

const params = new URLSearchParams(); 

params.append('key1', 'value1');

const queryString =stringifyURLSearchParams(params);

export const parseQuery = (params, encode = true) => {
  if (typeof URLSearchParams !== 'undefined') {
    console.log('URLSearchParams')
    const searchParams = new URLSearchParams();

    for (let key in params) {
      let value = params[key];
      if (Array.isArray(value)) {
        value.forEach(v => searchParams.append(key, v));  
      } else {
        searchParams.append(key, value);
      }
    }
    return encode ?
                searchParams.toString() : stringifyURLSearchParams(searchParams)
                
  } else {
    // 原有的兼容方案
    console.log('Not URLSearchParams')
    originalParseQuery(params, encode)
  }
}


// 用法:
// console.log(parseQuery({foo: ['a', 'b,c']}, false));
// console.log(parseQuery({foo: ['a', 'b,c']}));

// console.log(originalParseQuery({foo: ['a', 'b,c']}, false));
// console.log(originalParseQuery({foo: ['a', 'b,c']}));
// console.log(`----------------------`);
// console.log(originalParseQuery({foo: ['a', 'b%2Cc']}, false));
// console.log(originalParseQuery({foo: ['a', 'b%2Cc']}));// 已经编码过了就不要再次编码了


//   const query_string = parseQuery(params)    
//   const url = query_string ? `${module_prefix}/purchase/my?${query_string}` : `${module_prefix}/purchase/my`;


// 也可以使用  core-js 进行 polyfill， 使用 core-js-builder 进行打包




