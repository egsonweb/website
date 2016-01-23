import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import ga from 'react-ga'

class Contact extends Component {
  componentDidMount() {
    google.maps.event.addDomListener(window, 'load', this.initMap.bind(this));
    google.maps.event.addDomListener(window, 'resize', this.resizeMap.bind(this));
    this.initMap();
    const { routing } = this.props
    ga.pageview(routing.path)
  }

  initMap() {
    let marker, link, iw;
    let description, telephone, email, web, markericon;
    const mapOptions = {
        center: new google.maps.LatLng(37.4986797,-121.9308486),
        zoom: 11,
        zoomControl: false,
        disableDoubleClickZoom: false,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        },
        scaleControl: false,
        scrollwheel: false,
        panControl: false,
        streetViewControl: false,
        draggable : false,
        overviewMapControl: false,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
    }
    const mapElement = document.getElementById('egsmap');
    const map = this.map = new google.maps.Map(mapElement, mapOptions);
    const locations = [['Express Global Solutions', '', '408-214-0418', 'hr@egsonweb.com', 'http://egsonweb.com', 37.4986879, -121.9286704, 'https://mapbuildr.com/assets/img/markers/solid-pin-black.png']];
    for (let i = 0; i < locations.length; i++) {
      if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
      if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
      if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
      if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
      if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
      marker = new google.maps.Marker({
        icon: markericon,
        position: new google.maps.LatLng(locations[i][5], locations[i][6]),
        map: map,
        title: locations[i][0],
        desc: description,
        tel: telephone,
        email: email,
        web: web
      });
      if (web.substring(0, 7) != "http://") {
        link = "http://" + web;
      } else {
        link = web;
      }
      bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
      function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
        let infoWindowVisible = (function () {
          let currentlyVisible = false;
          return function (visible) {
            if (visible !== undefined) {
                currentlyVisible = visible;
            }
            return currentlyVisible;
          };
        }());
        iw = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function() {
          if (infoWindowVisible()) {
            iw.close();
            infoWindowVisible(false);
          } else {
            var html= "<div style='color:#000;background-color:#fff;padding:5px;width:240px;'><h4>"+title+"</h4><p>"+desc+"<p><p>"+telephone+"<p><a href='mailto:"+email+"' >"+email+"<a><a href='"+link+"'' >"+web+"<a></div>";
            iw = new google.maps.InfoWindow({content:html});
            iw.open(map,marker);
            infoWindowVisible(true);
          }
        });
        google.maps.event.addListener(iw, 'closeclick', function () {
          infoWindowVisible(false);
        });
      }
    }
  }

  resizeMap() {
    let self = this
    let center = self.map.getCenter()
    google.maps.event.trigger(self.map, 'resize')
    this.map.setCenter({lat: center.lat(), lng: center.lng()})
  }

  render() {
    return (
      <div className="contact">
        <Helmet title="Get in touch" />
        <div className="heading">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <h2 className="title title-big white">Get in touch<br />with us</h2>
              </div>
              <div className="col-sm-7">
                <p className="title-desc white">Say hello or Drop us a mail. We would be more than glad to assist you with all the information needed.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container no-padding-lr">
          <div className="row">
            <h2 className="title text-center">Say hello!</h2>
            <hr className="title-border" />
            <div className="col-sm-12">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <p>We welcome any communications related to Express Global Solutions, LLC. Please provide your full name, email address if you would like a response to your message. Our contact form is the best way to get in touch.</p>
                <p>If you are experiencing any technical difficulty with the website, please reach us by phone or fax numbers below.</p>
                <address>
                  <strong>Express Global Solutions, LLC.</strong><br />
                  975 Corporate Way<br />
                  Fremont, CA 94539<br />
                  <abbr title="Phone">P:</abbr> (408)-214-0418<br />
                  <abbr title="Fax">F:</abbr> (510)-689-2340<br />
                  <a href="mailto:hr@egsonweb.com">hr@egsonweb.com</a><br />
                </address>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <form autoComplete="off">
                  <div className="form-group">
                    <input type="text" className="form-control" id="fullname" placeholder="Full Name"/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" id="email" placeholder="Email Address"/>
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="message" id="message" cols="30" rows="6" placeholder="Type your message here"></textarea>
                  </div>
                  <button type="submit" className="btn-big btn-block btn btn-primary">Contact Us</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="egsmap"></div>
      </div>
    );
  }
}

function mapStateToProps({ routing }) {
  return {
    routing
  }
}

export default connect(mapStateToProps)(Contact)
