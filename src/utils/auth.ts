import { jwt } from 'jsonwebtoken';
import { User } from '../graphql/schemas/objects/user'

export const createJWTToken = (user: User): String => {
    return jwt.sign({ user }, "secret", {
        expiresIn: '1d'
    })
}