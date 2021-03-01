import React from 'react'
import { connect } from 'react-redux';

import { getCategoryList } from '../actions/coctails-actions';


const Category = props => {

      return (
          <div className="container">
                    <div className="row">           
                        <div className="col-lg-12" >
                            <div className="form-row mb5">
                                <div className="col-3">
                                            <select className="btn-success form-control" name="category" id="category" 
                                            onChange={() => { 
                                                console.log(document.getElementById("category").value)
                                                props.getCategoryList(document.getElementById("category").value)
                                            }}>
                                                <option  value='Ordinay Drink' >Ordinay Drink</option>
                                                <option  value='Cocktail' >Cocktail</option>
                                                <option  value='Milk / Float / Shake' >Milk / Float / Shake</option>
                                                <option  value='Other/Unknown' >Other/Unknown</option>
                                                <option  value='Cocoa' >Cocoa</option>
                                                <option  value='Shot' >Shot</option>
                                                <option  value='Coffee / Tea' >Coffee / Tea</option>
                                                <option  value='Homemade Liqueur' >Homemade Liqueur</option>
                                                <option  value='Punch / Party Drink' >Punch / Party Drink</option>
                                                <option  value='Beer' >Beer</option>
                                                <option  value='Soft Drink / Soda' >Soft Drink / Soda</option>
                                    </select>
                                </div>
                            </div>
                        </div> 
                    </div>   
           </div>
            )
    
}

const mapStateToProps = state => {
    return {
      categoryResult : state.coctail,
    }
  }

export default connect(mapStateToProps, { getCategoryList }) (Category);

