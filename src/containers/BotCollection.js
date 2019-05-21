import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.robotList.map((bot)=> {
            return <BotCard
                    bot={bot}
                    onClick={this.props.selectBot}
                    renderBotCard={this.props.renderBotCard}
                    />
          })}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
