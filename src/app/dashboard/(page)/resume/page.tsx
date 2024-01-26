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
import { toast, useToast } from "~/components/ui/use-toast"
import Link from "next/link"
import { Badge, badgeVariants } from "~/components/ui/badge"


type HighlightConfig = {
    keywords: string[],
    colorClass: string
};



pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`


export default function DashboardResume() {

  const [resumeText, setResumeText] = useState("");
  
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
    const keyWordsTechStack = [
      'React', 'JavaScript', 'TypeScript', 'Node.js', 'Express',
      'MongoDB', 'PostgreSQL', 'GraphQL', 'Apollo', 'Prisma',
      'AWS', 'Docker', 'Kubernetes', 'Python', 'Django',
      'Flask', 'HTML', 'CSS', 'SASS', 'Tailwind',
      'Bootstrap', 'Material UI', 'Chakra UI', 'Next.js', 'Gatsby',
      'Vue.js', 'Angular', 'Svelte', 'Dart', 'Flutter',
      'Swift', 'Kotlin', 'Java', 'C#', 'C++',
      'Go ', 'Ruby', 'Rails', 'PHP', 'Laravel',
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
      'Assembly', 'Bash', 'Shell', 'Microservice', 'Serverless',
      'REST', 'API', 'GraphQL', 'WebSockets', 'OAuth',
    ];

    const keywordsEducation = [
      'college', 'education', 'certification', 'bootcamp', 
      'master', 'masters', 'bachelor', 'batchelors', 'associate', 
      'associates', 'phd', 'BS', 'MS', 'MCS', 'BA', 'university', 
      'engineering', 'science', 'computer science', 'computer engineering',
      'computer information systems', 'information systems', 'information technology',
      'IT', 'computer information technology', 'computer information science',
      'computer information systems', 'computer information systems', 'computer information systems',
      'research', 'researcher', 'researching', 'researched', 'researches',
      'B.S.', 'M.S.', 'MCS', 'B.A.', 'Institute of Technology', 'certificate', 'certifications', 'certified',
    ];

    const personalNetwork = [
      'linkedin', 'github', 'twitter', 'site',
      'portfolio', 'website', 'personal website', 'personal site', 'personal portfolio',
      'personal blog', 'blog', 'dev', 'dev.to', 'medium',
      'stackoverflow', 'behance', 'dribbble', 'codepen', 'gitlab',
      'bitbucket', 'npm', 'npmjs', 'npm package', 'npm module',
      'npm library', 'npm repo', 'npm repository', 'npm package', 'npm module',
      'pypi', 'rubygems', 'crates.io', 'nuget', 'packagist',
      'leet code', 'leetcode', 'hackerrank', 'hackerearth', 'codechef',
      'project', 'project repo', 'project repository', 'project github', 'project gitlab',
      'talks', 'talk', 'conference', 'conference talk', 'conference talks',
      'meetup', 'meetups', 'meetup talk', 'meetup talks', 'meetup presentation',
      'member', 'member of', 'member at', 'member of', 'member of',
    ];

    const previousCompanies = [
      'google', 'microsoft', 'facebook', 'amazon', 'apple',
      'netflix', 'twitter', 'uber', 'airbnb', 'lyft',
      'stripe', 'square', 'salesforce', 'snapchat', 'snap',
      'oracle', 'intel', 'ibm', 'cisco', 'adobe',
      'nvidia', 'paypal', 'spotify', 'linkedin', 'github',
      'ebay', 'yahoo', 'qualcomm', 'tesla', 'twitch',
      'reddit', 'dropbox', 'pinterest', 'slack', 'quora',
      'tiktok', 'zoom', 'atlassian', 'twilio', 'doordash',
    ];

    const contactPoints = [
      '@gmail.com', '@yahoo.com', '@hotmail.com', '@outlook.com', '@icloud.com',
      '@aol.com', '@live.com', '@msn.com', '@zoho.com', '@yandex.com',
      '@protonmail.com', '@mail.com', '@inbox.com', '@gmx.com', '@fastmail.com',
      '@email.com', '.edu', '.io', '.co', '.app', '.com'
    ];

    const importantDates = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", 
      "October", "November", "December", "Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007",
      "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015",
      "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023",
      "2024", "2025", "2026", "2027", "2028", "2029", "2030", "2031",
    ]
    
    const escapeRegExp = (keyword: string) => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Create a single regular expression for each keyword category
    const techStackRegex = new RegExp(`\\b(${keyWordsTechStack.map(escapeRegExp).join('|')})\\b`, 'gi');
    const educationRegex = new RegExp(`\\b(${keywordsEducation.map(escapeRegExp).join('|')})\\b`, 'gi');
    const personalNetworkRegex = new RegExp(`\\b(${personalNetwork.map(escapeRegExp).join('|')})\\b`, 'gi');
    const previousCompaniesRegex = new RegExp(`\\b(${previousCompanies.map(escapeRegExp).join('|')})\\b`, 'gi');
    const contactPointsRegex = new RegExp(`\\b(${contactPoints.map(escapeRegExp).join('|')})\\b`, 'gi');
    const importantDatesRegex = new RegExp(`\\b(${importantDates.map(escapeRegExp).join('|')})\\b`, 'gi');
    const phoneNumberRegex = new RegExp("\\b(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\b", 'gi');
  
    toast({
      title: "ATS Results 📄 ✅",  
      description: "You've got a pretty sharp resume!",                                  
    })
    // Apply highlighting
    return text
      .replace(techStackRegex, '<span class="bg-yellow-400 rounded-sm">$1</span>')
      .replace(educationRegex, '<span class="bg-purple-400 rounded-sm">$1</span>')
      .replace(previousCompaniesRegex, '<span class="bg-blue-400 rounded-sm">$&</span>')
      .replace(personalNetworkRegex, '<span class="bg-green-400 rounded-sm">$1</span>')
      .replace(contactPointsRegex, '<span class="bg-red-400 rounded-sm">$&</span>')
      .replace(importantDatesRegex, '<span class="bg-orange-400 rounded-sm">$&</span>')
      .replace(phoneNumberRegex, '<span class="bg-teal-400 rounded-sm">$&</span>');
      // TODO: Break this up to return a list of objects with the keyword and the color class so it's easier to read and maintain
  };  

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
                        <CardTitle className="text-2xl py-2">                            
                            Resume ATS
                        </CardTitle>                                       
                        <CardDescription className="text-md text-black dark:text-white py-1">
                          Modern companies often use Applicant Tracking Systems (ATS) to filter out resumes that don&apos;t 
                          match the job description. Most ATS systems use a mix of Regular Expressions and ML to quickly analyze resumes.
                          These systems are not perfect, and often report false positives. It&apos;s important to optimize your resume for ATS, despite how frustrating 
                          it can be.
                        </CardDescription>
                        <CardDescription className="text-md text-black dark:text-white py-1">
                           We built a tool to help you optimize your resume for ATS. It&apos;s free to use, 
                          and you can upload your resume as many times as you want. 
                        </CardDescription>
                        <CardDescription className="text-md text-black dark:text-white py-1">
                        Your resume is never stored on our servers. It&apos;s processed in your browser, and the results are displayed on your screen
                        (seriously, check the network tab!). 
                        <Link 
                          href="https://github.com/posterboard-io/posterboard/blob/main/src/app/dashboard/(page)/resume/page.tsx" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-500 hover:underline"
                        > 
                          {" "} Curious how it works?                           
                        </Link>
                        </CardDescription>
                        <hr className="my-4" />
                          <CardContent>           
                            <div className="flex flex-col items-center py-8">               
                              <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="resume">Resume</Label>
                                <Input type="file" id="resume" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                  const files = Array.from(event.target.files || []);
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
                                if (!resumeText) {
                                  toast({
                                    title: "No resume uploaded ❗️",  
                                    description: "Please upload a resume to run the ATS.",                                  
                                  })
                                }
                                console.log(resumeText);
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
                        <div className="flex flex-row py-2 space-x-4">
                          <Badge className="w-fit py-2 px-2" variant={"outline"}>
                            <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2" />
                            <p className="text-md font-semibold">Tech Keywords</p>
                          </Badge>
                          <Badge className="w-fit py-2" variant={"outline"}>
                            <div className="w-3 h-3 rounded-full bg-purple-400 mr-2" />
                            <p className="text-md font-semibold">Education</p>
                          </Badge>
                          <Badge className="w-fit py-2 px-2" variant={"outline"}>
                            <div className="w-3 h-3 rounded-full bg-blue-400 mr-2" />
                            <p className="text-md font-semibold">Previous Companies</p>
                          </Badge>
                          <Badge className="w-fit py-2" variant={"outline"}>
                            <div className="w-3 h-3 rounded-full bg-red-400 mr-2" />
                            <p className="text-md font-semibold">Contact Points</p>
                          </Badge>
                          <Badge className="w-fit py-2" variant={"outline"}>
                            <div className="w-3 h-3 rounded-full bg-green-400 mr-2" />
                            <p className="text-md font-semibold">Projects & Network</p>
                          </Badge>
                          <Badge className="w-fit py-2" variant={"outline"}>
                            <div className="w-3 h-3 rounded-full bg-orange-400 mr-2" />
                            <p className="text-md font-semibold">Relevent Dates</p>
                          </Badge>
                          <Badge className="w-fit py-2" variant={"outline"}>
                            <div className="w-3 h-3 rounded-full bg-teal-400 mr-2" />
                            <p className="text-md font-semibold">Applicant Phone</p>
                          </Badge>
                        </div>
                      </CardDescription>
                      <hr className="my-4" />                      
                      <CardContent className="">
                          <p className="text-lg font-semibold py-2">Extracted Text From PDF:</p>                                                    
                          <p className="text-lg py-2" dangerouslySetInnerHTML={{ __html: highlightKeyWords(resumeText) }} />
                      </CardContent>
                    </Card>
                  )}
                </div>
        </main>
    </div>
)
}