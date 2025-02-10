import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
};

export const createPost = async (req, res) => {
    const { title, price, img, address, city, bedroom, bathroom, latitude, longitude, type, property, userId } = req.body;
    try {
        const newPost = await prisma.post.create({
            data: {
                title,
                price,
                img,
                address,
                city,
                bedroom,
                bathroom,
                latitude,
                longitude,
                type,
                property,
                userId,
            },
        });
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
    }
};

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, price, img, address, city, bedroom, bathroom, latitude, longitude, type, property } = req.body;
    try {
        const updatedPost = await prisma.post.update({
            where: { id },
            data: {
                title,
                price,
                img,
                address,
                city,
                bedroom,
                bathroom,
                latitude,
                longitude,
                type,
                property,
            },
        });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update post' });
    }
};

export const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.post.delete({
            where: { id },
        });
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete post' });
    }
};