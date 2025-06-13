import { NextFunction, Request, Response } from "express";
import authService from "../services/auth.service";
import { clerkClient, getAuth } from "@clerk/express";

const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = getAuth(req);

        if (!userId) {
            res.status(400).json({ success: false, message: "User ID is missing." });
            return;
        }

        const clerkUser = await clerkClient.users.getUser(userId);
        const email = clerkUser.emailAddresses?.[0]?.emailAddress;
        const mobile = clerkUser.phoneNumbers?.[0]?.phoneNumber;

        // Check for existing user by email
        if (email) {
            const existingUser = await authService.findUserByEmail(email);
            if (existingUser) {
                res.status(200).json({ success: true, user: existingUser });
                return;
            }
        }

        // Check for existing user by mobile
        if (mobile) {
            const existingUser = await authService.findUserByMobile(mobile);
            if (existingUser) {
                res.status(200).json({ success: true, user: existingUser });
                return;
            }
        }

        const newUser = await authService.createUser({
            id: clerkUser.id,
            email,
            mobile,
            name:
                `${clerkUser.firstName ?? ""} ${clerkUser.lastName ?? ""}`.trim() ||
                undefined,
            created_at: new Date(clerkUser.createdAt),
        });

        res.status(201).json({ success: true, user: newUser });
        return;
    } catch (error) {
        next(error);
    }
};

export { register };
