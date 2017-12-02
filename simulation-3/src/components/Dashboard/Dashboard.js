import React, { Component } from 'react';
import Header from './../Header/Header';
import { connect } from 'react-redux';
import { getUser } from './../../ducks/users';

class Dashboard extends Component {

    componentWillMount() {
        this.props.getUser();
    }

    render(){
        return(
            <div>
                <Header />
                <div className="upperDiv">
                    <div className="leftDiv">
                        <img className="profile_pic" src={this.props.userData.picture} alt="" />
                        <h2 className="profile_name">{this.props.userData.first_name} {this.props.userData.last_name}</h2>
                        <button className="edit_profile">Edit Profile</button>
                    </div>
                    <div className="rightDiv">
                        <h4>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name.  The more you update your profile, the better recommendations we can make!</h4>
                    </div>
                </div>
                <div className="lowerDiv">
                    <div className="static_sort">
                        <h3>Recommended Friends</h3>
                        <span>Sorted by</span>
                        <select>
                            <option>First Name</option>
                            <option>Last Name</option>
                            <option>Gender</option>
                            <option>Hobby</option>
                            <option>Hair Color</option>
                            <option>Eye Color</option>
                            <option>Birthday</option>
                        </select>
                    </div>
                    <div className="recommended_field">
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, { getUser })(Dashboard);
    