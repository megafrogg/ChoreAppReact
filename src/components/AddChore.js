import React from 'react';

const AddChore = () => (
  <div>
    <input type="text" className="textbox" name="chore" placeholder="Chore..." id="amanda-chore-text" required />
    <input type="button" id="amanda-chore-button" value="Add Chore" />
    <input type="button" id="amanda-chore-clear" value="Clear Done" />
  </div>
);


export default AddChore;
