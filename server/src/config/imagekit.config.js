import ImageKit from '@imagekit/nodejs';
import { IMAGEKIT_SECRET } from './env.config.js';

const client = new ImageKit({
    privateKey: IMAGEKIT_SECRET
});


const getMediaUrl = async (file) => {
    const response = await client.files.upload({
        // file: file.buffer.toString('base64'),
        file: await ImageKit.toFile(file.buffer,file.originalname),
        fileName: file.originalname,
    });

    return { url: response.url, mediaType: file.mimetype.startsWith('image') ? 'image' : 'video' };
}

export default getMediaUrl;