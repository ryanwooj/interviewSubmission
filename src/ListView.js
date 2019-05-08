import React from 'react'

const ListView = ({item, timeConverter}) => {
  return (
   <div>
    <table className="ui inverted right aligned table">
        <tbody>
        <tr>
            <td className="left aligned">Date Added</td>
            <td>{timeConverter(item.added)}</td>
        </tr>
        <tr>
            <td className="left aligned">Title</td>
            <td>{item.title}</td>
        </tr>
        <tr>
            <td className="left aligned">Type</td>
            <td>{item.type}</td>
        </tr>
        <tr>
            <td className="left aligned">Casting Director</td>
            <td>{item.castingDirector}</td>
        </tr>
        <tr>
            <td className="left aligned">Start Date</td>
            <td>{timeConverter(item.startDate)}</td>
        </tr>
    </tbody>
    </table>  
    <br/>
   </div>  
  )
}

export default ListView
