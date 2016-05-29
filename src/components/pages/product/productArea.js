var React = require('react');
var ProductItem = require('./productItem');
var MaterialUi = require('material-ui');
var Styles = MaterialUi.Styles;
var Colors = Styles.Colors;

module.exports = React.createClass({
	getInitialState: function(){
		return {
			moreStatus: 1  //1:已收起 2:已展开
		}
	},
	render: function() {
		var products = this.props.products,
			typeItem = this.props.typeItem,
			jsonData = this.props.jsonData,
			len = products.length,
			moreStatus = this.state.moreStatus,
			style = {
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
				hideItem: {
					display: 'none',
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
				},
				more: {
					display:'block',
					marginBottom: '20px',
					marginTop: '-20px',
					height:'23px',
					lineHeight:'23px',
					background:Colors.cyan100,
					color:Colors.white,
					textAlign:'center'
				}
			};
		return (
				<div>
					<div>
						<span style={style.type}>{typeItem.title}</span>
						<hr style={style.divider}/>
					</div>
					{
						products.map(function(productItem,index){
							return (index > 3 && moreStatus === 1 ? null : <ProductItem style={style.item} item={productItem} />)
							// return (<ProductItem style={index > 3 && moreStatus === 1 ? style.hideItem : style.item} item={productItem} />);
						})
					}
					{
						len > 4 ? (
							<a href="javascript:void(0);" onClick={this.clickMore} style={style.more}>
								<span style={{display:'inline'}}>{jsonData.more[moreStatus]}</span>
							</a>
						) : ''
					}
					
				</div>
			)
	},
	clickMore: function(){
		var status = this.state.moreStatus;
		if (status === 1) {
			this.setState({moreStatus: 2});
		}else{
			this.setState({moreStatus: 1});
			var top = this.getDOMNode().offsetTop - 74;
			window.scroll(0, top < 0 ? 0 : top);
		}
	}
})
				