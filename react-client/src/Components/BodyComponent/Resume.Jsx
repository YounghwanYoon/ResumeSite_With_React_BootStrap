import React, { Component } from 'react';
class Resume extends Component {
  render() {
    return (
        <div class="mainContent">
            <h1><em>Ray Yoon </em></h1>
            <ul class ="contact">
                <li>Current Location: </li>	
                <li>Philadelphia, PA 19128</li>
            </ul>
            <hr/>
            <div class="objective">
                <h2>Objective</h2>
                <p>Seeking an Entry Level Mobile or Web Developer position in an established organization where I can use my educational background and develop my skills.</p>
            </div>
            <hr/>
            <div class="experiences">
                <h2>Work Experience</h2>
                <ul> Android /Web Application Developer
                    <ul class="whereAndWhen">
                        <li class="whereAndWhen">
                            Self- Employed - Santa Clara, CA
                        </li>
                        <li class="whereAndWhen">
                                2016 to Present
                        </li>
                    </ul>
                    <ul class="experiences">
                        <li>
                            ➢ Create and launch an Android application with a simple user interface design that embedded mathematical logics.  
                        </li>
                        <li>
                            ➢ Interconnect various Android applications such as email, music, and messenger by using intents. 
                        </li>	
                        <li>
                            ➢ Continuously adapting to newly introduced Android platforms to the application.							
                        </li>	
                        <li>
                            ➢ Proficient in various development tools such as Eclipse, Android Studio, Visual Studio Code, IntelliJ, Visual Basic, and Git . 
                        </li>	
                        <li>➢<a href= "https://play.google.com/store/apps/details?id=com.squirrel.android.collegefootprints"> Click to see application created</a>							</li>	
                    </ul>				
                </ul>
                <ul> Operation Manager
                    <ul class="whereAndWhen">
                        <li class="whereAndWhen">
                            SK Education Consulting Group - San Jose, CA							</li>
                        <li class="whereAndWhen">
                            2012 to 2016				
                        </li>
                    </ul>
                    <ul class="experiences">
                        <li>
                            ➢ IT support for the company by maintaining the computer systems/networks and diagnosing hardware/software faults.							
                        </li>
                        <li>
                            ➢ Analyze current structure to find inefficient procedures.							
                        </li>	
                        <li>
                            ➢ Adapt new technologies to reduce cost and improve productivity such as clouding system and salesforce.							
                        </li>	
                        <li>
                            ➢ Create Microsoft Office automated programs using Excel, Outlook, and VBA to minimize repetitive work.							
                        </li>	
                        <li>
                            ➢ Guide co-workers to quickly adapt to new technologies or system.							
                        </li>	
                    </ul>				
                </ul>
                <hr/>
            </div>			
            <div class="relative_skills">
                <h2>Relative Skills</h2>
                <ul class="relative_lists">
                    <li>•	Java (2 years)</li>
                    <li>•	Android (1 year)</li>
                    <li>•	Kotlin</li>
                    <li>•	HTML</li>
                    <li>•	CSS</li>
                    <li>•	JavaScript</li>
                    <li>•	Microsoft Office VBA</li>
                    <li>•	Windows Environment</li>
                    <li>•	Basic Networking</li>
                </ul>
            </div>
            <hr/>
            <div class="degree">
                <h2>Education</h2>
                <ul > Associate of Science in Computer Science
                        <li class="whereAndWhen">
                            Self- Employed - Santa Clara, CA
                        </li>
                        <li class="whereAndWhen">
                                2016
                        </li>
                </ul>
                <ul> Bachelor of Science in Biochemistry and Cell Biology
                        <li class="whereAndWhen">
                            Self- Employed - Santa Clara, CA
                        </li>
                        <li class="whereAndWhen">
                                2011
                        </li>
                </ul>
        </div>
        </div>
    )
  }
}
export default Resume;