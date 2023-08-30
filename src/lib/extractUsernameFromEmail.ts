const extractUsernameFromEmail = (email: string | null | undefined) => {
  const atIndex = email?.indexOf("@"); // Find the index of the '@' symbol
  if (atIndex !== -1) {
    return email?.slice(0, atIndex); // Extract the part before '@'
  }
  return email; // Return the original email if no '@' symbol is found
};

export default extractUsernameFromEmail;
