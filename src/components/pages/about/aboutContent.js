var React = require('react');
var Card = require('material-ui/lib/card/card');
var CardMedia = require('material-ui/lib/card/card-media');
var CardTitle = require('material-ui/lib/card/card-title');
var CardText = require('material-ui/lib/card/card-text'); 
var Colors = require('material-ui/lib/styles/colors');
var Paper = require('material-ui/lib/paper');
var IconTextField = require('./iconTextField');
var AHome = require('material-ui/lib/svg-icons/action/home');
var ASPhone = require('material-ui/lib/svg-icons/action/settings-phone');
var APIdentity = require('material-ui/lib/svg-icons/action/perm-identity');
var ASNotes = require('material-ui/lib/svg-icons/action/speaker-notes');

var AboutContent = React.createClass({
	render: function(){
		var styles = {
				text: {
					fontSize: 16,
					color: Colors.lightBlack
				},
				factory: {
					paddingTop: 16,
					paddingRight: 16,
	                paddingBottom: 5,
	                paddingLeft: 16
				},
				factoryTitle: {
					fontSize: 20
				},
				divider: {
					margin:0,
					marginTop:'-1px',
					marginLeft:0,
					height:'1px',
					border:'none',
					backgroundColor:'#e0e0e0'
				}
			},
			textJsx = this.props.jsonData.desc.map(function(text){
				return (<p style={styles.text}>{text}</p>);
			}),
			Divider = (<hr style={styles.divider} />);
		return (
			<Card>
				<CardTitle title={this.props.jsonData.title} />
				<CardText>
					{textJsx}
					<Paper zDepth={4}>
						<CardTitle title={this.props.jsonData.factory} style={styles.factory} titleStyle={styles.factoryTitle} />
						<IconTextField 
							icon={<AHome />} 
							textTitle={this.props.jsonData.addr} 
							textDesc={this.props.jsonData.addrText} />
						{Divider}
						<IconTextField 
							icon={<ASPhone />} 
							textTitle={this.props.jsonData.tel} 
							textDesc={this.props.jsonData.telText} />
						{Divider}
						<IconTextField 
							icon={<APIdentity />} 
							textTitle={this.props.jsonData.linkman} 
							textDesc={this.props.jsonData.linkmanText} />
						{Divider}
						<IconTextField 
							icon={<ASNotes />} 
							textTitle={this.props.jsonData.email} 
							textDesc={this.props.jsonData.emailText} />
					</Paper>
				</CardText>
			</Card>
			);
	}
});

module.exports = AboutContent;