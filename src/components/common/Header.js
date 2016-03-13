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
    let navBaseClass = 'mobilelinks nav navbar-nav visible-xs'
    let navClass = visible ? navBaseClass + ' visible' : navBaseClass
    let overlayClass = visible ? overlayBaseClass + ' visible' : overlayBaseClass
    return (
      <header ref="header">
        <div className="navigation">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" onTouchTap={this.show}>
                  <span className="icon icon-bars"></span>
                </button>
                <a className="navbar-toggle navbar-contact visible-xs" href="tel:+14082140418">
                  <span className="icon icon-phone"></span>
                </a>
                <Link to="/" className="navbar-brand" onClick={(e) => e.preventDefault()} onTouchTap={() => history.push('/')}>Express Global</Link>
              </div>

              <ul className="links nav navbar-nav navbar-right hidden-xs">
                <li>
                  <Link to="about" activeClassName="active" onTouchTap={() => history.push('/about')}>Who we are</Link>
                </li>
                <li>
                  <Link to="services" activeClassName="active" onTouchTap={() => history.push('/services')}>What we do</Link>
                </li>
                <li>
                  <Link to="products" activeClassName="active" onTouchTap={() => history.push('/products')}>Products</Link>
                </li>
                <li>
                  <Link to="careers" activeClassName="active" onTouchTap={() => history.push('/careers')}>Careers</Link>
                </li>
                <li>
                  <Link to="contact" activeClassName="active" onTouchTap={() => history.push('/contact')}>Get in touch</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className={overlayClass}></div>
          <ul className={navClass}>
            <li>
              <Link to="about" activeClassName="active" onClick={(e) => {e.preventDefault()}} onTouchTap={() => history.push('/about')}>
                <span className="icon icon-bullhorn visible-xs"></span>Who we are
              </Link>
            </li>
            <li>
              <Link to="services" activeClassName="active" onClick={(e) => {e.preventDefault()}} onTouchTap={() => history.push('/services')}>
                <span className="icon icon-institution visible-xs"></span>What we do
              </Link>
            </li>
            <li>
              <Link to="join" activeClassName="active" onClick={(e) => {e.preventDefault()}} onTouchTap={() => history.push('/join')}>
                <span className="icon icon-life-ring visible-xs"></span>Who we help
              </Link>
            </li>
            <li>
              <Link to="contact" activeClassName="active" onClick={(e) => {e.preventDefault()}} onTouchTap={() => history.push('/contact')}>
                <span className="icon icon-paper-plane visible-xs"></span>Get in touch
              </Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
