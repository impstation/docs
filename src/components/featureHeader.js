import React from 'react';
import Admonition from '@theme/Admonition';

export default function FeatureHeader({authors, status}){
  return(
    <div>
      <Admonition type="note" title="Feature Info">
        <p><b>Author(s)</b>: {authors}</p>
        <p><b>Status</b>: {status}</p>
      </Admonition>
    </div>
  );
};