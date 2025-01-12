import { useState } from 'react';
import DashboardContent from '../components/Dashboard/DashboardContent'
import {LeftSidebar} from '../components/config'

export type ActiveState = {
  Home:boolean,
  Events:boolean
  Committee:boolean
}

const Dashboard = () => {
  
  const [active,setActive] = useState({'Home':true,'Events':false,'Committee':false});
  return (
    <div className='flex main-bg'>
          <LeftSidebar active={active} setActive={setActive}/>
          <DashboardContent activePage={active}/>
    </div>

  )
}

export default Dashboard