import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ga from 'react-ga'

class Careers extends Component {
  componentDidMount() {
    const { routing } = this.props
    ga.pageview(routing.path)
  }

  render() {
    return (
      <div className="careers">
        <Helmet title="Careers" />
        <div className="heading">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <h2 className="title title-big white">Seeking True<br />Outstanding Talent</h2>
              </div>
              <div className="col-sm-7">
                <p className="title-desc white">We look for inquisitive people with positive attitudes who are passionate about their work, thrive on collaboration, teamwork and make a difference for our clients.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="target container no-padding-lr">
          <div className="row">
            <h2 className="title text-center">Careers</h2>
            <hr className="title-border" />
            <div className="col-sm-12">
              <p className="text-center">Enabling great people to succeed is at the core of who we are. Working for us means working on the best projects with the best people helping leading businesses better themselves in order to stay ahead.</p>
            </div>
          </div>
        </div>

        <div className="jobs container no-padding-lr">
          <div className="row">
            <div className="job col-sm-4">
              <a href="#">
                <div className="job-what">
                  <h4 className="job-title">Designer/Frontend Engineer</h4>
                  <p className="job-loc">San Jose, CA</p>
                </div>
                <div className="job-details">
                  <div className="job-type">
                    <h5>Position</h5>
                    <p>Contract &bull; Full Time &bull; Part Time</p>
                  </div>
                  <div className="job-skills">
                    <h5>Skills</h5>
                    <p>Javascript, User Experience Design, HTML, CSS, React.js</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="job col-sm-4">
              <a href="#">
                <div className="job-what">
                  <h4 className="job-title">Software Engineer</h4>
                  <p className="job-loc">San Jose, CA</p>
                </div>
                <div className="job-details">
                  <div className="job-type">
                    <h5>Position</h5>
                    <p>Contract &bull; Full Time &bull; Part Time</p>
                  </div>
                  <div className="job-skills">
                    <h5>Skills</h5>
                    <p>Python, Java, Hadoop, Distributed Systems, Mapreduce, Hbase, Middleware, Unix/Linux</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="job col-sm-4">
              <a href="#">
                <div className="job-what">
                  <h4 className="job-title">Systems Engineer</h4>
                  <p className="job-loc">Fremont, CA</p>
                </div>
                <div className="job-details">
                  <div className="job-type">
                    <h5>Position</h5>
                    <p>Contract &bull; Part Time</p>
                  </div>
                  <div className="job-skills">
                    <h5>Skills</h5>
                    <p>Node.js, Linux, Continuous Integration, Amazon Web Services, docker</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="job col-sm-4">
              <a href="#">
                <div className="job-what">
                  <h4 className="job-title">DevOps Engineer</h4>
                  <p className="job-loc">San Jose, CA</p>
                </div>
                <div className="job-details">
                  <div className="job-type">
                    <h5>Position</h5>
                    <p>Contract &bull; Full Time</p>
                  </div>
                  <div className="job-skills">
                    <h5>Skills</h5>
                    <p>Linux, Golang, Chef, HAProxy, SaltStack, Ansible, Consul, ngnix</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="cblock container no-padding-lr">
          <div className="row">
            <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
              <p className="title-desc title-desc-medium text-left">To contact with careers or apply for jobs, please mail your resume to <a href="mailto:hr@egsonweb.com">hr@egsonweb.com</a> or get in touch with us.</p>
            </div>
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <Link to="contact" className="pull-right btn btn-primary btn-lg btn-arrow btn-big">
                Contact Us<span className="icon icon-arrow-circle-right"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ routing }) {
  return {
    routing
  }
}

export default connect(mapStateToProps)(Careers)
