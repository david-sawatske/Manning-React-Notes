// include the React libraries (React and React-dom) in the head of your HTML file

// 2.2.1 //
// Creating ReactElements -  lightweight, virtual representation of a DOM Element
// page 33...

React.createElement(
  String / ReactClass type, // 1. type = What am I creating?
  [object props],           // 2. How should I configure it?
  [children...]             // 3. What does it contain?
) - > ReactElement

// 1. string that is the type of HTML el(“div”, “span”...) or a ReactClass
// 2. specifying which attributes will be defined on the HTML element
// 3. composable - nest, order, and even further nest other ReactElements


// listing 2.3
const container = document.getElementById('ourFirstApp');
const root =
  React.createElement('div', {},                   // parent 1
    React.createElement('h1', {}, "Hello, world!", // parent 2, child of 1
      React.createElement('a', {                   // parent 3, child of 2
          href: 'mailto:mark@ifelse.io' // anchor link, as in HTML
        },
        React.createElement('h1', {}, "React In Action"),         // child of 3
        React.createElement('em', {}, "...and now it really is!") // child of 3
      )
    )
  );
ReactDOM.render(root, container);


// 2.2.3 //
// Creating ReactClasses like ReactEls, but with more features
//  => state and lifecycle methods made available to the component and render
//     method from a “backing instance”.
//     - ie provides data storage and access for a specific component
//  => data, called props, can be used inside of the render method and elsewhere
//     in actions and logic
//     - can be used to specify properties of components at the time of creation
//     - can’t be modified within a component once specified

React.createClass(object specification) - > ReactClass
// what goes in the '(object specification)' parameter?
// FYI embeded data (via state and props) are is available to ReactClasses


// 2.2.4 //
// The 'render' Method - Class specification must implement
//  => object specification must include a render function
//    - embeded data (via state and props) are


// 2.2.5 //
// Property validation via PropTypes - validate what properties we’ll be using
//  => specify what your component needs to work
//  => prevent bugs and plan out the sorts of data our components will use
//  => validations will not raise error, just make us aware
//  => only does eval in development mode

// add a propTypes property to the ReactClass object specification

const container = document.getElementById('ourFirstApp');
class Post extends React.Component { // createing a Post class
  render() {
    return React.createElement( // create div el w- class Post
      'div', {
        className: 'post'
      },
      React.createElement(
        'h2', {
          className: 'postAuthor',
          id: this.props.id
        },
        this.props.user,     // 'this' is the actual component instance
        React.createElement( // used to access properties
          'span', {
            className: 'postBody' // use 'className' not class to
          },                      // not confuse w JS class keyword
          this.props.content // content prop is the inner content
        )                    // of the span el we are creating
      )
    );
  }
}

// setting the property validations
Post.propTypes = {
  user: PropTypes.string.isRequired,    // properties can be optional or
  content: PropTypes.string.isRequired, // required have a type, or have
  id: PropTypes.number.isRequired       // particular props on an object
};


const App = React.createElement(Post, {
  id: 1,                             // the second argument to .createElement
  content: ' said: This is a post!', // contains the data we pass into the
  user: 'mark'                       // component
});

ReactDOM.render(App, container);
