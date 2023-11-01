import jwt from "jsonwebtoken";

export function JWTsign(id) {
    return jwt.sign({data: id}, process.env.JWT_SECRET, {expiresIn: "24h"})
}