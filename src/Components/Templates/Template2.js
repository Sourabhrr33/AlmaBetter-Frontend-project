import React from 'react'
import { useSelector } from 'react-redux'
const shortid = require('shortid')

function Template2() {
    const dataStore = useSelector(state => state.dataStore)
  return (
    <div className="w-100 " style={{ backgroundColor:"#ffffff"}}>
        <div >
            <div className="row m-0 d-flex align-items-center" style={{height:"200px",backgroundColor:"#adb0de"}}>
                <div className="col-2 text-center media" >
                    <img className="rounded align-self-center mx-auto " src={ dataStore.imageFile} alt='profile-pic'
                         style={{maxHeight:'180px',minHeight:"120px", width:'100px', background:'grey',padding:0}}/>
                   
                </div>
                <div className="col-6 font-weight-bold " style={{fontFamily:"Serif"}}>
                    <div style={{color:"white",fontSize:"55px"}}>{ dataStore.personalInfo.firstName +" "+  dataStore.personalInfo.lastName}</div>
                    <h5 >{dataStore.workEx[dataStore.workEx.length -1].title}</h5>
                </div>
                <div className="col-4  ">
                    <div className=' p-3' style={{fontSize:"18px",float:"left",display:"inline-block"}}>
                        <div >{dataStore.personalInfo.Email}</div>
                        <div>{dataStore.personalInfo.Mobile}</div>
                        <div>{dataStore.personalInfo.Address1 +", "+ dataStore.personalInfo.Address2
                                +",  "+dataStore.personalInfo.City+", "+ dataStore.personalInfo.State +", "+ dataStore.personalInfo.Country +", "+ dataStore.personalInfo.Pin}
                        </div>
                        
                
                    </div>
                </div>
            </div>
        </div>
        <hr style={{height:"5px",backgroundColor:"#212529"}}/>
        <div className="text-justify mx-4">{dataStore.personalInfo.Objective}</div>
        <hr style={{height:"5px",backgroundColor:"#212529"}}/>

        <div className="container" style={{fontFamily:"Serif",}}>
            <div className="row">
                <div className="col-3 text-left  " style={{color:"#adb0de"}}> <h3> Professional Experience</h3></div>
                <div className="col-9  text-left " style={{fontSize:"18px"}}>
                    {dataStore.workEx.map((item)=>{
                        return(
                            <div key={shortid.generate()}>
                                <div className='mt-2'><b>{item.title}</b></div>
                                
                                
                                <div className='mt-2'>
                                    Worked in {item.orgName} from {item.startYear} to {item.endYear}.
                                </div>
                                <div>{item.jobDescription}</div>
                            </div>
                        )
                    })
                    }
                
                </div>
                <div className="w-100 mt-4"> </div>
                <hr style={{height:"5px",backgroundColor:"#212529"}}/>
                <div className="col-3 text-left" style={{color:"#adb0de"}}><h3>Education</h3></div>
                <div className="col-9 text-left" >
                    <div style={{fontSize:"18px"}}>
                        {dataStore.education.map((item)=>{
                            return(
                                <div key={shortid.generate()}>
                                    <b> {item.Degree}</b>
                                    <div> I have persued my {item.Type} in {item.Degree} from {item.University}</div>
                                    <p>Duration: {" "+item.Start+ " - " + item.End}</p> 
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
                <div className="w-100 mt-4 "> </div>
                <hr style={{height:"5px",backgroundColor:"#212529"}}/>
                <div className="col-3 text-left mb-3 " >
                    <h3 style={{color:"#adb0de"}}>Key Skills</h3>
                </div>
                <div className="col-9 text-left mb-3" style={{fontSize:"18px"}}>
                    
                        {dataStore.skills.map((skill)=>{
                            return(
                                <div key={shortid.generate()}>
                                    <li style={{listStyle:"none"}}>{skill.skillName}</li>
                                </div>
                            )
                             
                        })}
                </div>
                   
                </div>
        </div>
    </div>
                
    
  )
}

export default Template2
