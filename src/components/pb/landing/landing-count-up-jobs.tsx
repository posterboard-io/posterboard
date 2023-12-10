"use client"

import { api } from "~/trpc/react";
import { motion, animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Card } from "~/components/ui/card";
import { roles, techStacks } from "~/components/pb/tech-stacks";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function LandingCountUpJobs() {
    const totalJobs = api.jobs.getTotalJobsForQuery.useQuery({ query: "" });
    const randomValue1 = Math.floor(Math.random() * 99) + 1; 
    const randomValue2 = Math.floor(Math.random() * 99) + 1; 
    const randomTechStack = techStacks[Math.floor(Math.random() * techStacks.length)];
    const randomRole = roles[Math.floor(Math.random() * roles.length)];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
            <CountUpCard 
                countUpTo={randomValue1}
                title={`New ${randomTechStack} Jobs`}
                link={{
                    href: "/search?page=1",
                    text: "",
                    className: "rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600",
                    
                }}
                showButton={false}
            />
            <CountUpCard 
                countUpTo={totalJobs.data ? totalJobs.data : 0}
                title="New Jobs Posted"
                link={{
                    href: "/search?page=1",
                    text: "Get Searching",
                    className: "rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600",                    
                }}
                showButton={true}
            />
            <CountUpCard 
                countUpTo={randomValue2}
                title={`New ${randomRole!.label} Jobs`}
                link={{
                    href: "/search?page=1",
                    text: "",                    
                    className: "rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600",
                }}
                showButton={false}
            />
        </div>
    );
}

interface CountUpLink {
    href: string;
    className: string;
    text: string;
}

const CountUpCard = ({ countUpTo, title, link, showButton }: { countUpTo: number, title: string, link: CountUpLink, showButton: boolean }) => {
    const nodeRef = useRef(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!nodeRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animate(0, countUpTo, {
                            duration: 1,
                            onUpdate(value) {
                                setCount(Math.floor(value));
                            }
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(nodeRef.current);

        return () => {
            if (nodeRef.current) {
                observer.unobserve(nodeRef.current);
            }
        };
    }, [countUpTo]);

    return (
        <Card className="flex flex-col items-center justify-center p-8 space-y-4">
            <motion.div
                className="flex flex-col space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-4xl font-bold" ref={nodeRef}>{count}</p>
                </motion.div>
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="flex flex-col items-center py-4">
                        <p className="text-lg font-semibold py-4">{title}</p>
                        {showButton && (
                            <Link href={link.href} className={link.className}>
                                {link.text}
                                <ArrowUpRight className="inline-block w-4 h-4 ml-1.5" />
                            </Link>
                        )}                        
                    </div>
                </motion.div>
            </motion.div>
        </Card>
    );
};
