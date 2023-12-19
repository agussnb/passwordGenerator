export const generateRandomAlphabeticPassword = (length) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      password += alphabet.charAt(randomIndex);
    }
  
    return password;
  };
  
export const generateRandomAlphanumericPassword = (length) => {
    const alphanumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * alphanumeric.length);
      password += alphanumeric.charAt(randomIndex);
    }
  
    return password;
  };
  
export const generateRandomNumericPassword = (length) => {
    const numeric = '0123456789';
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * numeric.length);
      password += numeric.charAt(randomIndex);
    }
  
    return password;
  };
  
