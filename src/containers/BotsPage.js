import React from "react";
import BotCollection from "./BotCollection.js"
import YourBotArmy from "./YourBotArmy.js"
import BotSpecs from "../components/BotSpecs.js"

const URL = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  constructor(){
    super()
    this.state = {
      robotList: [],
      myRobots: []
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        robotList: data
      })
    })
  }

addRobot = (bot) => {
if(!this.state.myRobots.includes(bot)){
  this.setState({
    myRobots: [...this.state.myRobots, bot]
  })
}
}

removeRobot = (bot) => {
  let newRobots = this.state.myRobots.filter((bb)=>{
    return bot !== bb
  })
  this.setState({
    myRobots: newRobots
  })
}

renderBotCard = (bot) => {
    return(
      <BotSpecs bot={bot}/>
    )
}

  render() {

const {robotList, myRobots} = this.state

    return (
      <div>
        {/* put your components here */}
        <BotCollection
          robotList={robotList}
          addRobot={this.addRobot}
          renderBotCard={this.renderBotCard}
          />
        <YourBotArmy
          myRobots={myRobots}
          removeRobot={this.removeRobot}
          />
      </div>
    );
  }

}

export default BotsPage;
