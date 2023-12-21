import fs from 'fs';
import { Company, Question } from '~/types/types';  

function main() {
    const leetcodeProblems = JSON.parse(fs.readFileSync('./lc.json', 'utf8'));
}