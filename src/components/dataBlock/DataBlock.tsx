import React, { useEffect, useState } from 'react';
import { Data, baseUrl } from '../../api/api';
import './DataBlock.css';

function DataBlock() {
  const [result, setResult] = useState<[Data]>();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [isMouse, setIsMouse] = useState(false);

  useEffect(() => {
    fetch(`${baseUrl}`)
      .then((res) => {
        if (!res.ok) {
          throw Error('Сould not fetch the data for that resours');
        }
        return res.json();
      })
      .then((data) => {
        if (!result) {
          setResult(data);
        }
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, [result]);

  const showStyles = (sum: number) => {
    if (isMouse) {
      if (sum === 5100) {
        return 'column column-active1';
      }
      return 'column column-active2';
    }
    return 'column';
  };

  return (
    <div className="data-blok">
      {isPending && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {result &&
        !error &&
        result.map((val) => (
          <div
            onMouseEnter={() => setIsMouse(true)}
            onMouseLeave={() => setIsMouse(false)}
            className={showStyles(val.sum)}
            style={val.sum === 5100 ? { height: 218 } : { height: 71 }}
            key={val.id}
          />
        ))}
    </div>
  );
}

export default DataBlock;
