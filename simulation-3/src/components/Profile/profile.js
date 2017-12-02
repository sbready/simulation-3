import React, { Component } from 'react';
import Header from './../Header/Header';
import { connect } from 'react-redux';
import { getUser } from './../../ducks/users';

class Profile extends Component {

    componentWillMount() {
        this.props.getUser();
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="topDiv">
                    <img className="profile_pic" src={this.props.userData.picture} alt="" />
                    <h2 className='profile_name'>{this.props.userData.first_name}{this.props.userData.last_name}</h2>
                    <button className="update_button">Update</button>
                    <button className="Cancel_button">Cancel</button>
                </div>
                <div className="SelectionDiv">
                    <div className="left_profile">
                        <div className="firstName">
                            <h4>First Name</h4>
                            <input />
                        </div>
                        <div className="lastName">
                            <h4>Last Name</h4>
                            <input />
                        </div>
                        <div className="gender">
                            <h4>Gender</h4>
                            <select>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className="hairColor">
                            <h4>Hair Color</h4>
                            <select>
                                <option>Brown</option>
                                <option>Blue</option>
                                <option>Green</option>
                                <option>Red</option>
                                <option>Blonde</option>
                                <option>White</option>
                            </select>
                        </div>
                        <div className="eyeColor">
                            <h4>Eye Color</h4>
                            <select>
                                <option>Brown</option>
                                <option>Blue</option>
                                <option>Green</option>
                            </select>
                        </div>
                    </div>
                    <div className="right_profile">
                        <div className="eyeColor">
                            <h4>Hobby</h4>
                            <select>
                                <option>Video Games</option>
                                <option>Fishing</option>
                                <option>Hiking</option>
                                <option>Rafting</option>
                            </select>
                        </div>
                        '<div className="birthdayDay">
                            <h4>Birthday Day</h4>
                            <select>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                                <option>05</option>
                                <option>06</option>
                                <option>07</option>
                                <option>08</option>
                                <option>09</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                        </div>
                        <div className="birthdayMonth">
                            <h4>Birthday Month</h4>
                            <select>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                        </div>
                        <div className="birthdayYear">
                            <h4>Birthday Year</h4>
                            <select>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                                <option>2008</option>
                                <option>2007</option>
                                <option>2006</option>
                                <option>2005</option>
                                <option>2004</option>
                                <option>2003</option>
                                <option>2002</option>
                                <option>2001</option>
                                <option>2000</option>
                            </select>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, { getUser })(Profile);