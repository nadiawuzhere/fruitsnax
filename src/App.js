import React, { Component } from 'react';
import logo from './spcshp.svg';
import './App.css';
import fruitsnax from './data/fruitsnax.json';

// import styled from 'styled-components';
import ReactTable from "react-table";
import 'react-table/react-table.css'

class App extends Component {

  constructor() {
      super();
      this.state = {
        data: fruitsnax
      };
    }

  render() {

    const { data } = this.state;

    return (

      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fruit Snacks through React</h1>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro"> This is Nadia&#39;s tool and she is learning how to do things in it
        </p>

        <p className="sub-intro">
          Nadia tries to change the logo yay!!!!!!!!
        </p>

          <div className="search-bar">
              <input className="search-bar"
                     type="text"
                     value={this.state.searchString}
                     ref="search"
                     onChange={this.handleChange}
                    alt="search for a fruit snack"
                    placeholder="search here">
                </input>
          </div>

        <div>
            <ReactTable
              data={data}
              columns={[
                    {
                      Header: "Fruit Name",
                      accessor: "fruit"
                    },
                    {
                      Header: "Color",
                      accessor: "color",
                    },
                    {
                      Header: "Flavor",
                      accessor: "flavor"
                    },
                    {
                      Header: "Rating",
                      accessor: "rating"
                    }
              ]}

                  defaultPageSize={10}
                  className="-striped -highlight"
                />
                <br />
              </div>


          <button className="App-button-go"
                  onClick={() => alert('good job you clicked')}>
                  Click me
          </button>

          <button className="App-button-stop"
                    onClick={() => alert("wow you're brave")}>
                    dont click me
          </button>

          <header className="App-footer">
            <h1 className="App-title">Say Goodbye to Fruit Snacks!
            </h1>

            <img src={logo} className="App-logo2" alt="logo" />

          </header>

      </div>

    );
  }
}

export default App;
