import bcrypt from 'bcryptjs'; // ✅ ใช้ 'bcryptjs' สำหรับ browser หรือ fallback

export const hashPassword = async (plain: string): Promise<string> => {
  return await bcrypt.hash(plain, 10);
};

export const comparePassword = async (plain: string, hash: string): Promise<boolean> => {
  return await bcrypt.compare(plain, hash);
};
