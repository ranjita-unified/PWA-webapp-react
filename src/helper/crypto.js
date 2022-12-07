const CryptoJS = require("crypto-js"); 

export const CryptoHandlertoEncrypt = (userData) => CryptoJS.AES.encrypt(JSON.stringify(userData), userData.password).toString();

export const CryptoHandlertoDecrypt = (encryptedPassword,enteredPassword) => {
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, enteredPassword);
    try {
        const decryptedData = typeof bytes !== "undefined"?JSON.parse(bytes.toString(CryptoJS.enc.Utf8)):"";
        const decryptedPassword = typeof decryptedData !== "undefined"?decryptedData.password:""
        return decryptedPassword;
      } catch (error) {
        return null
      }
}