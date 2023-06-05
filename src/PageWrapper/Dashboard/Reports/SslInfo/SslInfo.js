import React from 'react'
import '../../../../CSS/History.css'

const SslInfo = () => {
  return (
    <div className="">
    <div className="ssl-main">
    <div className='ssl-top-section'>SSL Info</div>
      

      <table className="customers">
        <tr>
          <th>Expires in</th>
          <th>Valid From</th>
          <th>Valid To</th>
          <th>Valid For</th>
        </tr>
        <tr>
          <td>23 days</td>
          <td>22/02/2023</td>
          <td>05/12/2023</td>
          <td>www.example.com,www.example2.com</td>
         
        </tr>
        <tr>
          <td>23 days</td>
          <td>22/02/2023</td>
          <td>05/12/2023</td>
          <td>www.example.com</td>
         
        </tr>
        
        
          
       
      </table>
    </div>
  </div>
  )
}

export default SslInfo