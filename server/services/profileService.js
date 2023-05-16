import User from '../models/user';

// Get user profile
export const getUserProfile = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.error('Error in getUserProfile service:', error);
    throw new Error('Server error');
  }
};

// Update user profile
export const updateUserProfile = async (userId, profileData) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    Object.assign(user, profileData);
    await user.save();

    return user;
  } catch (error) {
    console.error('Error in updateUserProfile service:', error);
    throw new Error('Server error');
  }
};
