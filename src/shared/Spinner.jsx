import React from 'react';

function Spinner() {
  return (
    <div
      class="lds-spinner"
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Spinner;
