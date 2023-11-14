import fs from 'fs';

interface Company {
    id: number;
    name: string;
    questions: Question[];
}
  
interface Question {
    id: number;
    name: string;
    link: string;
    numOccur: number;
    companyId: number;
}
  

function main() {
    const leetcodeProblems = JSON.parse(fs.readFileSync('./lc.json', 'utf8'));


}