import {axios} from '../main'
// import {axios} from '../../main'

function checkStatus(response) {
  if (response && (response.status === 200 || response.status === 304 ||
      response.status === 400)) {
      return response
    }

    return  {
      status: 404,
      msg: '网络异常'
    }
  }

  function checkCode(res) {
    if (res.status === 404) {
      // alert(res.msg)
    }
    if (res.data && (!res.data.success)) {
      // alert(res.data.error.error_msg)
    }
    return res
  }


let http =  {
    post(absolute_url, data) {
      return axios({
        method: 'post',
        url: absolute_url,
        data: JSON.stringify(data),
        timeout: 10000,
        header: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      }).then((response) => {
        return checkStatus(response)
      }).then(
        (res) => {
          return checkCode(res)
        })
    },


    get(absolute_url, params) {
      if (axios.interceptors.request.handlers.length===0) {
        axios.interceptors.request.use(config => {
        return config
        }, error => {
        return Promise.reject(error)
        }),
        axios.interceptors.response.use(response => {
          return response// maybe we can do stuff here
        }, error => {
          return Promise.resolve(error.response)
        })
      }
      return axios({
        method: 'get',
        url: absolute_url,
        params,
        timeout: 10000,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then((response) => {
        return checkStatus(response)
      }).then((res) => {
        return checkCode(res)
      })
    },



  }

export {http}
