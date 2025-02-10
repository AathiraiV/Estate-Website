import bcrypt from "bcrypt";
import prisma from "../library/prisma.js";

// ✅ REGISTER API
export const register = async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
        // Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password:", hashedPassword);

        // Create New User in Database
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        console.log("New User Created:", newUser);
        
        // ✅ Ensure response includes user data
        res.status(201).json({ message: "User created successfully", user: newUser });

    } catch (err) {
        console.error("Registration Error:", err);
        res.status(500).json({ message: "Failed to create user!" });
    }
};

// ✅ LOGIN API
export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user in DB
        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) {
            return res.status(401).json({ message: "Invalid Credentials!" });
        }

        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid Credentials!" });
        }

        console.log("User logged in:", user);

        // ✅   Proper JSON response
        res.status(200).json({ message: "Login successful!", user });

    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ message: "Failed to login!" });
    }
};

// ✅ LOGOUT API
export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logout Success" });
};
