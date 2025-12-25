import React from 'react';
import {Search} from './components/Search';
import {Movies} from './components/Movies';


export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            movies: [],
            searchQuery: '',
        };
    }



}