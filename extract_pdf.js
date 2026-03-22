import fs from 'fs';
import pdf from 'pdf-parse';

async function extract() {
    try {
        const dataBuffer = fs.readFileSync('./public/resume.pdf');
        const data = await pdf(dataBuffer);
        console.log(data.text);
    } catch (err) {
        console.error("Error reading PDF:", err);
    }
}

extract();
