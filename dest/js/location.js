define("location",function(c,a,b){return define("location",function(t,o,e){!function(){function t(t){function o(t){$.ajax({url:"http://api.map.baidu.com/geocoder/v2/?ak=R1BS15aSlKUTpc0YG6GbDk7Q&output=json&pois=0&location="+t.latitude+","+t.longitude,dataType:"jsonp",success:function(o){0===o.status?$.extend(t,o.result.addressComponent,{business:o.result.business,cityCode:o.result.cityCode}):t.tips="获取地址信息失败";try{localStorage.setItem("locationInfo",JSON.stringify(t))}catch(i){}e&&e(t)}})}var a={latitude:t.coords.latitude,longitude:t.coords.longitude};if(i){e&&e(a);try{localStorage.setItem("locationInfo",JSON.stringify(a))}catch(n){}}else $.ajax({url:"http://api.map.baidu.com/geoconv/v1/?ak=R1BS15aSlKUTpc0YG6GbDk7Q&from=1&to=5&output=json&coords="+a.longitude+","+a.latitude,dataType:"jsonp",success:function(t){o(0===t.status?{longitude:t.result[0].x,latitude:t.result[0].y}:a)}})}function o(t){var o={};switch(t.code){case t.PERMISSION_DENIED:o.tips="用户拒绝获取地理位置",o.reject=!0;break;case t.POSITION_UNAVAILABLE:o.tips="位置信息不可用";break;case t.TIMEOUT:o.tips="获取用户位置请求超时";break;case t.UNKNOWN_ERROR:o.tips="获取位置失败，请重试"}e&&e(o)}var e,i;if(navigator.geolocation)$.location=function(a,n,c){e=a,"object"==typeof n&&(c=n,n=void 0);var s=$.extend({enableHighAccuracy:!0,maximumAge:3e4,timeout:12e3},c);i=n,navigator.geolocation.getCurrentPosition(t,o,s)};else{var a={tips:"浏览器不支持定位"};$.location=function(t){t(a)}}$.historyLocation=function(){try{return localStorage.getItem("locationInfo")}catch(t){}},$.locationByIp=function(t){$.ajax({url:"http://m.ly.com/ajax/GetCityByIp.ashx",dataType:"jsonp",timeout:1e4,success:function(o){var e={};if(o){e={province:o.ProvinceName,provinceCode:o.ProvinceID,city:o.CityName,cityCode:o.CityID};try{localStorage.setItem("locationInfo",JSON.stringify(e))}catch(i){}}else e={tips:"获取地址信息失败"};t&&t(e)},error:function(){t&&t({tips:"获取地址信息失败"})}})}}()});},'m');