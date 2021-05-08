import React from 'react';
import {connect} from 'react-redux';
import {loginAccount} from '../actions/user';

import Signin from '../compunenrts/SignIn/Signin';


const index = ({loginAccount})=>{
    return <>
      <Signin loginAccount={loginAccount}/>
    </>;
};


function mapDispatchToProps(dispatch) {
  return {
      loginAccount: (data) => dispatch(loginAccount(data)),
  };
}
export default connect(
  null,
  mapDispatchToProps,
)(index);

