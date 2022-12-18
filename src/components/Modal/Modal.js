import React , {useEffect} from 'react';
 import PropTypes from 'prop-types';
import { Overlay, ModalDiv} from './Modal.styled';
//import { ProgressBar } from 'react-loader-spinner';

export const Modal =({src,alt,onClose})=>{
  useEffect(() => {
    const handleKeyDown = evt => { if (evt.code === "Escape")
    {onClose()}};

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return(
    <Overlay  onClick={() => {
        onClose();    
      }}
      >
<ModalDiv>
  <img src={src} alt={alt} /> 
</ModalDiv>
</Overlay>
)
}



Modal.propTypes ={
  onClose:PropTypes.func.isRequired,
  src:PropTypes.string.isRequired,
  alt:PropTypes.string.isRequired,
}