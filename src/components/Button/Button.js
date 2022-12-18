import React from 'react';
import { Button } from './Button.styled';
  import PropTypes from 'prop-types';
export function LoadMoreBtn ({onLoadMoreClick}){
    return( 
    <Button type="button" onClick={()=>onLoadMoreClick()} >Load More</Button>)
}
LoadMoreBtn.propTypes={ onLoadMoreClick:PropTypes.func.isRequired,}