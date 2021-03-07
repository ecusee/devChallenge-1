import React, { useState, useEffect } from 'react'
import './Mainpage.css'
import backgroundImg from '../../assets/backgroundImg.png'
import Jobcontainer from '../../components/Jobcontainer'
import { Link } from 'react-router-dom'

const Mainpage = ({ data }) => {
    const [headerSearchBox, setHeaderSearchBox] = useState('');
    const [isFullTime, setIsFullTime] = useState(false);
    const [location, setLocation] = useState('');
    const [radioButtons, setRadioButtons] = useState('');
    let [searchedDatas, setSearchedDatas] = useState([]);

    useEffect(() => {
        if (data) {
            let list = [];
            data.filter(job => {

                let jobTitle = job.title.toLowerCase();
                let jobCompany = job.company.toLowerCase();

                if (jobTitle.includes(headerSearchBox.toLowerCase()) || jobCompany.includes(headerSearchBox.toLowerCase())) {
                    list.push(job)
                }
            })
            setSearchedDatas(list)
        }
    }, [headerSearchBox])

    useEffect(() => {
        if (isFullTime) {
            let list = [];
            data.filter(job => {
                if (job.type === "Full Time") {
                    list.push(job)
                }
            })
            setSearchedDatas(list)
        } else {
            setSearchedDatas(data)
        }
    }, [isFullTime])

    useEffect(() => {
        if (data) {
            let list = [];
            data.filter(job => {

                let jobLocation = job.location.toLowerCase();

                if (jobLocation.includes(location.toLowerCase())) {
                    list.push(job)
                }
            })
            setSearchedDatas(list)
        }
    }, [location])

    useEffect(() => {
        if (data) {
            let list = [];
            data.filter(job => {

                let jobLocation = job.location.toLowerCase();

                if (jobLocation.includes(radioButtons.toLowerCase())) {
                    list.push(job)
                }
            })
            setSearchedDatas(list)
        }
    }, [radioButtons])

    useEffect(() => {
        setSearchedDatas(data)
    }, [])

    return (
        <div className="container">


            <div className="header">
                <span>Github</span> Jobs
            </div>

            <div className="searchbox-container">
                <img src={backgroundImg} alt="" />
                <div className="searchbox">
                    <div className="input">
                        <span className="material-icons">work_outline</span>
                        <input placeholder="Title, companies, expertise or benefits" onChange={e => setHeaderSearchBox(e.target.value)} />
                    </div>
                    <button>Search</button>
                </div>
            </div>

            <div className="container-body">
                <div className="options">

                    <div className="top-checkbox">
                        <input type="checkbox" onClick={() => setIsFullTime(!isFullTime)} value="full-time" className="checkmark" />
                        <label className="checkbox-label">Full Time</label>
                    </div>

                    <span className="location-select-label">LOCATION</span>

                    <div className="city-searchbox">
                        <span className="material-icons md-12" style={{ fontSize: 15, marginLeft: 14, marginRight: 14 }}>public</span>
                        <input placeholder="City, state, zip code or country" onChange={e => setLocation(e.target.value)} />
                    </div>
                    <div className="radio-buttons">

                        <div className="radio-buttons-item">
                            <input type="radio" id="city" name="location" value="" onChange={e => setRadioButtons(e.target.value)} />
                            <label>None</label><br />
                        </div>

                        <div className="radio-buttons-item">
                            <input type="radio" id="city" name="location" value="London" onChange={e => setRadioButtons(e.target.value)} />
                            <label>London</label><br />
                        </div>

                        <div className="radio-buttons-item">
                            <input type="radio" id="city" name="location" value="Amsterdam" onChange={e => setRadioButtons(e.target.value)} />
                            <label>Amsterdam</label><br />
                        </div>

                        <div className="radio-buttons-item">
                            <input type="radio" id="city" name="location" value="New York" onChange={e => setRadioButtons(e.target.value)} />
                            <label>New York</label><br />
                        </div>

                        <div className="radio-buttons-item">
                            <input type="radio" id="city" name="location" value="Berlin" onChange={e => setRadioButtons(e.target.value)} />
                            <label>Berlin</label><br />
                        </div>

                    </div>
                </div>
                <div className="jobs">
                    {
                        searchedDatas.length > 0 ?
                            searchedDatas.map(job => (
                                <Link to={`/detail/${job.id}`} style={{ textDecoration: 'none' }}>
                                    <Jobcontainer data={job} key={job.id} />
                                </Link>
                            ))
                            : <div>:(</div>
                    }
                </div>
            </div>
            <footer>
                created by <a href="https://github.com/ecusee">ecusee</a> - devChallenges.io
            </footer>
        </div>
    )
}

export default Mainpage
