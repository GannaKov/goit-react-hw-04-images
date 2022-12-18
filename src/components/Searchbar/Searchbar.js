import React, { Component } from 'react';
import toast from 'react-hot-toast'
import {FaSistrix} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { SearchbarHeader , SearchForm,SearchFormButton, SearchFormButtonLabel, SearchFormInput  } from './SearchBar.styled';

export class Searchbar extends Component {
    state = {
      searchWord: "",
    };
    
    handleChange = evt => {
      this.setState({ searchWord:evt.currentTarget.value.toLowerCase()});
    };
   
    handleSubmit = evt => {
      evt.preventDefault();
      if (this.state.searchWord.trim() === '') {
        toast.error('Input smh');
        return;
      }
      
      this.props.onSubm(this.state.searchWord);
     
    };

   

    render() {
    
      return ( 
      <SearchbarHeader> 
      <SearchForm  onSubmit={this.handleSubmit}>
      <SearchFormButton type="submit" >
        <SearchFormButtonLabel><FaSistrix size={24}/></SearchFormButtonLabel>
      </SearchFormButton>
  
      <SearchFormInput 
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={this.state.searchWord}
        onChange={this.handleChange}/>
    </SearchForm>
    </SearchbarHeader>      
      );
    }
  }
 
  Searchbar.propTypes = {
    onSubm: PropTypes.func,
  };