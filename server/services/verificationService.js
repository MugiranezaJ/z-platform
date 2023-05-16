import User from '../models/user';

// Submit verification
export const submitVerification = async (userId, verificationData) => {
  try {
    const { nidOrPassportNumber, documentImage } = verificationData;

    const user = await User.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    user.nidOrPassportNumber = nidOrPassportNumber;
    user.documentImage = documentImage;
    user.accountStatus = 'PENDING VERIFICATION';

    await user.save();
  } catch (error) {
    console.error('Error in submitVerification service:', error);
    throw new Error('Server error');
  }
};

// Get verification status
export const getVerificationStatus = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    return user.accountStatus;
  } catch (error) {
    console.error('Error in getVerificationStatus service:', error);
    throw new Error('Server error');
  }
};
