import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  return (
    <div style={styles.profileContainer}>
      <div style={styles.imageContainer}>{children}</div>
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={handleName}>Show Name</button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  fullName: 'John Doe',
  bio: 'No bio available',
  profession: 'Unknown',
};

const styles = {
  profileContainer: {
    textAlign: 'center',
    margin: '20px',
  },
  imageContainer: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto 20px',
  },
};

export default Profile;
