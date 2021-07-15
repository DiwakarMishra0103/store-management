import React, { useState } from 'react';
import Admin from '.';
import "./addSalesExecutive.css";
import "./addMedicine.css"
import { connect } from 'react-redux'
import { addSalesExecutive } from '../../actions/index'



const AddMedicine = ({ add_executive_to_team }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [experience, setExperience] = useState(0)

    const handleFormSubmit = (e) => {
        const executiveDetails = { firstName: firstName, lastName: lastName, dob: dob, gender: gender, experience: experience, salesExecutiveId: Math.floor((Math.random() * 100000000) + 1) }

        e.preventDefault();
        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''
        e.target[3].value = ''
        e.target[4].value = ''

        add_executive_to_team(executiveDetails)
        var teamList = JSON.parse(localStorage.getItem('teamList')) || [];
        teamList.push(executiveDetails);
        localStorage.setItem('teamList', JSON.stringify(teamList));
    }



    return (<div className="add-medicine">
        <Admin />
        <h1 style={{ margin: "20px", textAlign: "center", marginLeft: "14%" }}>Executive Details</h1>
        <form className="add_executive_form_details" onSubmit={handleFormSubmit}>
            <div className="form_groups">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form_controls" id="firstName" placeholder="First name" onChange={(e) => { setFirstName(e.target.value) }} />
            </div>
            <div className="form_groups">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" className="form_controls" id="lastName" placeholder="Last Name" onChange={(e) => { setLastName(e.target.value) }} />
            </div>
            <div className="form_groups">
                <label htmlFor="Dob">DOB</label>
                <input type="Date" className="form_controls" id="Dob" placeholder="dob" onChange={(e) => { setDob(e.target.value) }} />
            </div>
            <div className="form_groups">
                <label htmlFor="Gender">Gender(M/F)</label>
                <input type="text" className="form_controls" id="Gender" placeholder="Gender" onChange={(e) => { setGender(e.target.value) }} />
            </div>
            <div className="form_groups">
                <label htmlFor="experience">Experience</label>
                <input type="number" className="form_controls" id="experience" placeholder="Experience in years" onChange={(e) => { setExperience(e.target.value) }} />
            </div>
            <button type="submit" className="btn ">Add to the team</button>
        </form>
    </div>);
}


const mapDispatchToProps = (dispatch) => ({
    add_executive_to_team: (payload) => dispatch(addSalesExecutive(payload))
})

export default connect(null, mapDispatchToProps)(AddMedicine)
