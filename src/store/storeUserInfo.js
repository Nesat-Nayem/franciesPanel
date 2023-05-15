export const getStoreInfo = () => {

    // const authData = JSON.parse(localStorage.getItem('persist:root'));
    // const authData1 = JSON.parse(authData.authentication);
    // const token = authData1?.token
    const authData = JSON?.parse(localStorage?.getItem('persist:root'));
    // const authData1 = JSON.parse(authData.authentication);
    const authData1 = JSON?.parse(authData?.authentication);
    const user = authData1?.apiResponse
  

    // return localStorage.getItem('token');
    return user;
  }