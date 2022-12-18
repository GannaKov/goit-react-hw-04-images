import React from 'react';
import { ImageGalleryItem, ImageGalleryItemImage} from './GalleryItem.styled';
 import PropTypes from 'prop-types';


export function ImgGalleryItem({onImgClick, shereSrcForModal,photo:{webformatURL, largeImageURL,tags,} }) {
 
  return (
   <ImageGalleryItem  > 
   <ImageGalleryItemImage src={webformatURL} alt={tags} onClick={() => {
        onImgClick();
        shereSrcForModal(largeImageURL, tags) 
        
      }}/>
   </ImageGalleryItem>
  );
}
ImgGalleryItem.propTypes ={
  onImgClick:PropTypes.func.isRequired,
  shereSrcForModal:PropTypes.func.isRequired,
   photo:PropTypes.object
  //  (
  //    PropTypes.shape({
  //   webformatURL:PropTypes.string.isRequired,
  //   largeImageURL:PropTypes.string.isRequired,
  //   tags:PropTypes.string.isRequired,
  //  }),
  // )
}
  // onImgClick:PropTypes.func.isRequired,
  //  shereSrcForModal:PropTypes.func.isRequired,
  //  photo:PropTypes.objectOf
  //  ( PropTypes.shape({
  //   webformatURL:PropTypes.string.isRequired,
  //   largeImageURL:PropTypes.string.isRequired,
  //   tags:PropTypes.string.isRequired,
  //  }),)
  
  // }