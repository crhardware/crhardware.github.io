var React = require('react');
var Card = require('material-ui/lib/card/card');
var CardMedia = require('material-ui/lib/card/card-media');
var CardTitle = require('material-ui/lib/card/card-title');
var Colors = require('material-ui/lib/styles/colors');

var ProductItem = React.createClass({
	render: function(argument) {
		var style = this.getStyle();
		return (
			<Card style={this.props.style}>
				<CardMedia>
					<img style={style.img} src={this.props.item.pic}/>
				</CardMedia>
				<div style={style.desc}>
					<span style={style.descTitle}>{this.props.item.title}</span>
					<span style={style.descPrice}>{this.props.item.id}</span>
					<span style={style.descPrice}>{this.props.item.size}</span>
					<span style={style.descPrice}>{this.props.item.sPrice}</span>
					<span style={style.descPrice}>{this.props.item.mPrice}</span>
				</div>
			</Card>
			);
	},
	getStyle: function(){
		return {
			img: {
				width: '228px',
				height: '171px'
			},
			desc: {
				padding: '16px'
			},
			descTitle: {
				fontSize: 20,
				color: Colors.darkBlack,
				display: 'block',
				marginBottom: '5px'
			},
			descPrice: {
				fontSize: 16,
				color: Colors.lightBlack,
				display: 'block'
			}
		}
	}
});

module.exports = ProductItem;