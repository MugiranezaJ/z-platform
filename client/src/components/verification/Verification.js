import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { verifyAccount } from '../actions/verificationActions';
import { verifyUserAccount } from '../../redux/verification/verificationActions';

function Verification() {
  const [nid, setNid] = useState('');
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append('nid', nid);
    formData.append('image', image);

    // Dispatch verifyAccount action with the form data
    dispatch(verifyUserAccount(formData));

    // Reset form fields
    setNid('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div>
      <h2>Account Verification</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nid">National Identification Number (NID)</label>
          <input
            type="text"
            id="nid"
            value={nid}
            onChange={(e) => setNid(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">Upload Document Image</label>
          <input type="file" id="image" onChange={handleImageChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Verification;
