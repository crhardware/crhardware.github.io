var fs = require('fs'),
	rrs = require('recursive-readdir-sync'),
	products = {};

rrs('public/img/product/').forEach(function(item, i){
	var reg = /product\\(\S+)\\(\S+)\.jpg$/i,
		ret = reg.exec(item);
	if(ret.length >=3){
		if(!products[ret[1]]){
			products[ret[1]] = []
		}
		products[ret[1]].push({
			pic: '/public/img/product/'+ret[1]+'/'+ret[2]+'.jpg',
	        title: '',
	        id: 'No:'+ret[2],
	        size: '',
	        sPrice: '',
	        mPrice: ''
		})
	}
})

console.log(''+products)