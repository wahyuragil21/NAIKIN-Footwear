import bcrypt from 'bcryptjs';

export const hashPassword = (password: string) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

export const comparePassword = (plainPass: string, password: string) => {
    return bcrypt.compareSync(plainPass, password);
}
