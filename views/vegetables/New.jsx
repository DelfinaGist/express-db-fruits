const React = require("react");
const DefaultLayout = require("../layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout 
        title="New Page"
        link="/vegetables"
        text="Home"
      >
        <h1>Create a New Vegetable!</h1>
        <form action="/vegetables" method="POST">
          Name: <input type="text" name="name" />
          Color: <input type="text" name="color" />
          Is Ready To Eat: 
          <input 
            type="checkbox" 
            name="readyToEat" 
          /> 
          <input type="submit" value="Create Vegetable" />       
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;