import React , {  useState, useEffect}from 'react';
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
export const ImgGallery =({searchWord,loadMore,page,onImgClick,shereSrcForModal})=>{
  const  perPage =  12
  const [ photos, setPhotos] = useState([]); 
  const [ status, setStatus] = useState("Status.IDLE"); 
 // const [ error, setError] = useState(null); 
  const [  totalHits, setTotalHits] = useState(0); 
  const BASEURL = 'https://pixabay.com/api/';
const KEY = '30040272-179178153c29e3da83ceec1ea';
useEffect(() => {
  setStatus(Status.PENDING )
  FetchFotos(BASEURL,KEY,searchWord,page)
  .then(photos=>{
    if(photos.hits.length===0){toast.error('We did not find anything. Try again with a new word!');}
    if(page === 1){ 
     setPhotos(photos.hits)
     setStatus(Status.RESOLVED)
     setTotalHits(photos.totalHits )
      }
    else{ 
        setPhotos(prev=>[...prev,...photos.hits])
     setStatus(Status.RESOLVED)
     setTotalHits(photos.totalHits )
  }    
   })//end then
   .catch( () => 
   {setStatus(Status.REJECTED )
       toast.error("Ups... Something is wrong. Try again!",{duration: 4000,
     position: 'top-center'}, ) 
 })//end catch
 if(page !== 1){
    autoscroll()}

  //-
}, [page, searchWord]);

const onLoadMoreClick = () => {
  loadMore();
};
const totalPage = Math.ceil(totalHits / perPage);
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
    
    {photos.length>0  && page<totalPage ? (<LoadMoreBtn  onLoadMoreClick={onLoadMoreClick} >Load More</LoadMoreBtn>):null}
    
    </>
  );
}
// }
}
ImgGallery.propTypes={    
    searchWord:PropTypes.string.isRequired,
    loadMore:PropTypes.func,
    page:PropTypes.number.isRequired,
    onImgClick:PropTypes.func,
    shereSrcForModal:PropTypes.func,
  }