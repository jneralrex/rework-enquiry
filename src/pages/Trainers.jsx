import React from "react";
import Card from "react-bootstrap/Card";
import { LuUsers } from "react-icons/lu";
import {
  FiBell,
  FiSearch,
  FiPlus,
} from "react-icons/fi";
import { SlOptions } from "react-icons/sl";

const Trainers = () => {

  return (
    <div style={{width: '100vw', }}>
      <div style={{ display: "flex", marginBottom: "30px", gap: "20px", width: '75%' }}>
        <div
          style={{
            borderRight: "1px solid grey",
            display: "flex",
            alignItems: "center",
            width: '100%',
            justifyContent: "space-between",
            padding: "1px",
          }}
        >
          <div style={{ fontWeight: "700", fontSize: "20px" }}>
            Manage Trainers
          </div>
          <div
            style={{
              display: "flex",
              width: "10%",
              justifyContent: "space-around",
            }}
          >
            <div>
              <FiSearch />
            </div>
            <div>
              <FiBell />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", width: '19%', justifyContent: 'space-around' }}>
          <div>Jones Ferdinand</div>
          <div>
            <LuUsers />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", gap: "200px", marginBottom: '20px' }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "140px",
            border: "1px solid",
            justifyContent: "space-between",
            padding: "5px",
            borderRadius: "5px",
            fontWeight: '700'
          }}
        >
          <div> New Trainer</div>
          <div>
            <FiPlus />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "37%",
            border: "1px solid #eaeaea",
            padding: "5px",
            borderRadius: "5px",
            justifyContent: "space-between",
          }}
        >
          <div>Search</div>
          <div>
            <FiSearch />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '150px'}}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', width: '500px', justifyContent: 'space-between', gap: '10px'}}>
          <Card style={{ width: '300px', height: '', marginBottom: '20px', padding: '3px', }} >
            <Card.Body style={{ display: 'flex', justifyContent: 'space-around', padding: '0', }}>
              <div style={{ display: 'flex', gap: '10px', width: '80%', alignItems: 'center' }}>
                <div style={{ height: '45px', width: '45px', borderRadius: '100%', border: '1px solid' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '12px' }}>
                  <div style={{ fontWeight: '700' }}>Lydia Jonathan</div>
                  <div>lydia@gmail.com</div>
                  <div>453243</div>
                  <div>Performance <span style={{ color: '#27bbf1' }}>90%</span></div>
                </div>
              </div>
              <div>
                <SlOptions />
              </div>

            </Card.Body>
          </Card>
          <Card style={{ width: '300px', height: '', marginBottom: '20px', padding: '3px' }} >
            <Card.Body style={{ display: 'flex', justifyContent: 'space-around', padding: '0', }}>
              <div style={{ display: 'flex', gap: '10px', width: '80%', alignItems: 'center' }}>
                <div style={{ height: '45px', width: '45px', borderRadius: '100%', border: '1px solid' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '12px' }}>
                  <div style={{ fontWeight: '700' }}>Lydia Jonathan</div>
                  <div>lydia@gmail.com</div>
                  <div>453243</div>
                  <div>Performance <span style={{ color: '#27bbf1' }}>90%</span></div>
                </div>
              </div>
              <div>
                <SlOptions />
              </div>

            </Card.Body>
          </Card>
          <Card style={{ width: '300px', height: '', marginBottom: '20px', padding: '3px' }} >
            <Card.Body style={{ display: 'flex', justifyContent: 'space-around', padding: '0', }}>
              <div style={{ display: 'flex', gap: '10px', width: '80%', alignItems: 'center' }}>
                <div style={{ height: '45px', width: '45px', borderRadius: '100%', border: '1px solid' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '12px' }}>
                  <div style={{ fontWeight: '700' }}>Lydia Jonathan</div>
                  <div>lydia@gmail.com</div>
                  <div>453243</div>
                  <div>Performance <span style={{ color: '#27bbf1' }}>90%</span></div>
                </div>
              </div>
              <div>
                <SlOptions />
              </div>

            </Card.Body>
          </Card>
          <Card style={{ width: '300px', height: '', marginBottom: '20px', padding: '3px' }} >
            <Card.Body style={{ display: 'flex', justifyContent: 'space-around', padding: '0', }}>
              <div style={{ display: 'flex', gap: '10px', width: '80%', alignItems: 'center' }}>
                <div style={{ height: '45px', width: '45px', borderRadius: '100%', border: '1px solid' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '12px' }}>
                  <div style={{ fontWeight: '700' }}>Lydia Jonathan</div>
                  <div>lydia@gmail.com</div>
                  <div>453243</div>
                  <div>Performance <span style={{ color: '#27bbf1' }}>90%</span></div>
                </div>
              </div>
              <div>
                <SlOptions />
              </div>

            </Card.Body>
          </Card>
          <Card style={{ width: '300px', height: '', marginBottom: '20px', padding: '3px' }} >
            <Card.Body style={{ display: 'flex', justifyContent: 'space-around', padding: '0', }}>
              <div style={{ display: 'flex', gap: '10px', width: '80%', alignItems: 'center' }}>
                <div style={{ height: '45px', width: '45px', borderRadius: '100%', border: '1px solid' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '12px' }}>
                  <div style={{ fontWeight: '700' }}>Lydia Jonathan</div>
                  <div>lydia@gmail.com</div>
                  <div>453243</div>
                  <div>Performance <span style={{ color: '#27bbf1' }}>90%</span></div>
                </div>
              </div>
              <div>
                <SlOptions />
              </div>

            </Card.Body>
          </Card>
          <Card style={{ width: '300px', height: '', marginBottom: '20px', padding: '3px' }} >
            <Card.Body style={{ display: 'flex', justifyContent: 'space-around', padding: '0', }}>
              <div style={{ display: 'flex', gap: '10px', width: '80%', alignItems: 'center' }}>
                <div style={{ height: '45px', width: '45px', borderRadius: '100%', border: '1px solid' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '12px' }}>
                  <div style={{ fontWeight: '700' }}>Lydia Jonathan</div>
                  <div>lydia@gmail.com</div>
                  <div>453243</div>
                  <div>Performance <span style={{ color: '#27bbf1' }}>90%</span></div>
                </div>
              </div>
              <div>
                <SlOptions />
              </div>

            </Card.Body>
          </Card>
          <Card style={{ width: '300px', height: '', marginBottom: '20px', padding: '3px' }} >
            <Card.Body style={{ display: 'flex', justifyContent: 'space-around', padding: '0', }}>
              <div style={{ display: 'flex', gap: '10px', width: '80%', alignItems: 'center' }}>
                <div style={{ height: '45px', width: '45px', borderRadius: '100%', border: '1px solid' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '12px' }}>
                  <div style={{ fontWeight: '700' }}>Lydia Jonathan</div>
                  <div>lydia@gmail.com</div>
                  <div>453243</div>
                  <div>Performance <span style={{ color: '#27bbf1' }}>90%</span></div>
                </div>
              </div>
              <div>
                <SlOptions />
              </div>

            </Card.Body>
          </Card>
          <Card style={{ width: '300px', height: '', marginBottom: '20px', padding: '3px' }} >
            <Card.Body style={{ display: 'flex', justifyContent: 'space-around', padding: '0', }}>
              <div style={{ display: 'flex', gap: '10px', width: '80%', alignItems: 'center' }}>
                <div style={{ height: '45px', width: '45px', borderRadius: '100%', border: '1px solid' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', fontSize: '12px' }}>
                  <div style={{ fontWeight: '700' }}>Lydia Jonathan</div>
                  <div>lydia@gmail.com</div>
                  <div>453243</div>
                  <div>Performance <span style={{ color: '#27bbf1' }}>90%</span></div>
                </div>
              </div>
              <div>
                <SlOptions />
              </div>
            </Card.Body>
          </Card>
        </div>
          <Card style={{ width: '380px', minHeight:'100px',}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
              <div>Trainer Profile</div>
              <div><SlOptions /></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: '0' }}>
              <div style={{ height: '120px', width: '120px', borderRadius: '100%', border: '1px solid' }}>Profile picture</div>
              <div style={{ fontWeight: '700' }}>Aguguom Wisdom</div>
              <div style={{ fontWeight: '400', fontSize: '10px' }}>allisonjames@gmail.com</div>
              <div style={{ fontWeight: '400', fontSize: '10px' }}>EMP-ID: 80663583</div>
              <div style={{ display: 'flex', width: '230px', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', fontSize: '12px', width: '100px', justifyContent: 'space-between' }}>
                  <div>Performance</div>
                  <span style={{ color: '#27bbf1' }}>80%</span>
                </div>
                <div style={{ display: 'flex', fontSize: '12px', width: '100px', justifyContent: 'space-between' }}>
                  <div>Attendance</div>
                  <span style={{ color: '#27bbf1' }}>80%</span>
                </div>
              </div>
            </div>
            <hr style={{ margin: '10px' }} />
            <div style={{ padding: '0', margin: '0 30px', display:'flex', flexDirection:'column', gap:'15px' }}>
              <div style={{ display: 'flex', gap:'95px', fontSize:'12px' }}>
                <div >Phone</div>
                <div style={{fontWeight:'700'}}>:09034234234</div>
              </div>
              <div style={{ display: 'flex', gap:'90px', fontSize:'12px'  }}>
                <div>Phone2</div>
                <div style={{fontWeight:'700'}}>:09034234234</div>
              </div>
              <div style={{ display: 'flex', gap:'60px', fontSize:'12px'  }}>
                <div>Current Class</div>
                <div style={{fontWeight:'700'}}>:Batch 10 Java Script.</div>
              </div>
              <div style={{ display: 'flex', gap:'50px', fontSize:'12px'  }}>
                <div style={{width:'200px'}}>Home Address</div>
                <div style={{fontWeight:'700'}}>:No 12, Suit 1, 2nd Floor Akija Plaza, Vanilla Street, Off Malita Street, Garki Abuja.</div>
              </div>
              <div style={{ display: 'flex', gap:'50px', fontSize:'12px'  }}>
                <div style={{width:'200px'}}>Current Branch</div>
                <div style={{fontWeight:'700'}}>:No 12, Suit 1, 2nd Floor Akija Plaza, Vanilla Street, Off Malita Street, Garki Abuja.</div>
              </div>
            </div>
            <hr style={{ margin: '10px' }}/>
            <div style={{ padding: '0', margin: '0 30px', display:'flex', flexDirection:'column', gap:'15px' }}>
             
            </div>
          </Card>
        </div>
      </div>
  )
}

export default Trainers