import React from 'react'
// import '../../../CSS/ReportModals.css'

import { Link } from 'react-router-dom'
import StatusField from '../../Home/SsslMonitoring/Modals/Components/StatusField'
import '../../../CSS/ReportMiddle2.css'

const ReportMiddle = () => {
  return (
    <div className='Status-main'> 
    <Link to={'/reportdetails'}>
    <div><StatusField/></div>
    </Link>
    <div><StatusField/></div>
    <div><StatusField/></div>
    <div><StatusField/></div>
    </div>
  )
}

export default ReportMiddle