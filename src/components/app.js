'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { buttonClick } from '../action-creators/app'

function mapStateToProps(state) {
   return {
      count: state.count
   };
}

function mapActionsToProps(dispatch) {
   return {
      onClick: () => dispatch(buttonClick())
   };
}

function App({ onClick, count }) {
   return (
       <div>
          <button type="button" onClick={onClick}>Click me</button>
          <div>Count: {count}</div>
       </div>

   );
}

export default connect(mapStateToProps, mapActionsToProps)(App);