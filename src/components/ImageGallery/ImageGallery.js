import React , { Component }from 'react';
import toast from 'react-hot-toast'
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { LoadMoreBtn } from 'components/Button/Button';
import { ImgGalleryItem } from 'components/GalleryItem/GalleryItem'; 
//import { ErrorView } from 'components/ErrorView/ErrorView';
import { Loader } from 'components/Loader/Loader';
import { FetchFotos } from 'components/FetchFotos/FetchFotos';
import { ImageGallery } from './ImageGallery.styled';
import { autoscroll } from 'components/Autoscroll';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class ImgGallery extends Component{
  state={
    photos:[],
    status: Status.IDLE,
    error: null,
  totalHits:0,
  perPage:12}
 
  BASEURL = 'https://pixabay.com/api/';
KEY = '30040272-179178153c29e3da83ceec1ea';

componentDidUpdate(prevProps, prevState) {
  
  const prevWord = prevProps.searchWord;
  const nextWord = this.props.searchWord;
 const {page}=this.props;

  if ( prevWord !== nextWord || prevProps.page !==this.props.page) {
   

    this.setState({ status: Status.PENDING })


    FetchFotos(this.BASEURL,this.KEY,nextWord,page)
   .then(photos=>{
    if(photos.hits.length===0){toast.error('We did not find anything. Try again with a new word!');}
    if(this.props.page === 1){ 
     
      this.setState({ photos: photos.hits,
      status: Status.RESOLVED,
      totalHits: photos.totalHits })
      
     }
    else{ 
      this.setState({
      photos:[...prevState.photos,...photos.hits],  
      status: Status.RESOLVED,
    totalHits: photos.totalHits})
   
  }
    
   }
    
    
    )
   .catch( () => 
    {this.setState({  status: Status.REJECTED })
    toast.error("Ups... Something is wrong. Try again!",{duration: 4000,
      position: 'top-center'}, ) }
    )

}

if(this.props.page !== 1){;
  autoscroll()}
  
}


onLoadMoreClick = () => {
  this.props.loadMore();
};
 
render(){  
  const {photos, status,totalHits,perPage}=this.state;
  const totalPage = Math.ceil(totalHits / perPage);
  
const { onImgClick, shereSrcForModal} = this.props;
if(status==="pending"){return <Loader/>}


if (status === 'resolved') {
  return  (<>
    {photos &&
    (<div className="gallery">
      <ImageGallery  >
    {photos.map(photo => (
      <ImgGalleryItem  
      key={nanoid()} photo={photo} onImgClick={onImgClick} shereSrcForModal={shereSrcForModal}>
      </ImgGalleryItem>
    ))}
    </ImageGallery></div>)}
    
    {photos.length>0  && this.props.page<totalPage ? (<LoadMoreBtn  onLoadMoreClick={this.onLoadMoreClick} >Load More</LoadMoreBtn>):null}
    
    </>
  );
}}

}
ImgGallery.propTypes={    
  searchWord:PropTypes.string.isRequired,
  loadMore:PropTypes.func,
  page:PropTypes.number.isRequired,
  onImgClick:PropTypes.func,
  shereSrcForModal:PropTypes.func,
}
