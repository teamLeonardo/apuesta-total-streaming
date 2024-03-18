/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        baseURL: 'https://api.themoviedb.org/3/',
        iframer: 'https://www.2embed.cc/embed/',
        apiKey: "c2be49192f9721b951964f057b8c6d3b",
        imageTmdb: "https://image.tmdb.org/t/p/w500"
    },
    images: {
        domains: ['m.media-amazon.com', 'image.tmdb.org', "pelisimg.online" ,"i.imgur.com", "encrypted-tbn0.gstatic.com"]
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/inicio',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
