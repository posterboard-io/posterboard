"use client"

import { DashboardShell } from "~/components/pb/dashboard/dashboard-shell"
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,    
} from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import React, { useState } from 'react';
import { pdfjs } from 'react-pdf';
import { api } from "~/trpc/react"
import Loading from "~/components/pb/utils/loading"


pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`


export default function DashboardResume() {

  const [resumeText, setResumeText] = useState('');
  
  const handleFileUpload = async (event: { target: any }) => {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      const typedArray = new Uint8Array(e.target!.result as ArrayBuffer);
      const pdf = await pdfjs.getDocument(typedArray).promise;
      const numPages = pdf.numPages;

      let extractedText = '';

      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item: any) => item.str).join(' ');        
        extractedText += pageText;
      }

      setResumeText(extractedText);
    };

    reader.readAsArrayBuffer(file);
  };

  const highlightKeyWords = (text: string) => {
    const keyWords = [
      'React', 'JavaScript', 'TypeScript', 'Node.js', 'Express',
      'MongoDB', 'PostgreSQL', 'GraphQL', 'Apollo', 'Prisma',
      'AWS', 'Docker', 'Kubernetes', 'Python', 'Django',
      'Flask', 'HTML', 'CSS', 'SASS', 'Tailwind',
      'Bootstrap', 'Material UI', 'Chakra UI', 'Next.js', 'Gatsby',
      'Vue.js', 'Angular', 'Svelte', 'Dart', 'Flutter',
      'Swift', 'Kotlin', 'Java', 'C#', 'C++',
      'Go', 'Ruby', 'Rails', 'PHP', 'Laravel',
      'SQL', 'NoSQL', 'Firebase', 'REST', 'API',
      'CI/CD', 'Jest', 'Mocha', 'Chai', 'Jasmine',
      'Cypress', 'React Testing Library', 'Enzyme', 'Storybook', 'Git',
      'GitHub', 'GitLab', 'BitBucket', 'Jira', 'Trello',
      'Asana', 'Agile', 'Scrum', 'Kanban', 'Figma',
      'Adobe XD', 'Sketch', 'InVision', 'Zeplin', 'Abstract',
      'Framer', 'Principle', 'Webflow', 'WordPress', 'Shopify',
      'Wix', 'Squarespace', 'Webflow', 'Gatsby', 'Netlify',
      'Vercel', 'Heroku', 'Digital Ocean', 'Azure', 'Google Cloud',
      'AWS', 'Linux', 'Windows', 'MacOS', 'iOS',
      'Android', 'Raspberry Pi', 'Arduino', 'Rust', 'Elixir',
      'Erlang', 'Scala', 'Haskell', 'Clojure', 'Lua',
      'Assembly', 'Bash', 'Shell',
    ];

    
    const escapedKeyWords = keyWords.map(keyword => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const keyWordsRegex = new RegExp(escapedKeyWords.join('|'), 'gi');
    const highlightedText = text
      .replace(keyWordsRegex, (match) => `<span class="bg-yellow-400 rounded-sm">${match}</span>`)
      .replace(/(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b)/g, '<span class="bg-blue-500 rounded-sm">$1</span>')
      .replace(/((https?|ftp|.com|.io|.app):\/\/[^\s/$.?#].[^\s]*\.(com|io|app))/g, '<span class="bg-green-500 rounded-sm">$1</span>')
      .replace(/(\+\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g, '<span class="bg-red-500 rounded-sm">$&</span>')
      .replace(/\b(college|education|certification|bootcamp|master|masters|batchelors|batchelors|associate|associates|phd|BS|MS|MCS|BA)\b/gi, '<span class="bg-purple-500 rounded-sm">$1</span>');
    return highlightedText;
  }

  return (
    <div className="flex">
        <DashboardShell  />
        <main className="flex-grow p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-medium">Resume</h1>                                    
            </div>                                         
                <div>
                  <Card className="w-full mt-4 p-4 flex justify-between items-center py-4">
                    <div>
                        <CardTitle className="text-2xl">                            
                            Resume ATS
                        </CardTitle>                                       
                        <CardDescription className="text-md text-black dark:text-white py-1">
                          Modern companies often use Applicant Tracking Systems (ATS) to filter out resumes that don&apos;t 
                          match the job description. It&apos;s important to optimize your resume for ATS, despite how frustrating 
                          it can be. We built a tool to help you optimize your resume for ATS. It&apos;s free to use, 
                          and you can upload your resume as many times as you want. Your resume is never stored on our servers. 
                          It&apos;s processed in your browser, and the results are displayed on your screen.
                        </CardDescription>
                          <CardContent>           
                            <div className="flex flex-col items-center py-4">               
                              <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="resume">Resume</Label>
                                <Input type="file" id="resume" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                  const files = Array.from(event.target.files || []);
                                  handleFileUpload({ target: { files } });
                                    handleFileUpload({ target: { files } });
                                  }
                                } 
                                />
                                </div>
                            </div>
                          </CardContent>
                        <div className="text-center">      
                          <CardDescription className="text-md text-black dark:text-white py-2 items-center justify-center">
                            <Button className="bg-black dark:bg-white text-white dark:text-black hover:bg-black hover:text-white" onClick={
                              () => {
                                console.log('clicked');
                                console.log(resumeText);
                                console.log('resumeText');
                              }
                            
                            }>
                              Run Resume ATS
                            </Button>
                          </CardDescription>
                        </div>                      
                    </div>                      
                  </Card>
                  {resumeText && (
                    <Card className="w-full mt-4 p-4 flex flex-col py-4 px-4">
                      <CardTitle className="text-2xl">                            
                        Results
                      </CardTitle> 
                      <CardDescription className="text-md text-black dark:text-white">
                        Here&apos;s what your resume would look like to an ATS. It's important to optimize your resume for ATS, but also make sure it's readable by humans!
                        <div className="flex flex-col py-2">
                          <div className="flex flex-row items-center">
                            <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2" />
                            <span>Applicant Keywords</span>
                          </div>
                          <div className="flex flex-row items-center">
                            <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
                            <span>Applicant URLs</span>
                          </div>
                          <div className="flex flex-row items-center">
                            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2" />
                            <span>Applicant Education</span>
                          </div>
                          <div className="flex flex-row items-center">
                            <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                            <span>Phone Numbers</span>
                          </div>
                          <div className="flex flex-row items-center">
                            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2" />
                            <span>Emails</span>
                          </div>
                        </div>
                      </CardDescription>
                      <hr className="my-4" />                      
                      <CardContent className="">                          
                          <p className="text-lg py-2" dangerouslySetInnerHTML={{ __html: highlightKeyWords(resumeText) }} />
                      </CardContent>
                    </Card>
                  )}
                </div>
        </main>
    </div>
)
}