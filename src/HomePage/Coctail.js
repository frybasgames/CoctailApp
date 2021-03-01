import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getCoctails } from '../actions/coctails-actions';

const Coctail = props => {

    let history = useHistory();
    useEffect(()=>{
        props.getCoctails();
      },[])

      if(props.message==="SEARCH" || props.message==="COCOA"){
            var rand = 0;
            var endRand = 12;
      }
      else{
            var rand = Math.floor(Math.random() * 89); 
            var endRand = rand+12;
      }

        return (
        <div className="container">
            <div className="row">
                {
                    props.coctails.slice(rand, endRand).map(coctail =>
                        <div className="col-lg-4" key={coctail.idDrink}>
                            <div className="card mb-4 shadow-sm" style={{cursor:"pointer"}}  onClick={() => { history.push("/detail/"+coctail.idDrink)}}>
                                <img src={coctail.strDrinkThumb} className="card-img-top" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">{coctail.strDrink}</h5>
                                    <div className="d-flex justify-content-between align-items-center"></div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        )
}

const mapStateToProps = state => {
    return {
      coctails:state.coctails,
      message:state.message
    }
  }

export default connect(mapStateToProps, { getCoctails }) (Coctail);