import React, { useEffect} from 'react'

import { useParams } from 'react-router-dom';
import './detailsPage.css'
import { connect } from 'react-redux';

import { getDetails } from '../actions/coctails-actions';

const Detail = props => {
    const { id } = useParams()

    useEffect(()=>{
        props.getDetails(id);
      },[]);

            return (
                <div>
                    <br></br>
                        <div className="container">
                <div className="card">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="col-md-6">
                                
                                <div className="tab-content">
                                  <div className="tab-pane active" id="pic-1"><img src={props.coctails[0].strDrinkThumb} /></div> 
                                </div>
                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{props.coctails[0].strDrink}</h3>
                                <div >
                                    <span>{props.coctails[0].strAlcoholic} - {props.coctails[0].strCategory} - {props.coctails[0].strGlass}</span>
                                </div>
                                 <p className="product-description">
                                    <li> {props.coctails[0].strIngredient1} </li>
                                    <li> {props.coctails[0].strIngredient2} </li> 
                                    <li> {props.coctails[0].strIngredient3} </li> 
                                    <li> {props.coctails[0].strIngredient4} </li> 
                                    <li> {props.coctails[0].strIngredient5} </li> 
                                    <li> {props.coctails[0].strIngredient6} </li> 
                                    
                                    </p>
                                <p > {props.coctails[0].strInstructions} </p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            )
        
        
}

const mapStateToProps = state => {
    return {
      coctails:state.coctails
    }
  }

export default connect(mapStateToProps, { getDetails }) (Detail);
