import React from 'react'
import Navbar from '../components/Navbar';

export default function FavouriteList() {
  
  return (
    <>
    <Navbar/>
    <div>
      <table>
        <thead>
            <tr>
                <th>Favourite</th>
                <th>ID</th>
                <th>Category</th>
                <th>Setup</th>
                <th>Delivery</th>
            </tr>
        </thead>
        <tbody>
    {/*                     {parsedFav.map(listItem => {
            return (
            <tr key={listItem.id} id={listItem.id}>
                <td>&nbsp;</td>
                <td>{ listItem.id }</td>
                <td>{ listItem.category }</td>
                    <td>{listItem.setup || listItem.joke}</td>
                {listItem.type = 'twopart' && 
                    <td>{listItem.delivery}</td>
                }                    
            </tr>
        );
        })} */}
        </tbody>
      </table>
    </div>
    </>
  )
}
