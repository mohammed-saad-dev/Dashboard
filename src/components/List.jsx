
function List(){
    return(
        <div className="List">
            <div className="Logo container">
                <div className="TimeLogo"></div>
                <p>Attendance Keeper.</p>
            </div>

            <div className="overview ">
                <div className="ParentTitle container">
                    <p className="title">Organization Overview</p>
                    <i className="fa-solid fa-play"></i>
                </div>

                <div className="Overview-Button">
                    <div className="hover">
                        <button className="padding">
                                <i className="fa-solid fa-table-columns"></i>
                                <p>Dashboard</p>
                        </button>
                    </div>

                    <div className="hover">
                        <button className="padding">
                                <i className="fa-regular fa-user"></i>  
                                <p>Employee</p>
                        </button>
                    </div>

                    <div className="hover">
                        <button className="padding">
                                <i className="fa-solid fa-mobile-screen"></i>
                                <p>All Device</p>
                        </button>
                    </div>

                    <div className="hover">
                        <button className="padding">
                                <i className="fa-solid fa-gear"></i>
                                <p>Settings</p>
                        </button>
                    </div>
                </div>
            </div>


            <div className="overview ">
                <div className="ParentTitle">
                    <p className="title padding">Daily Operations</p>
                    <i className="fa-solid fa-play"></i>
                </div>

                <div className="Overview-Button">

                    <div className="hover">
                        <button className="padding">
                                <i className="fa-regular fa-face-smile-beam"></i>
                                <p>Attendance</p>
                        </button>
                    </div>
                        
                    <div className="hover">
                        <button className="padding">
                                <i className="fa-solid fa-book"></i>
                                <p>Worklog</p>
                                <span className="notic">2</span>
                        </button>
                    </div> 

                    <div className="hover">
                        <button className="padding">
                                <i className="fa-regular fa-square-check"></i>
                                <p>My Tasks</p>
                                <span className="notic MyTasks">2</span>
                        </button>
                    </div>

                    <div className="hover">
                        <button className="padding">
                                <i className="fa-solid fa-wind"></i>
                                <p>Leaves</p>
                                <span className="notic Leaves">2</span>
                        </button>
                    </div>
                    
                </div>
            </div>

            <div className="overview  low">
                <div className="ParentTitle">
                    <p className="title padding">Employee Resources</p>
                    <i className="fa-solid fa-play"></i>
                </div>

                <div className="Overview-Button">
                    <div className="hover">
                        <button className="padding">
                                <i className="fa-regular fa-clock"></i>
                                <p>Scedule</p>
                        </button>
                    </div>

                    <div className="hover">
                        <button className="padding">
                                <i className="fa-regular fa-bell"></i>
                                <p>Notic</p>
                                <span className="notic Notic">2</span>
                        </button>
                    </div>

                    <div className="hover">
                    <button className="padding">
                            <i className="fa-solid fa-hammer"></i>
                            <p>Salary</p>
                    </button>
                    </div>
                    
                </div>
            </div>

            <div className="container card">
            <i className="fa-solid fa-xmark"></i>
            <div className="information-card">
                <div className="circle"><p>100%</p></div>
                <p className="card-title">Complete your setup</p>
                <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, </p>
                <button className="card-button">View Setup</button>
            </div>

            </div>
        </div>
    )
}

export default List