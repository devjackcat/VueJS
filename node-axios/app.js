const express = require('express')
var bodyParser = require('body-parser');
const axios = require('axios')
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));

var HttpTool = {
  baseurl:'http://218.90.150.158:12000/',
  post:function(service,op,params){

    var url = this.baseurl + service + '.asmx?op=' + op
    var paramString = this.getParamString(params)
    var bodyXml = this.getBodyXml(op,paramString)
    var soapAction = 'http://tempuri.org/' + op
    _this = this

    return new Promise(function(resolve,reject){
      axios({
        method: 'post',
        url: url,
        headers:{ 
          'Content-Type': 'text/xml; charset=utf-8',
          'SOAPAction':soapAction
        },
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
    return JSON.parse(result)
  },

  getParamString:function(params){
    var paramString = ''
    Object.keys(params).forEach(element => {
      paramString = paramString + '<'+element+'>' + params[element] + '</'+element+'>'
    });
    return paramString
  },

  getBodyXml:function(action,paramString){
    return `<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><${action} xmlns="http://tempuri.org/">${paramString}</${action}></soap:Body></soap:Envelope>`
  }
}


// 自定义跨域中间件
var allowCors = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials','true');
  next();
};
app.use(allowCors);//使用跨域中间件

app.post('/api/:service/:op', function(req, res){

  var service = req.params.service
  if(!service) {
    res.json({
      success:false,
      code:9999,
      msg:'service不能为空'
    })
    return;
  }

  var op = req.params.op
  if(!op) {
    res.json({
      success:false,
      code:9999,
      msg:'op不能为空'
    })
    return;
  }

  var params = req.body
  HttpTool.post(service,op,params)
  .then(data => {
    res.json(data);
    // console.log('-----'+data);
  })
  .catch(err => {
    res.json(err);
    // console.log('-----'+err);
  })
})

app.listen(3002);

// httpTool.post('Service1','Login_Check',{
//   Name:'1502009',
//   Pwd:'cfzzfc',
//   CompanyNo:'sjk008',
//   os:'ios'
// })
// .then(data => {
//   console.log('-----'+data);
// })
// .catch(err => {
//   console.log('-----'+err);
// })

