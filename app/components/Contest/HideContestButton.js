var React = require('react');
var Hide = require('../../hide')

var HideContestButton = React.createClass({
    render: function(){
      if(Hide.isHidden(this.props.details)){
        style = {"color": "#4caf50", "cursor": "pointer", "float": "right"};
        icon = "fa-check";
        action = "Unhide";
      }
      else{
        style = {"color": "#FF0000", "cursor": "pointer", "float": "right"};
        icon = "fa-times";
        action = "Hide";
      }

      if (this.props.visible){
        return (
          <i
            className={"fa " + icon + " fa-lg circular-border option-icon"}
            style={style}
            onClick={this.props.hideHandler}
            title={action + " this Contest"}
        />)
      }else{
        return null
      }
    }
});

module.exports = HideContestButton;
