import React from 'react'
import '../../../CSS/ReportModals.css'
import Modal from '../../../PageWrapper/Home/SsslMonitoring/Modals/Components/Modal'
import { Link } from 'react-router-dom'

const ReportModals = () => {
  return (
    <div>

        <div>
            <h1>Reports</h1>
        </div>
        <div className="modals"> 
        <Link to={'/graph'}>
        <div> 
         <Modal/>
        </div>
         <div>
         <Modal/>
         </div>
         <div>
         <Modal/>
         </div>
         </Link>
        </div>
        
        
    </div>
  )
}

export default ReportModals