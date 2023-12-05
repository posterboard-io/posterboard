"use client"

import { api } from "~/trpc/react";
import Loading from "~/components/pb/utils/loading";
import JobKanbanCard from "~/components/pb/jobcard/job-card-kanban";
import { Card, CardContent, CardDescription, CardFooter, CardTitle, CardHeader } from "~/components/ui/card";

import React, { useState, useEffect } from 'react';
// Import other necessary components and hooks


export default function TestPage() {
    return (
        // Apply the gradient to the entire viewport
        <div className="flex flex-col items-center justify-center min-h-screen"
             style={{ background: 'linear-gradient(to top, rgb(251, 146, 60), rgb(76, 142, 242))', height: '100vh' }}>                         
            <Card className="w-96">
                <CardHeader>
                    <CardTitle>Test</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        <p>Test</p>
                    </CardDescription>
                </CardContent>
                <CardFooter>
                    <p>Test</p>
                </CardFooter>
            </Card>
        </div>
    )
}