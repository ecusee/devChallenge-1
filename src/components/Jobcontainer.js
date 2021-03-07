import React from 'react'

const Jobcontainer = ({data}) => {
    return (
        <div className="job-box">
            {data.company_logo
                ? <img src={data.company_logo} alt=""/>
                : <span className="material-icons md-12 noCompanyImage" style={{fontSize:90, margin: 12}}>domain</span>
            }
            <div className="mid-container">
                <span className="company-name">{data.company}</span>
                <span className="position">{data.title}</span>
                {data.type === "Full Time" 
                    ? <div className="isFullTime">Full time</div>
                    : <div></div>
                }
            </div>
            <div className="right-container">
                <div className="companyCity">
                    <span className="material-icons md-12" style={{fontSize:12, marginRight: 5}}>public</span>
                    <span>{data.location}</span></div>
                <div className="jobTime">
                    <span className="material-icons md-12" style={{fontSize:12, marginRight: 5}}>access_time</span>
                    <span>{new Date(data.created_at).toLocaleDateString()}</span></div>
            </div>
        </div>
    )
}

export default Jobcontainer;
