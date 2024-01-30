import React, { useState } from 'react';
import axios from 'axios';


function DeleteSafariPage() {
  const [safariId, setSafariId] = useState('');
 
  const deleteSafari = async () => {
     try {
       await axios.delete(`http://127.0.0.1:3000/safaris/${safariId}`);
       alert('Safari deleted successfully!');
     } catch (error) {
       console.error("Failed to delete safari", error);
     }
  };
 
  return (
     <div>
       <input type="text" value={safariId} onChange={e => setSafariId(e.target.value)} />
       <button onClick={deleteSafari}>Delete Safari</button>
     </div>
  );
 }
 
 export default DeleteSafariPage;
 
