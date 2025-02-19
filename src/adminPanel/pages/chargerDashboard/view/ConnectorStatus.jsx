import React from 'react';

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString(); // Converts to readable format
}

function ConnectorStatus({ connector }) {
  return (
    <div>
      <h4>Connector Status</h4>
      {connector && connector.length > 0 ? (
        <ul>
          {connector.map((item) => (
            <li key={item.connectorId} style={{ marginBottom: '15px' }}>
              <div><strong> Connector ID:</strong> {item.connectorId}</div>
              <div><strong>Status:</strong> {item.status}</div>
              <div><strong>timestamp:</strong> {formatTimestamp(item.timestamp)}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No connector data available.</p>
      )}
    </div>
  );
}

export default ConnectorStatus;
