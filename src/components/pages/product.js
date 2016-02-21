var React = require('react');
var Body = require('./body');
var BodyContainer = require('./bodyContainer');
var ProductItem = require('./product/productItem');
var MaterialUi = require('material-ui');

var Styles = MaterialUi.Styles;
var Colors = Styles.Colors;

var jsonTypes = require('../../../public/json/product/type');
var jsonProducts = require('../../../public/json/product/product');

var Product = React.createClass({
	render: function(){
		var style = {
			type: {
				fontSize: 26,
				color: Colors.cyan500
			},
			item: {
				display: 'inline-block',
				marginRight: '10px',
				marginLeft: '10px',
				marginBottom: '20px'
			},
			divider: {
				borderStyle: 'none',
				height: '2px',
				marginTop: '2px',
				marginBottom: '10px',
				backgroundColor: Colors.cyan100
			}
		},
		jsonType = jsonTypes[this.props.lang],
		jsonProduct = jsonProducts[this.props.lang],
		bcJsx;

		bcJsx = jsonType.map(function(typeItem){
			var products = jsonProduct[typeItem.id],
				typeJsx,
				productJsx;
			if (products.length) {
				typeJsx = (
						<div>
							<span style={style.type}>{typeItem.title}</span>
							<hr style={style.divider}/>
						</div>
					);
				productJsx = products.map(function(productItem){
					return (<ProductItem style={style.item} item={productItem} />);
				});

				return [typeJsx,productJsx];
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