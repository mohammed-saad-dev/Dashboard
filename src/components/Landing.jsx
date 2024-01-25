function Landing(){
    return(
        <div className="Landing container-landing">
            <nav>
                <div >
                    <p className="title-landing">Dashboard</p>
                    <p>Pages / Dashboard</p>
                </div>

                <div className="profile">
                    <i className="fa-regular fa-bell"></i>
                    <div className="me">
                        <div className="photo"></div>
                        <p>John smith</p> 
                    </div>
                </div>
            </nav>

            <div className="first-row">
                <div className="box">
                    <p>Active Employee <span>199</span></p>
                    <p>Not verified <span>9</span></p>
                </div>
                <div className="box">
                    <p>Recent Notice</p>
                </div>
                <div className="box">
                <i className="fa-regular fa-note-sticky"></i>
                <p>Application Revived From Kazi Azam</p>
                </div>
            </div>

            <div className="second-row">
                <div className="box-two">
                    <div className="title-in-box">
                        <div className="first">
                            <i className="fa-solid fa-store"></i>
                            <p>Attendance Summary</p>
                        </div>

                        <div className="detailes">
                            <div>
                                <p className="subject">Late</p>
                                <p className="right-Border">99</p>
                            </div>
                            <div className="padding-left">
                                <p className="subject">Absence</p>
                                <p className="">99</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box-two">
                    <div className="title-in-box">
                        <div className="first">
                            <i className="fa-solid fa-store"></i>
                            <p>Attendance Summary</p>
                        </div>

                        <div className="detailes">
                            <div>
                                <p className="subject">Late</p>
                                <p className="right-Border">99</p>
                            </div>
                            <div className="padding-left">
                                <p className="subject">Absence</p>
                                <p className="">99</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box-two">
                    <div className="title-in-box">
                        <div className="first">
                            <i className="fa-solid fa-store"></i>
                            <p>Attendance Summary</p>
                        </div>

                        <div className="detailes">
                            <div>
                                <p className="subject">Late</p>
                                <p className="right-Border">99</p>
                            </div>
                            <div className="padding-left">
                                <p className="subject">Absence</p>
                                <p className="">99</p>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>

            <div className="therd-row">
                <div className="box-three">
                    <div className="desc">
                    <p>Today's Attendance</p>
                        <div className="Today">
                            <p>Today</p>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                    </div>

                    <div className="titles">
                        <p>#</p>
                        <p>name</p>
                        <p>time in</p>
                        <p>time out</p>
                        <p>status</p>
                        <p>progress</p>
                    </div>

                    <div className="titles black">
                        <p style={{color:"#ccc"}}>1</p>
                        <p >Kazi Azim</p>
                        <p >8.28 AM</p>
                        <p style={{color:"red"}}>6.28 AM</p>
                        <p className="for-center"><i className="fa-solid fa-check check"></i><div>full day</div></p>
                        <div className="progress"><div className="wow"></div></div>
                    </div>

                    <div className="titles black">
                        <p style={{color:"#ccc"}}>2</p>
                        <p >Kazi Azim</p>
                        <p >8.28 AM</p>
                        <p style={{color:"red"}}>6.28 AM</p>
                        <p className="for-center"><i className="fa-solid fa-check check"></i><div>full day</div></p>
                        <div className="progress"><div className="wow"></div></div>
                    </div>  

                    <div className="titles black">
                        <p style={{color:"#ccc"}}>3</p>
                        <p >Kazi Azim</p>
                        <p >8.28 AM</p>
                        <p style={{color:"red"}}>6.28 AM</p>
                        <p className="for-center"><i className="fa-solid fa-check check"></i><div>full day</div></p>
                        <div className="progress"><div className="wow"></div></div>
                    </div>
                </div>
                <div className="box-side">
                    <div className="desc">
                    <p>To Expire</p>
                        <div className="Today">
                            <p>Kazi Azim</p>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        
                    </div>
                    <div className="titles">
                        <p>#</p>
                        <p>Info type</p>
                        <p>Expiry Date</p>
                        <p>Valid Until</p>
                    </div>

                    <div className="titles black">
                        <p style={{color:"#ccc"}}>1</p>
                        <p >National ID</p>
                        <p >20 mar 2023</p>
                        <p >7 month</p>
                    </div>
                    
                    <div className="titles black">
                        <p style={{color:"red"}}>2</p>
                        <p style={{color:"red"}}>Passport Num</p>
                        <p >20 mar 2023</p>
                        <p style={{color:"red"}}>2 month</p>
                    </div>          
                    
                    <div className="titles black">
                        <p style={{color:"#ccc"}}>3</p>
                        <p >Driving License</p>
                        <p >20 mar 2023</p>
                        <p >9 month</p>
                    </div>
                </div>
            </div>

            <div className="fourth-row">
                
            <div className="box-side">
                    <div className="desc">
                    <p>Create a Task</p>
                        <div className="Today">
                            <p>Assign by me</p>
                            <i className="fa-solid fa-caret-down"></i>
                        </div>
                        
                    </div>
                    <div className="titles">
                        <p>#</p>
                        <p>Assign to</p>
                        <p>Assign by</p>
                        <p>Title</p>
                    </div>

                    <div className="titles black">
                        <p style={{color:"#ccc"}}>1</p>
                        <p >Kazi Azim</p>
                        <p >Kazi Azim</p>
                        <p >Yorem ipsum </p>
                    </div>
                    
                    <div className="titles black">
                    <p style={{color:"#ccc"}}>2</p>
                        <p >Kazi Azim</p>
                        <p >Kazi Azim</p>
                        <p >Yorem ipsum </p>
                    </div>          
                    
                    <div className="titles black">
                    <p style={{color:"#ccc"}}>3</p>
                        <p >Kazi Azim</p>
                        <p >Kazi Azim</p>
                        <p >Yorem ipsum </p>
                    </div>

                    <div className="buttons">
                    <button className="task">+ Create Assign Task</button>
                    <button> See History</button>
                    </div>
                </div>

                <div className="box-side">
                    <div className="desc">
                    <p>Today's Leave</p>
                    </div>
                    <div className="titles">
                        <p>#</p>
                        <p>Name</p>
                        <p>Reason</p>
                        <p>Return Data</p>
                    </div>

                    <div className="titles black">
                        <p style={{color:"#ccc"}}>1</p>
                        <div className="Leave">
                        <p >Kazi Azim</p>
                        <p>Software Developer</p>
                        </div>
                        <p >Sick Leave</p>
                        <p >21 mar 2023 </p>
                    </div>

                    <div className="titles black">
                        <p style={{color:"#ccc"}}>2</p>
                        <div className="Leave">
                        <p >Kazi Azim</p>
                        <p>Software Developer</p>
                        </div>
                        <p >Sick Leave</p>
                        <p >21 mar 2023 </p>
                    </div>

                    <div className="titles black">
                        <p style={{color:"#ccc"}}>3</p>
                        <div className="Leave">
                        <p >Kazi Azim</p>
                        <p>Software Developer</p>
                        </div>
                        <p >Sick Leave</p>
                        <p >21 mar 2023 </p>
                    </div>


                    
                </div>

                <div className="box-side Last-box">
                    <div className="desc">
                    <p>Recent Leave Applies</p>
                        <div className="Last">
                            <p>New Applied: 6</p>
                        </div>
                        
                    </div>
                    <div className="titles">
                        <p>#</p>
                        <p>name</p>
                        <p>Apply Date</p>
                        <p>Status</p>
                    </div>

                    <div className="titles black">
                        <p style={{color:"#ccc"}}>1</p>
                        <p >Kazi Azim</p>
                        <p >20 mar 2023</p>
                        <p style={{color:"white"}} className="Sign">! </p>
                    </div>
                    
                    <div className="titles black">
                        <p style={{color:"#ccc"}}>2</p>
                        <p >Kazi Azim</p>
                        <p >20 mar 2023</p>
                        <p style={{color:"white"}} className="Sign">! </p>
                    </div>

                    <div className="titles black">
                        <p style={{color:"#ccc"}}>3</p>
                        <p >Kazi Azim</p>
                        <p >20 mar 2023</p>
                        <p ><i style={{paddingTop:"5", marginLeft:"10px",background:"#E94A34"}} className="fa-solid fa-xmark check"></i> </p>
                    </div>

                    <div className="titles black">
                        <p style={{color:"#ccc"}}>3</p>
                        <p >Kazi Azim</p>
                        <p >20 mar 2023</p>
                        <p ><i style={{marginLeft:"10px"}} className="fa-solid fa-check check"></i> </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Landing