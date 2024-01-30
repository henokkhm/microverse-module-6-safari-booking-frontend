import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SafariDetailsPage() {
  const [safariData, setSafariData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/safaris');
        setSafariData(response.data);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {safariData && (
      <>
        <h1>{safariData.title}</h1>
        <p>{safariData.description}</p>
        {/* More fields here */}
      </>
      )}
    </div>
  );
}

export default SafariDetailsPage;
