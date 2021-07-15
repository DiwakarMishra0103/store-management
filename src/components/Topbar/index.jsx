import React from 'react';
import "./topbar.css";
import { connect } from 'react-redux';
import { adminLogout } from '../../actions';
import { useHistory } from "react-router-dom";



const Topbar = ({ loginStatus, logOutAdmin }) => {
    const history = useHistory()

    return (<div className="topbar">
        <div><img src="https://i.pinimg.com/originals/46/9c/dc/469cdc719b0b7d42a1e93758faf7878c.png" alt="pharmacy-management-software" /></div>
        <div className="topbar-menu">
            {loginStatus && <p onClick={() => {
                localStorage.setItem('loginStatus', false)
                localStorage.setItem('adminLogin', false)
                localStorage.setItem('salesLogin', false)
                history.push("/");
                logOutAdmin()
            }} style={{ cursor: 'pointer' }}>Logout <i class="fas fa-sign-out-alt"></i></p>}
        </div>
    </div>);
}



const mapStateToProps = (state) => ({
    loginStatus: state.loginStatus
})

const mapDispatchToProps = (dispatch) => ({
    logOutAdmin: () => dispatch(adminLogout(''))

})

export default connect(mapStateToProps, mapDispatchToProps)(Topbar)
