const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.static('public'));

var httpTool = {
  baseurl:'http://218.90.150.158:12000/',
  post:function(service,op,params){

    var url = this.baseurl + service + '.asmx?op=' + op
    var paramString = this.getParamString(params)
    var bodyXml = this.getBodyXml(op,paramString)
    _this = this

    return new Promise(function(resolve,reject){
      axios({
        method: 'post',
        url: url,
        headers:{ 'Content-Type': 'text/xml' },
        data: bodyXml,
      }).then(function (response) {
        if(response.data){
          var data = _this.parse(response.data)
          if(data){
            resolve(data)
          }else{
            reject(new Error("数据返回异常"))
          }
        }else{
          reject(new Error("数据返回异常"))
        }
      })
      .catch(function (error) {
        reject(error)
      });
    });
  },

  parse:function(data){
    var result = data.match(/<\w*Result>(.*)<\/\w*Result>/g)[0]
    result = result.replace(/<[^>]*?>(.*?)/gi,'$1'); //删除左部
    result = result.replace(/(.*?)<\/[^>]*?>/gi,'$1'); //删除右部
    return result
  },

  getParamString:function(params){
    var paramString = ''
    Object.keys(params).forEach(element => {
      paramString = paramString + '<'+element+'>' + params[element] + '</'+element+'>'
    });
    return paramString
  },

  getBodyXml:function(action,paramString){
    return `<?xml version="1.0" encoding="utf-8"?><soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"><soap12:Body><${action} xmlns="http://tempuri.org/">${paramString}</${action}></soap12:Body></soap12:Envelope>`
  }
}

httpTool.post('Service1','Login_Check',{
  Name:'1502009',
  Pwd:'cfzzfc',
  CompanyNo:'sjk008',
  os:'ios'
})
.then(data => {
  console.log('-----'+data);
})
.catch(err => {
  console.log('-----'+err);
})

