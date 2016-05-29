var React = require('react');
var Body = require('./body');
var BodyContainer = require('./bodyContainer');
var ProductArea = require('./product/productArea');

var jsonTypes = require('../../../public/json/product/type');
var jsonProducts = require('../../../public/json/product/product');
var jsonDatas = require('../../../public/json/product');

var Product = React.createClass({
	render: function(){
		var jsonType = jsonTypes[this.props.lang],
			jsonProduct = jsonProducts[this.props.lang],
			jsonData = jsonDatas[this.props.lang],
			bcJsx;

		bcJsx = jsonType.map(function(typeItem){
			var products = jsonProduct[typeItem.id],
				typeJsx,
				productJsx,
				moreJsx = null,
				len = products && products.length;
			if (len) {
				return [<ProductArea products={products} typeItem={typeItem} jsonData={jsonData} />]
			}

			return;
		})

		return (
				<Body>
					<BodyContainer>
						{bcJsx}
					</BodyContainer>
				</Body>
			)
	}
});

module.exports = Product;