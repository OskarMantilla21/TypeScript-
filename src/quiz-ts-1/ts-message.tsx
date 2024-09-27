import React from 'react';

interface MessageProps {
  message?: string;
}

function MessageDisplay({ message }: MessageProps) {

  return (
    <div>
      {message ? <p>{message}</p> : <p>No hay mensaje.</p>}
    </div>
  );
}

export default MessageDisplay;