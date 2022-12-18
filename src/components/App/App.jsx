import React, { Component } from 'react';
import { Toaster } from 'react-hot-toast'
import { GlobalStyle } from 'CreateGlobalStyle';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImgGallery } from 'components/ImageGallery/ImageGallery';
import { Modal } from 'components/Modal/Modal';
import { AppDiv } from './App.styled';

// import { fetchPhotos } from 'components/FetchApi';



export class App extends Component {
  state = { page: 1,
    searchWord:"",
  showModal:false,
  largeImgData: { src: '', alt: '' },
  status: "",
  
  };

toggleModal=()=>{this.setState(({showModal})=>({showModal:!showModal}))}

  handleFormSubmit = searchWord => {
    this.setState({ searchWord,
    page:1});

  };
  
 
  
 
  shereSrcForModal=(srcLarge,altLarge)=>{ ;
  this.setState({largeImgData:{src:srcLarge,alt:altLarge}})
}

loadMore = () => {
  this.setState(prev => ({
    page: (prev.page += 1),
  }));
};

  render() { const {  largeImgData,searchWord,showModal,page} = this.state;
 
  return (
    <AppDiv><GlobalStyle /><Toaster toastOptions={{
      
      error: {duration: 3000,
        style: { border: '1px solid red',
        padding: '16px',
        
          minWidth: '450px',
         
        },
      },
    }}/>
    <Searchbar onSubm={this.handleFormSubmit}/>
  <ImgGallery searchWord={searchWord} loadMore={this.loadMore} page={page}
  onImgClick={this.toggleModal} shereSrcForModal={this.shereSrcForModal} 
 />
 
  
  {showModal &&(<Modal src={largeImgData.src} alt={largeImgData.alt} 
  onClose={this.toggleModal}/>)}
  </AppDiv>)}
   
  }   
       
  