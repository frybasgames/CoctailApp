import React, { Component } from 'react'
import Category from './CategoryList';
import Coctail from './Coctail';
import Alcoholic from './Alcoholic';
import SearchBar from './SearchBar';
export class HomePage extends Component {
    render() {
        return (
            <div><br>
            </br>
                <SearchBar/>
                <br></br>
                <Category/>
                <br></br>
                <Alcoholic/>
                <br></br>
                <Coctail/>
            </div>
        )
    }
}
