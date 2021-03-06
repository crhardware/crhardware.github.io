var fs = require('fs'),
	rrs = require('recursive-readdir-sync');

module.exports = function (){
	var products = {};
	rrs('public/img/product/').forEach(function(item, i){
		var reg = /product\\(\S+)\\(\S+)\.jpg$/i,
			ret = reg.exec(item),
			sort;
		if(ret.length >=3){
			if(!products[ret[1]]){
				products[ret[1]] = []
			}
			sort = /(\d+)/g.exec(ret[2]);
			products[ret[1]].push({
				pic: '/public/img/product/'+ret[1]+'/'+ret[2]+'.jpg',
		        title: '',
		        id: 'No:'+ret[2],
		        size: '',
		        sPrice: '',
		        mPrice: '',
		        sort: sort ? +sort[1] : 9999
			})
		}
	})
	Object.keys(products).forEach(function(item){
		products[item] = products[item].sort(function(a, b){return a.sort - b.sort})
	})
	var imgJson = [
			'var products = ', 
			JSON.stringify(products),
			';module.exports = {',
			    'zh_cn: products,',
			    'en: products',
			'}'
		].join('');

	fs.writeFileSync('public/json/product/product.js', imgJson);
	console.log('imgjson generated:length is '+ imgJson.length)
}