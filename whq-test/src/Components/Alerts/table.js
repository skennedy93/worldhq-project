import React, { Component } from 'react'
import exclamation from '../../assets/icons/exclamation-circle.svg'

class Table extends Component {
   constructor(props) {
      super(props) 
      this.state = { 
         items: [
            { Status:'', Date: '4/16/2019 11:51:03 AM', Store: "92nd & Shea Scottsdale", "Failure Type": 'Send' },
            { Status:'', Date: '4/16/2019 11:54:09 AM', Store: "92nd & Shea Scottsdale", "Failure Type": 'Send' },
            { Status:'', Date: '4/16/2019 11:56:32 AM', Store: "92nd & Shea Scottsdale", "Failure Type": 'Send' },
         ]
      }
   }
   renderTableData() {
    return this.state.items.map((item, index) => {
       const { Date:date, Store:store, "Failure Type":failure } = item
       return (
          <tr>
            <td className = "exc-icon">
               <img src={exclamation} alt="settings icon" />
            </td>
             <td>{date}</td>
             <td>{store}</td>
             <td>{failure}</td>
          </tr>
       )
    })
 }

 renderTableHeader() {
    let header = Object.keys(this.state.items[0])
    return header.map((key, index) => {
       return <th key={index}>{key}</th>
    })
 }
   render() { 
      return (
        <div>
        <table >
        <tbody>
        <tr>
        {this.renderTableHeader()}
        </tr>
            {this.renderTableData()}
        </tbody>
        </table>
     </div>
      )
   }
}

export default Table