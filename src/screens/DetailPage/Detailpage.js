import React, { useState, useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser';
import { Link, useParams } from 'react-router-dom'
import './Detailpage.css'

const Detailpage = () => {
    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/jobs/${id}`)
            .then(res => res.json())
            .then(resJson => {
                setData(resJson)
                console.log(resJson.how_to_apply)
            })
            .catch(e => console.error(e))
    }, [])

    return (
        <div className="container" id="detail">

            <div className="header">
                <span>Github</span> Jobs
            </div>

            {
                data ?
                    <div className="container-body">
                        <div className="left">
                            <div className="backBtn"><Link to="/"><span style={{ marginRight: 10 }}>&#8592;</span> Back to search</Link></div>
                            <div className="howto">
                                <span className="location-select-label howto">HOW TO APPLY</span>
                            </div>
                            <div id="howToApply">
                                {ReactHtmlParser(data.how_to_apply)}
                            </div>
                        </div>

                        <div className="right">
                            <div className="headerTitle">
                                <span className="title">{data.title}</span>
                                {data.type === "Full Time"
                                    ? <div className="isFullTime">Full time</div>
                                    : <div></div>
                                }
                            </div>
                            <span className="time">
                                <span className="material-icons md-12" style={{ fontSize: 15, marginRight: 5 }}>access_time</span>
                                {new Date(data.created_at).toLocaleDateString()}
                            </span>
                            <div className="companyInfo">
                                {data.company_logo
                                    ? <img src={data.company_logo} alt="" />
                                    : <span className="material-icons md-12 noCompanyImage" style={{ fontSize: 90, margin: 12 }}>domain</span>
                                }
                                <div className="company">
                                    <div><span className="name">{data.company}</span></div>
                                    <div className="companyLocation">
                                        <span className="material-icons md-12" style={{ fontSize: 15, marginRight: 5 }}>public</span>
                                        <span className="city" style={{ fontSize: 15 }}>{data.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="description">
                                {ReactHtmlParser(data.description)}
                            </div>
                        </div>
                    </div>
                    : <div>:(</div>
            }
            <footer>
                created by <a href="https://github.com/ecusee">ecusee</a> - devChallenges.io
            </footer>
        </div>
    )
}

export default Detailpage
