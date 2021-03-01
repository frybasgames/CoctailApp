import React, { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux';

import { getSearchResult } from '../actions/coctails-actions';


const SearchBar = props => {
    const [name, setName] = useState("");
        useEffect(()=>{
            props.getSearchResult(name);
      },[name])
      return (
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                    <div className="form-row mb5">
                        <div className="col-9">
                           <input id="name" className="form-control" name="name" type="text" placeholder="SEARCH A COCTAIL"/>
                        </div>
                        <div className="col-3">
                           <button className="btn-success form-control" 
                                onClick={() => {
                                setName(document.getElementById("name").value)
                                }}
                                >SEARCH</button>
                        </div>
                    </div>
                  </div>
               </div>
          </div>
                )
    
}

const mapStateToProps = state => {
    return {
      searchResult:state.coctails,
      message:state.message
    }
  }

export default connect(mapStateToProps, { getSearchResult }) (SearchBar);

