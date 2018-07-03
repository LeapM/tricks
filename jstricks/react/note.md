# React Note

## Component Property typechekcing 
React component supports two optional property to define component property
1. static propTypes
`import PropTypes from 'prop-types';
statics.propTypes ={
    name:propType.string
}`
2. static defaultProps
`statics.defaultProps = {
    name:'Stranger'
}`

[TypeChecking Document Link](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)
## How to add context support
Context Provider needs to implement two things:
1. static property 
`statics.childContextTypes = {
  color: PropTypes.string
};`

2. instance method 
`instance.getChildContext() {
    return {color: "purple"};
  }`

Context consumer need to implement static property contextTypes
1. statics property
 `statics.contextTypes = {
  color: PropTypes.string
};`
2. use in the compoment
`this.context.color`

[Context Document Link](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)

## Component Life Cycle

![oldlifecyclepicture](https://cdn-images-1.medium.com/max/1600/1*k2gH2PzBBmKB9Ov5qrPoqw.png)

![newlifecyclpicture](https://cdn-images-1.medium.com/max/1600/1*4OYhCjUQQtK0tR0SDeA9GA.jpeg)
mount
1. `constructor`
2. `componentWillMount` (will r**removed** from react17)

cannnot call setState 
3. `render`
4. `componentDidMount`

update
1. `comonentWillReceiveProps(nextProps)` replaced by `getDerivedStateFromProps`

here we have access to both the nextProps and this.props. This is not called on initial render cause of no previous props to compare

can call setState
2. `shouldComponentUpdate`
  if this return false, the following steps won't be called

3. `componentWillUpdate(nextProps, nextState)` (will **removed** from react17)

This is to change if the component will update. will always return a boolean. it is an awesome place to improve performance to avoid necessary re rending
  cannot call setState here

4. `render`
5. `componentDidUpdate`

we do the same thing as componnentDidMount

unmount

1. ` componentWillUnmount`

remove the event listener and other house keeping job


---
## Third Party Dom Library and Ref

    class Tags extends React.Component {
      //pass the control to dom library
      componentDidMount() {
        this.list = $(this.refs.list);
        this.list.tagit();
      }
      //stop react from rerendering UI
      shouldComponentUpdate() {
        return false;
      }
      //Update the UI by third party library
      componentWillReceiveProps(newProps) {
        this.list.tagit('createTag', newProps.newTag);
      }
      render() {
        //instead of ref='list', better to use call back ref={(list) => { this.list = list; }}
        return (
          <ul ref='list'>
          { this.props.tags.map((tag, i) => <li key={ i }>{ tag } </li>) }
          </ul>
        );
      }
    };

The ref attribute takes a callback function, and the callback will be executed immediately after the component is mounted or unmounted.

Ref also supports string attribute. String attribute is considered legacy. The component can be refered  as this.refs.<stringname> in this case.

Ref can be used on native dom and component class, but not functional component
