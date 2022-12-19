import React, { useState,Component } from 'react';
import toast from 'react-hot-toast'
import {FaSistrix} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { SearchbarHeader , SearchForm,SearchFormButton, SearchFormButtonLabel, SearchFormInput  } from './SearchBar.styled';


export const Searchbar =({onSubm})=>{
  const [searchWord, setSearchWord] = useState("");
  const handleChange = evt => {
    setSearchWord(evt.currentTarget.value.toLowerCase());
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchWord.trim() === '') {
      toast.error('Please fill the search form ');
      return;
    }
    
   onSubm(searchWord);
   
  };
  return ( 
    <SearchbarHeader> 
    <SearchForm  onSubmit={handleSubmit}>
    <SearchFormButton type="submit" >
      <SearchFormButtonLabel><FaSistrix size={24}/></SearchFormButtonLabel>
    </SearchFormButton>

    <SearchFormInput 
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={searchWord}
      onChange={handleChange}/>
  </SearchForm>
  </SearchbarHeader>      
    );
}

//---------
export class oldSearchbar extends Component {
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



  