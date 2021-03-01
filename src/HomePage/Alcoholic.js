import React from 'react'
import { connect } from 'react-redux';

import { getAlcoholicList } from '../actions/coctails-actions';


const Alcoholic = props => {

      return (
          <div className="container">
                    <div className="row">           
                        <div className="col-lg-12" >
                            <div className="form-row mb5">
                                <div className="col-9" style={{float:"right"}}> 
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="AlcoholicRadio" value="Alcoholic" id="Alcoholic" 
                                            onClick={() => { props.getAlcoholicList(document.getElementById("Alcoholic").value) }}/> 
                                            <label className="form-check-label" htmlFor="Alcoholic">Alcoholic</label>

                                            <input className="form-check-input" type="radio" name="AlcoholicRadio" value="Non Alcoholic" id="Non-Alcoholic"
                                            onClick={() => { props.getAlcoholicList(document.getElementById("Non-Alcoholic").value) }} />
                                            <label className="form-check-label" htmlFor="Non-Alcoholic">Non Alcoholic</label>
                                        
                                            <input className="form-check-input" type="radio" name="AlcoholicRadio" value="Optional Alcoholic" id="Optional-Alcoholic" 
                                            onClick={() => { props.getAlcoholicList(document.getElementById("Optional-Alcoholic").value) }} />
                                            <label className="form-check-label" htmlFor="Optional-Alcoholic">Optional Alcoholic</label>
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
      alcoholicType : state.coctail
    }
  }

export default connect(mapStateToProps, { getAlcoholicList }) (Alcoholic);

