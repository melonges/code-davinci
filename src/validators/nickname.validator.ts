export const validateNickname = (nickname: string) => {
  if (nickname.length < 2 || nickname.length > 50) {
    throw new Error("Nickname must be between 2 and 50 characters");
  }
};
