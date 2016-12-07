var React = require('react');
var Gallery = require('react-photo-gallery');
var PHOTO_SET = require('./photos.json');

var Photo = React.createClass({
  render(){
    var divStyle = {

    }

    return(
      <div className="container-fluid" style={{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}}>
        <div className="panel panel-default" style={{margin:"auto", borderRadius:0, background: "-webkit-linear-gradient(#f8f8f8, #fff)"}}>
          <div style={{padding:5}}>
            <Gallery photos={PHOTO_SET} lightboxShowImageCount={true}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Photo;
