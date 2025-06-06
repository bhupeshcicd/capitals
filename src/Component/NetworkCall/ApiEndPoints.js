/** @format */

const APPConfig = {
  API_URL: "https://backend.maharanacapital.in",
};

const ApiEndPoints = {
  Login: `${APPConfig.API_URL}/auth/signin`,
  Register: `${APPConfig.API_URL}/auth/signup`,
  GetUserPortfolio: `${APPConfig.API_URL}/general/getUserPortfolio`,
  getBankDetails: `${APPConfig.API_URL}/general/getBankDetails`,
  AddBankDetail: `${APPConfig.API_URL}/general/addBankDetail`,
  getImage: `${APPConfig.API_URL}/general/downloadProfilePic`,
  updateImage: `${APPConfig.API_URL}/general/uploadProfilePic`,
  getAllProtFolio: `${APPConfig.API_URL}/general/getAllUserPort`,
  addProtFolio: `${APPConfig.API_URL}/general/addUserPort`,
  getUserLumSumPortfolio: `${APPConfig.API_URL}/general/getUserLumSumPortfolio`,
  getAdminLumSumPortfolio: `${APPConfig.API_URL}/general/getAdminLumSumPortfolio`,
  uploadImage: `${APPConfig.API_URL}/general/uploadProfilePic`,
  updateUserProfile: `${APPConfig.API_URL}/general/updateUserProfile`,
  getUserProfile: `${APPConfig.API_URL}/general/getUserProfile`,
  UpdatePrimaryBank: `${APPConfig.API_URL}/general/updatePrimaryBank`,
  publicCalculator: `${APPConfig.API_URL}/general/publicCalculator`,
  getAllTransactions: `${APPConfig.API_URL}/general/getAllTransactions`,
  getUserTransactions: `${APPConfig.API_URL}/general/getUserTransactions`,
  addTransaction: `${APPConfig.API_URL}/general/addTransaction`,
};

export default ApiEndPoints;
