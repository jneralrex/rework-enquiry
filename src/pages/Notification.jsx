import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { SlOptionsVertical } from 'react-icons/sl';
import '../assets/styles/pages/notification.css'
const Notification = () => {
  return (
    <div>
        <div className='top-bar'>
            <div className='all'>All</div>
            <div>Follow Ups</div>
            <div>Status Updates</div>
            <div>Assignment</div>
        </div>
        <div className='main-holder'>
        <div className='notification-section'>Today</div>
        <ListGroup>
          <div className='item-notification-div'>
            <ListGroup.Item className='list-notification-item'>
            <div className='first-div'>
            <div className='list-item-notification'>Follow up</div>
            <div className='notification-time'>22/12/2024</div>
            </div>
              <div className=''>
                <div className='list-item-notification-msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus unde fugiat delectus doloremque error!</div>
              </div>
              <div>
              <SlOptionsVertical size={20} style={{ color: 'black' }} />
              </div>
            </ListGroup.Item>
          </div>
          <div className='item-notification-div'>
            <ListGroup.Item className='list-notification-item'>
            <div className='first-div'>
            <div className='list-item-notification'>Follow up</div>
            <div className='notification-time'>22/12/2024</div>
            </div>
              <div className=''>
                <div className='list-item-notification-msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus unde fugiat delectus doloremque error!</div>
              </div>
              <div>
              <SlOptionsVertical size={20} style={{ color: 'black' }} />
              </div>
            </ListGroup.Item>
          </div>
          <div className='item-notification-div'>
            <ListGroup.Item className='list-notification-item'>
            <div className='first-div'>
            <div className='list-item-notification'>Follow up</div>
            <div className='notification-time'>22/12/2024</div>
            </div>
              <div className=''>
                <div className='list-item-notification-msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus unde fugiat delectus doloremque error!</div>
              </div>
              <div>
              <SlOptionsVertical size={20} style={{ color: 'black' }} />
              </div>
            </ListGroup.Item>
          </div>  
           </ListGroup>
        </div>
        <div className='main-holder'>
        <div className="notification-section">Yesterday</div>
        <ListGroup>
          <div className='item-notification-div'>
            <ListGroup.Item className='list-notification-item'>
            <div className='first-div'>
            <div className='list-item-notification'>Follow up</div>
            <div className='notification-time'>22/12/2024</div>
            </div>
              <div className=''>
                <div className='list-item-notification-msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus unde fugiat delectus doloremque error!</div>
              </div>
              <div>
              <SlOptionsVertical size={20} style={{ color: 'black' }} />
              </div>
            </ListGroup.Item>
          </div>
          <div className='item-notification-div'>
            <ListGroup.Item className='list-notification-item'>
            <div className='first-div'>
            <div className='list-item-notification'>Follow up</div>
            <div className='notification-time'>22/12/2024</div>
            </div>
              <div className=''>
                <div className='list-item-notification-msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus unde fugiat delectus doloremque error!</div>
              </div>
              <div>
              <SlOptionsVertical size={20} style={{ color: 'black' }} />
              </div>
            </ListGroup.Item>
          </div>
          <div className='item-notification-div'>
            <ListGroup.Item className='list-notification-item'>
            <div className='first-div'>
            <div className='list-item-notification'>Follow up</div>
            <div className='notification-time'>22/12/2024</div>
            </div>
              <div className=''>
                <div className='list-item-notification-msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus unde fugiat delectus doloremque error!</div>
              </div>
              <div>
              <SlOptionsVertical size={20} style={{ color: 'black' }} />
              </div>
            </ListGroup.Item>
          </div>  
           </ListGroup>
        </div>
        <div className='main-holder'>
        <div className="notification-section">Last 7 days</div>
        <ListGroup>
          <div className='item-notification-div'>
            <ListGroup.Item className='list-notification-item'>
            <div className='first-div'>
            <div className='list-item-notification'>Follow up</div>
            <div className='notification-time'>22/12/2024</div>
            </div>
              <div className=''>
                <div className='list-item-notification-msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus unde fugiat delectus doloremque error!</div>
              </div>
              <div>
              <SlOptionsVertical size={20} style={{ color: 'black' }} />
              </div>
            </ListGroup.Item>
          </div>
          <div className='item-notification-div'>
            <ListGroup.Item className='list-notification-item'>
            <div className='first-div'>
            <div className='list-item-notification'>Follow up</div>
            <div className='notification-time'>22/12/2024</div>
            </div>
              <div className=''>
                <div className='list-item-notification-msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus unde fugiat delectus doloremque error!</div>
              </div>
              <div>
              <SlOptionsVertical size={20} style={{ color: 'black' }} />
              </div>
            </ListGroup.Item>
          </div>
          <div className='item-notification-div'>
            <ListGroup.Item className='list-notification-item'>
            <div className='first-div'>
            <div className='list-item-notification'>Follow up</div>
            <div className='notification-time'>22/12/2024</div>
            </div>
              <div className=''>
                <div className='list-item-notification-msg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit possimus unde fugiat delectus doloremque error!</div>
              </div>
              <div>
              <SlOptionsVertical size={20} style={{ color: 'black' }} />
              </div>
            </ListGroup.Item>
          </div>  
           </ListGroup>
        </div>
    </div>
  )
}

export default Notification