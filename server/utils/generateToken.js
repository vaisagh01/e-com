import jwt from 'jsonwebtoken';

const generateToken = (userId, res) => {
    const token = jwt.sign({userId}, "vaisagh", {
        expiresIn:"15d",
    });
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly:true,
        sameSite: 'strict',
    })
}
export default generateToken;