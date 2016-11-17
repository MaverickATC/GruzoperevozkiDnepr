var React = require('react');
var Gallery = require('react-photo-gallery');

var Photo = React.createClass({
  render(){
    var divStyle = {

    }

    return(
      <div className="container-fluid" style={{paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}}>
        <div className="panel panel-default" style={{margin:"auto"}}>
          <div style={{padding:5}}>
            <Gallery photos={PHOTO_SET} lightboxShowImageCount={true}/>
          </div>
        </div>
      </div>
    );
  }
});

var PHOTO_SET = [
  {
    src: './img/1.jpg',
    width: 1280,
    height: 960,
    aspectRatio: 1.33,
    lightboxImage:{
    src: './img/1.jpg'
    }
  },
  {
    src: './img/2.jpg',
    width: 1280,
    height: 960,
    aspectRatio: 1.33,
    lightboxImage:{
    src: './img/2.jpg'
    }
  },
  {
    src: './img/3.jpg',
    width: 1280,
    height: 960,
    aspectRatio: 1.33,
    lightboxImage:{
    src: './img/3.jpg'
    }
  },
  {
    src: './img/4.jpg',
    width: 1280,
    height: 960,
    aspectRatio: 1.33,
    lightboxImage:{
    src: './img/4.jpg'
    }
  },
  {
    src: './img/5.jpg',
    width: 1280,
    height: 960,
    aspectRatio: 1.33,
    lightboxImage:{
    src: './img/5.jpg'
    }
  },
  {
    src: './img/6.jpg',
    width: 1280,
    height: 960,
    aspectRatio: 1.33,
    lightboxImage:{
    src: './img/6.jpg'
    }
  },
  {
    src: './img/1.jpg',
    width: 1280,
    height: 960,
    aspectRatio: 1.33,
    lightboxImage:{
    src: './img/1.jpg'
    }
  },
  {
    src: './img/2.jpg',
    width: 1280,
    height: 960,
    aspectRatio: 1.33,
    lightboxImage:{
    src: './img/2.jpg'
    }
  },
  {
    src: './img/3.jpg',
    width: 1280,
    height: 960,
    aspectRatio: 1.33,
    lightboxImage:{
    src: './img/3.jpg'
    }
  },
  {
    src: './img/4.jpg',
    width: 1280,
    height: 960,
    aspectRatio: 1.33,
    lightboxImage:{
    src: './img/4.jpg'
    }
  },
  {
    src: './img/5.jpg',
    width: 1280,
    height: 960,
    aspectRatio: 1.33,
    lightboxImage:{
    src: './img/5.jpg'
    }
  },
  {
    src: './img/6.jpg',
    width: 1280,
    height: 960,
    aspectRatio: 1.33,
    lightboxImage:{
    src: './img/6.jpg'
    }
  }
];

module.exports = Photo;
