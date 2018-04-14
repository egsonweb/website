import React, { Component } from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { Link } from "react-router";
import ga from "react-ga";

class Careers extends Component {
	componentDidMount() {
		const { routing } = this.props;
		ga.pageview(routing.path);
	}

	render() {
		return (
			<div className="careers">
				<Helmet title="Careers" />
				<div className="heading">
					<div className="container">
						<div className="row">
							<div className="col-sm-5">
								<h2 className="title title-big white">
									Seeking True <br /> Outstanding Talent
								</h2>
							</div>{" "}
							<div className="col-sm-7">
								<p className="title-desc white">
									We look for inquisitive people with positive attitudes who are
									passionate about their work, thrive on collaboration, teamwork
									and make a difference for our clients.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="target container no-padding-lr">
					<div className="row">
						<h2 className="title text-center"> Careers </h2>
						<hr className="title-border" />
						<div className="col-sm-12">
							<p className="text-center">
								Enabling great people to succeed is at the core of who we
								are.Working for us means working on the best projects with the
								best people helping leading businesses better themselves in
								order to stay ahead.
							</p>
						</div>
					</div>
				</div>

				<div className="jobs container no-padding-lr">
					<div className="row">
						<div className="job col-sm-12">
							<a href="#">
								<div className="job-what">
									<h4 className="job-title"> Software Engineer </h4>
									<p className="job-loc"> Fremont, CA </p>
								</div>
								<div className="job-details">
									<div className="job-description">
										<h5>Job Description</h5>
										<p>
											Express Global Solutions is seeking a software engineer to
											analyze, design, develop, test, and implement software
											applications, modules, and databases using IBM Integration
											Designer/Business Process Manager, Java, JavaScript,
											Service Now, WebSphere, Oracle 9i/10g/11i, LDAP, TCP,
											HTTP, JDBC, and XML. Understand and gather
											users/applications’ functional and technical requirements.
											Prepare coding standards documents, issue trackers, and
											code review documents. Prepare and create design documents
											and test plans. Test and troubleshoot programs and
											applications and ensure quality. Fix and resolve problems
											in application’s functionality, user interface and
											performance. Prepare documentation. Provide support. May
											require travel to unanticipated work locations.
										</p>
									</div>
									<div className="job-type">
										<h5>Position</h5>
										<p>Contract • Full Time</p>
									</div>
									<div className="job-responsibilities">
										<h5>Responsibilities</h5>
										<ul>
											<li>
												Determines operational feasibility by evaluating
												analysis, problem definition, requirements, solution
												development, and proposed solutions.
											</li>
											<li>
												Documents and demonstrates solutions by developing
												documentation, flowcharts, layouts, diagrams, charts,
												code comments and clear code.
											</li>
											<li>
												Prepares and installs solutions by determining and
												designing system specifications, standards, and
												programming.
											</li>
											<li>
												Improves operations by conducting systems analysis;
												recommending changes in policies and procedures.
											</li>
											<li>
												Obtains and licenses software by obtaining required
												information from vendors; recommending purchases;
												testing and approving products.
											</li>
											<li>
												Updates job knowledge by studying state-of-the-art
												development tools, programming techniques, and computing
												equipment; participating in educational opportunities;
												reading professional publications; maintaining personal
												networks; participating in professional organizations.
											</li>
											<li>
												Protects operations by keeping information confidential.
											</li>
											<li>
												Provides information by collecting, analyzing, and
												summarizing development and service issues.
											</li>
											<li>
												Accomplishes engineering and organization mission by
												completing related results as needed.
											</li>
											<li>
												Develops software solutions by studying information
												needs; conferring with users; studying systems flow,
												data usage, and work processes; investigating problem
												areas; following the software development lifecycle.
											</li>
										</ul>
									</div>
									<div className="job-qualifications">
										<h5>Qualifications</h5>
										<ul>
											<li>
												Bachelor of Science in computer science,
												computer/management information systems,
												electrical/electronic engineering, mathematics, or
												related field and relevant 5 years of experience.
											</li>
											<li>
												Software developer, systems/database/network
												administrator/engineer, systems/programmer analyst, or
												related field.
											</li>
										</ul>
									</div>
								</div>
							</a>
						</div>
						<div className="job col-sm-12">
							<a href="#">
								<div className="job-what">
									<h4 className="job-title"> Systems Administrator </h4>
									<p className="job-loc"> Fremont, CA </p>
								</div>
								<div className="job-details">
									<div className="job-description">
										<h5>Job Description</h5>
										<p>
											Express Global Solutions is seeking a system administrator
											to design, migrate, administer, upgrade, install, and
											configure storage and database systems and solutions using
											NetApp storage systems and Snap technologies such as Snap
											Vault, OSSV, and Mirror, LVM Migration, DTA Tool, VMotion,
											MicroStrategy, Oracle, Teradata, SQL Server, and RDBMS.
											Troubleshoot issues. Establish and maintain sound backup
											and recovery policies and procedures, and create test/plan
											scenarios. Implement and maintain systems/database
											security. Develop and maintain database or system specific
											scripts such as load, clone, standby, purge, report etc.
											May require traveling to unanticipated work locations.
										</p>
									</div>
									<div className="job-type">
										<h5>Position</h5>
										<p>Contract • Part Time • Full Time</p>
									</div>
									<div className="job-responsibilities">
										<h5>Responsibilities</h5>
										<ul>
											<li>Desktop Support for 400 clients </li>
											<li>
												Installation and removal of software applications{" "}
											</li>
											<li>
												Installation and removal of computer hardware, ie
												monitors, PC, hard drives, mice{" "}
											</li>
											<li>and keyboards, speakers, web cams, </li>
											<li>Hard drive encryption for PC and laptops </li>
											<li>
												Use proper naming convention for PC/laptops added onto
												the domain{" "}
											</li>
											<li>Joining PC/laptops to the domain </li>
											<li>Backup up user data </li>
											<li>Networking of a printer Local and Office Network </li>
											<li>
												Physical installation of Ethernet cable, face plates and
												jacks{" "}
											</li>
											<li>Punching down Ethernet cable to jacks </li>
											<li>
												Troubleshooting Ethernet connections, confirming proper
												connectivity to the jack{" "}
											</li>
											<li>
												Virus removal and security reporting per University
												policy{" "}
											</li>
											<li>
												Responsible to check back-up jobs, weekly assess,
												remove, and replace back-up tapes{" "}
											</li>
											per the Department/University policy.
											<li>
												Maintained composure and patience in face of difficult
												customer situations.{" "}
											</li>
											<li>
												Create and update current Windows image on the server{" "}
											</li>
											<li>Deploy current Windows image to desktop clients </li>
											<li>
												Active Directory, creating user accounts and computer
												accounts{" "}
											</li>
											<li>
												Ensure both user accounts and computers are in the
												proper OU{" "}
											</li>
											<li>OU Management </li>
											<li>
												Creation and deployment of shared drives and shared
												printers{" "}
											</li>
											<li>Lead multiple projects </li>
											<li>Virtual Machines</li>
										</ul>
									</div>
									<div className="job-qualifications">
										<h5>Qualifications</h5>
										<ul>
											<li>
												Master of Science in CS, C/MIS, Electrical/Electronic
												Engineering, Systems/Database Administration or related
												field with 2 years of experience.
											</li>
											<li>
												Network/storage administrator, systems engineer,
												database administrator or related field.
											</li>
										</ul>
									</div>
								</div>
							</a>
						</div>
						<div className="job col-sm-12">
							<a href="#">
								<div className="job-what">
									<h4 className="job-title"> Technical Lead </h4>
									<p className="job-loc"> Fremont, CA </p>
								</div>
								<div className="job-details">
									<div className="job-description">
										<h5>Job Description</h5>
										<p>
											Express Global Solutions is seeking a technical lead to
											oversee technical plans, design and develop the
											architecture, implement complex software applications. The
											candidates must have strong focus and hands on experience
											on using DataPower/WebSphere, Oracle V8i/9i/10i, Denodo,
											JavaScript, PL/SQL, Tomcat, MySQL, Teradata, Talend, MSTR,
											Webservices, SOAP, Mongo DB, TCP/IP, DNS, LAN, SSH, HTTP,
											MSTR, and Hadoop.
										</p>
									</div>
									<div className="job-type">
										<h5>Position</h5>
										<p>Contract • Part Time</p>
									</div>
									<div className="job-responsibilities">
										<h5>Responsibilities</h5>
										<ul>
											<li>
												Coordinate technical aspects of application/database
												development, configuration and deployment.
											</li>
											<li>
												Outline development process steps and guide team
												members.
											</li>
											<li>
												Lead consultation with applications/project management
												for requirements, specifications and standards.
											</li>
											<li>
												Provide solutions to technical issues, responsible for
												development schedules and ensure software delivery, meet
												technical specifications and design requirements.
											</li>
											<li>
												Manage availability, latency, scalability and efficiency
												of services by engineering reliability into software and
												systems.
											</li>
											<li>
												Review and influence new and evolving design,
												architecture, standards, and methods for operating
												services and systems.
											</li>
											<li>
												Develop a good grasp of the operations environment to
												distill knowledge into common architectural patterns
												that can be applied as common infrastructure across
												platforms.
											</li>
											<li>
												Work collaboratively across cross - functional teams,
												conduct design and code reviews as part of the solution
												development process.
											</li>
											<li>
												Lead or coordinate a group of cross - functional
												engineers in delivering a project or platform through
												its lifecycle to production deployment.
											</li>
											<li>
												May require travel to unanticipated work locations.
											</li>
										</ul>
									</div>{" "}
									<div className="job-qualifications">
										<h5>Qualifications</h5>
										<ul>
											<li>
												Bachelor of Science in computer science,
												computer/management information systems,
												electrical/electronic engineering, mathematics, or
												related field.
											</li>
											<li>
												Minimum 5 years of experience in software engineering
												and development, database networking, systems
												administration or related field.
											</li>
											<li>
												Proven trouble shooting and analytical skills are
												required, ability to develop technical documentation for
												knowledge sharing and communication across teams is also
												essential.
											</li>
										</ul>
									</div>
								</div>
							</a>
						</div>
						<div className="job col-sm-12">
							<a href="#">
								<div className="job-what">
									<h4 className="job-title"> Web Systems Engineer </h4>
									<p className="job-loc"> Fremont, CA </p>
								</div>{" "}
								<div className="job-details">
									<div className="job-description">
										<h5>Job Description</h5>
										<p>
											Express Global Solutions is seeking a Web Systems Engineer
											Admin that is an expert in WebLogic application
											server.This is a long term opportunity. The candidates
											must have a strong focus on Tools, Software Configuration
											Management and Infrastructure Management.This position
											requires extensive knowledge of J2EE standards, best
											practices, hands - on experience with administration and
											management of tools and various infrastructure stacks.
										</p>
									</div>

									<div className="job-type">
										<h5>Position</h5>
										<p> Contract • Part Time </p>
									</div>

									<div className="job-responsibilities">
										<h5>Responsibilities</h5>{" "}
										<ul>
											<li>
												Manage availability, latency, scalability and efficiency
												of services by engineering reliability into software and
												systems.
											</li>
											<li>
												Respond to and resolve emergent service problems; build
												monitoring tools and automation to prevent problem
												recurrence.
											</li>
											<li>
												Review and influence new and evolving design,
												architecture, standards, and methods for operating
												services and systems.
											</li>
											<li>
												Participate in software and system performance analysis
												and tuning, service capacity planning and demand
												forecasting.
											</li>
											<li>
												Deploy and manage upgrades to application servers, web -
												servers, load balancers and other Infrastructure.
											</li>
											<li>
												Develop a good grasp of the operations environment to
												distill knowledge into common architectural patterns
												that can be applied as common infrastructure across
												platforms.
											</li>
											<li>
												Work collaboratively across cross - functional teams,
												conduct design and code reviews as part of the solution
												development process.
											</li>
											<li>
												Lead or coordinate a group of cross - functional
												engineers in delivering a project or platform through
												its lifecycle to production deployment.
											</li>
										</ul>
									</div>

									<div className="job-qualifications">
										<h5>Qualifications</h5>{" "}
										<ul>
											<li>
												Bachelor’ s degree(or the equivalent) in Computer
												Science, Information Systems, Network / Systems
												Administration, Electrical Engineering or related field
												and / or related experience.
											</li>
											<li>
												2 + years of experience with Web and Application Servers
												including WebLogic 10.3.x or 9. x, TomCat, Sun One /
												iPlanet.
											</li>
											<li>
												2 + years experience in analyzing and tuning
												applications in the areas such as memory management,
												process or thread management, resource management(JDBC
												Connection Pools, JMS etc).
											</li>
											<li>
												2 + years of experience with Web Sphere MQ
												configuration, troubleshooting and monitoring.
											</li>
											<li>
												2 + years of experience with tools like Chef, Puppet
												etc. - 3 + years of experience with Willy Introscope
												configuration, monitoring and troubleshooting - 3 +
												years of experience with SQL.
											</li>
											<li>
												2 + years experience working with Development and
												Operations teams that support high volume 24 x7 mission
												critical systems - Ability to mentor junior and less
												experienced engineers and communicate effectively with
												cross - functional teams is essential.
											</li>
											<li>
												Proven trouble shooting and analytical skills are
												required, ability to develop technical documentation for
												knowledge sharing and communication across teams is also
												essential.
											</li>
										</ul>
									</div>
								</div>
							</a>
						</div>
						<div className="job col-sm-12">
							<a href="#">
								<div className="job-what">
									<h4 className="job-title"> Designer / Frontend Engineer </h4>
									<p className="job-loc"> San Jose, CA </p>
								</div>

								<div className="job-details">
									<div className="job-type">
										<h5>Position</h5>
										<p> Contract • Full Time • Part Time </p>
									</div>

									<div className="job-skills">
										<h5>Skills</h5>
										<p>
											Javascript, User Experience Design, HTML, CSS, React.js
										</p>
									</div>
								</div>
							</a>
						</div>
						<div className="job col-sm-12">
							<a href="#">
								<div className="job-what">
									<h4 className="job-title"> Software Engineer </h4>
									<p className="job-loc"> San Jose, CA </p>
								</div>{" "}
								<div className="job-details">
									<div className="job-type">
										<h5>Position</h5>
										<p> Contract • Full Time • Part Time </p>
									</div>
									<div className="job-skills">
										<h5>Skills</h5>
										<p>
											Python, Java, Hadoop, Distributed Systems, Mapreduce,
											Hbase, Middleware, Unix / Linux
										</p>
									</div>
								</div>
							</a>
						</div>{" "}
						<div className="job col-sm-12">
							<a href="#">
								<div className="job-what">
									<h4 className="job-title"> Systems Engineer </h4>
									<p className="job-loc"> Fremont, CA </p>
								</div>
								<div className="job-details">
									<div className="job-type">
										<h5>Position</h5>
										<p> Contract • Part Time </p>
									</div>{" "}
									<div className="job-skills">
										<h5>Skills</h5>
										<p>
											Node.js, Linux, Continuous Integration, Amazon Web
											Services, docker
										</p>
									</div>
								</div>
							</a>
						</div>{" "}
						<div className="job col-sm-12">
							<a href="#">
								<div className="job-what">
									<h4 className="job-title"> DevOps Engineer </h4>
									<p className="job-loc"> San Jose, CA </p>
								</div>{" "}
								<div className="job-details">
									<div className="job-type">
										<h5>Position</h5>
										<p> Contract • Full Time </p>
									</div>{" "}
									<div className="job-skills">
										<h5>Skills</h5>
										<p>
											Linux, Golang, Chef, HAProxy, SaltStack, Ansible, Consul,
											ngnix
										</p>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>

				<div className="cblock container no-padding-lr">
					<div className="row">
						<div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
							<p className="title-desc title-desc-medium text-left">
								To contact with careers or apply for jobs, please mail your
								resume to
								<a href="mailto:hr@egsonweb.com"> hr @egsonweb.com </a>
								or get in touch with us.
							</p>
						</div>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<Link
								to="contact"
								className="pull-right btn btn-primary btn-lg btn-arrow btn-big"
							>
								Contact Us
								<span className="icon icon-arrow-circle-right" />
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
	};
}

export default connect(mapStateToProps)(Careers);
