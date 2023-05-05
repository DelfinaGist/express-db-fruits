const React = require("react");
const DefaultLayout = require('../layout/Default');

class Index extends React.Component {
  render() {
    const { vegetables } = this.props;
    return(
      <DefaultLayout 
        title="Vegetables Index Page" 
        link="/vegetables/new" 
        text="Create a Vegetable"
      >
        <ul>
          {vegetables.map((vegetable, i) => {
            return (
              <li key={i}>
                The <a href={`/vegetables/${vegetable._id}`}>{vegetable.name}</a> is{" "}
                {vegetable.color} <br></br>
                {vegetable.readyToEat
                  ? `It is ready to eat`
                  : `It is not ready to eat`}
                <br />
                {/* Link to this specific vegetable's edit page */}
                <a href={`/vegetables/${vegetable._id}/edit`}>Edit This Vegetable</a>
                {/* This will be the delete button, it is a form because we need to make a request
                Can't use handleClick in server-side app */}
                <form
                  action={`/vegetables/${vegetable._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;