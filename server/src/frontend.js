import path from "path";

export const frontendPath = path.join(path.resolve(), "./client/dist")

export default (req, res) => {
    // res.sendFile(path.resolve(frontendPath, 'index.html'));
    res.sendFile("index.html", { root: frontendPath });
}