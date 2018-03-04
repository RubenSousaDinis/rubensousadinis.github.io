import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { Link } from 'react-router-dom'
import { Container, Header, Icon } from 'semantic-ui-react'

import './travelPhotos.css'

const photos = [
  { src: require('../../img/photos/travel/amsterdam_1.jpg'), width: 3, height: 4 },
  { src: require('../../img/photos/travel/amsterdam_2.jpg'), width: 4, height: 3 },
  { src: require('../../img/photos/travel/belgium_1.jpg'), width: 3, height: 4 },
  { src: require('../../img/photos/travel/belgium_2.jpg'), width: 3, height: 4 },
  { src: require('../../img/photos/travel/budapest_1.jpg'), width: 4, height: 3 },
  { src: require('../../img/photos/travel/budapest_2.jpg'), width: 4, height: 3 },
  { src: require('../../img/photos/travel/budapest_3.jpg'), width: 4, height: 3 },
  { src: require('../../img/photos/travel/budapest_4.jpg'), width: 3, height: 4 },
  { src: require('../../img/photos/travel/budapest_5.jpg'), width: 4, height: 3 },
  { src: require('../../img/photos/travel/prague_1.jpg'), width: 3, height: 4 },
  { src: require('../../img/photos/travel/prague_2.jpg'), width: 4, height: 3 },
  { src: require('../../img/photos/travel/prague_3.jpg'), width: 4, height: 3 }
];


export default class TravelPhotos extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
        <Container>
            <div className='back-arrow-wrapper'>
                <Link to={'/'}>
                    <Icon size='medium' name='arrow left' />
                    Back to Homepage
                </Link>
            </div>
            <Header style={{textAlign: 'center'}} as='h1'>{ 'Trips Gallery' }</Header>
            <Gallery photos={photos} onClick={this.openLightbox} />
            <Lightbox images={photos}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
      </Container>
    )
  }
}
