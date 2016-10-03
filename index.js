import React from 'react'
import { render } from 'react-dom'
import { Nav,Navbar,NavItem,NavDropdown,MenuItem,Tab,Tabs,Row,Col } from 'react-bootstrap';
import { browserHistory,Router,Route,IndexRoute,Link } from 'react-router'

const NavMainHeader = React.createClass({
  handleSelect : (select) => select=1,

  render(){
    return(
      <Navbar fixedTop={true}>
        <Nav bsStyle="pills" fixedTop={true}/*activeKey={3} onSelect={this.handleSelect}*/>
          <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
          //TODO Linkを継承したActiveを付加するクラスを追加する
          <NavItem eventKey={2} componentClass={Link} to="/" title="Item">NavItem 2 content</NavItem>

          <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        </Nav>
      </Navbar>
    )
  }
});

const NavHeader = React.createClass({
  render(){
    return(
   <Navbar fixedBottom={true}>
     <Navbar.Header>
      <Navbar.Brand>
        Mains
      </Navbar.Brand>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
    </Navbar.Header>
{/*    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>*/}
  </Navbar>
      )
  }
});

const ControlledTabs = React.createClass({
  getInitialState() {
    return {
      key: 1
    };
  },

  handleSelect(key) {
    alert('selected ' + key);
    this.setState({key});
  },

  render() {
    return (
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
        <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
      </Tabs>
    );
  }
});

const App = React.createClass({
  render() {
    return (
      <div>
        <NavMainHeader />
        <ControlledTabs />
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
  <Route path="/" component={NavHeader}>
    <IndexRoute component={ControlledTabs} />
  </Route>
  </Router>
), document.getElementById('app'))