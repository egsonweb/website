import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    this.refs.header.addEventListener('touchend', this.hide);
  }

  componentWillUnmount() {
    this.refs.header.removeEventListener('touchend', this.hide);
  }

  show() {
    this.setState({ visible: true })
  }

  hide() {
    this.setState({ visible: false })
  }

  render() {
    const { visible } = this.state
    let { history } = this.props
    let overlayBaseClass = 'overlay'
    let navBaseClass = 'links nav navbar-nav navbar-right'
    let navClass = visible ? navBaseClass + ' visible' : navBaseClass
    let overlayClass = visible ? overlayBaseClass + ' visible' : overlayBaseClass
    return (
      <header ref="header">
        <div className="navigation">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className={overlayClass}></div>
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" onTouchTap={this.show}>
                  <span className="fa fa-bars"></span>
                </button>
                <a className="navbar-toggle navbar-contact visible-xs" href="tel:+14082140418">
                  <span className="fa fa-phone"></span>
                </a>
                <Link to="/" className="navbar-brand" onTouchTap={() => history.push('/')}>Express Global</Link>
              </div>

              <ul className={navClass}>
                <li>
                  <Link to="about" activeClassName="active" onTouchTap={() => history.push('/about')}>
                    <span className="fa fa-users visible-xs"></span>Who we are
                  </Link>
                </li>
                <li>
                  <Link to="services" activeClassName="active" onTouchTap={() => history.push('/services')}>
                    <span className="fa fa-institution visible-xs"></span>What we do
                  </Link>
                </li>
                <li>
                  <Link to="join" activeClassName="active" onTouchTap={() => history.push('/join')}>
                    <span className="fa fa-life-ring visible-xs"></span>Who we help
                  </Link>
                </li>
                <li>
                  <Link to="contact" activeClassName="active" onTouchTap={() => history.push('/contact')}>
                    <span className="fa fa-paper-plane visible-xs"></span>Get in touch
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
