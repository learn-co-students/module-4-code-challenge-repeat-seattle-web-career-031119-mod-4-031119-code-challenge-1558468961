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
      myRobots: [],
      currentBot: null,
      isLookingAtSingleBot: false
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
  return <BotSpecs bot={bot} />
}

selectBot = (bot) => {
  this.setState({
    currentBot: bot,
    isLookingAtSingleBot: true
  })
}

showArmy = () => {
  this.setState({
    currentBot: null,
    isLookingAtSingleBot: false
  })
}

renderBottomHalf = () => {
    if(this.state.isLookingAtSingleBot === true){
      return <BotSpecs
        bot={this.state.currentBot}
        addRobot={this.addRobot}
        showArmy={this.showArmy}
      />
    } else {
      return <BotCollection
        robotList={this.state.robotList}
        selectBot={this.selectBot}
        addRobot={this.addRobot}
        showArmy={this.showArmy}
        renderBotCard={this.renderBotCard}
      />
    }
}

  render() {

const {robotList, myRobots} = this.state

    return (
      <div>
        {/* put your components here */}
        <YourBotArmy
          myRobots={myRobots}
          removeRobot={this.removeRobot}
        />
        {this.renderBottomHalf()}
      </div>
    );
  }

}

export default BotsPage;
