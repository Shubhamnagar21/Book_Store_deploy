export const PORT = 5555;

const username = encodeURIComponent('sachinnagar');
const password = encodeURIComponent('Nagar@123');
export const mongodbURL = `mongodb+srv://${username}:${password}@cluster0.fj16rrv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;