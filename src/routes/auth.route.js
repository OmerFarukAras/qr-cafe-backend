import { Router } from 'express';

const router = Router();

export function AuthRoute(logger) {
    router.post("/", (req, res) => {
        let { error, value } = userRegisterController(req.body)
        if (error) {
            res.status(500).send({ err: error })
        } else {
            let user = new User(value)
            user.save().then(r => {
                let JWData = JWTsign(user._id)
                if (!JWData) {
                    res.status(500).json({ err: "Server error" })
                } else {
                    logger.ignore("New user registered uuid: " + r._id, r)
                    mailer.sendRegisterMail(r)
                    res.cookie("TOKEN", JWData)
                    res.status(200).json({ data: JWData })
                }
            }).catch(err => {
                res.status(500).send({ err: err.message })
            });
        }
    }
    )

    return router
}