import bcrypt from "bcryptjs";

export async function hashPassword(password) {
  // a random value that is added to the password before hashing
  const salt = await bcrypt.genSalt(10);

  //hash the password with salt
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export async function comparePassword(password, hashedPassword) {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}
