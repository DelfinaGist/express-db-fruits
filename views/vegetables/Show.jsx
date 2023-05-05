const React = require("react");
const DefaultLayout = require("../layout/Default");

class Show extends React.Component {
  render() {
    const vegetable = this.props.vegetable;
    return (
      <DefaultLayout 
        title="Show Page"
        link="/vegetables"
        text="Home"
      >
          The {vegetable.name} is {vegetable.color} <br />
          {vegetable.readyToEat? 'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }
      </DefaultLayout>
    );
  }
}

module.exports = Show;