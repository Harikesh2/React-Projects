const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}

export default config;