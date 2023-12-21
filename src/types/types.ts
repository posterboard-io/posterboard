import { Icons } from "~/components/pb/icons"
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client/edge";

export interface StatusMap {
  [key: string]: JobPostingStatus;
}

export enum JobPostingStatus {
  Saved = "Saved",
  Applied = "Applied",
  ReceivedResponse = "RecievedResponse", 
  Interviewing = "Interviewing",
  PendingOffer = "PendingOffer",
  Rejected = "Rejected",
}


export interface TechStackItem {
  _count: {
    companyTechStack: number;
  };
  companyTechStack: string[];
}

export interface TechCount {
  name: string;
  value: number;
}

export interface RawData {
  _count: { roleLevel: number; company: number };
  roleLevel: string;
  company: string;
}

export interface TreeMapCompanyData {
  name: string;
  children: PositionData[];
}

export interface PositionData {
  name: string;
  size: number;
}

export interface PageSize {
  value: string
  label: string
}

export interface RolesAndGrowthProps {
  value: string
  label: string
}

export interface TechStackProps {
  value: string
  label: string
}

export interface Company {
  id: number;
  name: string;
  questions: Question[];
}

export interface Question {
  id: number;
  name: string;
  link: string;
  numOccur: number;
  companyId: number;
}


export interface TechStackItem {
  _count: {
    companyTechStack: number;
  };
  companyTechStack: string[];
}

export interface TechCount {
  name: string;
  value: number;
}
export interface EmailTemplateProps {
  firstName: string;
}

export interface NewJobsForYouProps {
  firstName: string;
  userEmail: string;
  recommendedJobs: RecommendedJobsProps[]
}

export interface RecommendedJobsProps {
  jobName: string;
  jobID: string;
  jobURL: string;
}

export interface RoleData {
  roleType: string[]
  roleLevel: string[]
  rolesCity: string[]
  rolesCompanySizes: string[]
  roleCompensationRanges: string[]
  roleIndustryTypes: string[]
}


export interface DashboardGraphProps {
  name: string,
  total: number
}

export interface DashboardPieProps {
  name: string;
  total: number;
}

export interface TreeMapCompanyData {
  name: string;
  children: PositionData[];
}

export interface PositionData {
  name: string;
  size: number;
}

export interface CountUpLink {
  href: string;
  className: string;
  text: string;
}

export interface CreateContextOptions {
  headers: Headers;
}

export interface AuthLayoutProps {
  children: React.ReactNode
}

export interface CustomContext {
    prisma: PrismaClient;
    req: NextApiRequest;
    res: NextApiResponse;
}

export interface TreeMapCompanyData {
  name: string;
  children: PositionData[];
}

export interface PositionData {
  name: string;
  size: number;
}

export type StripePlans = {
  name: string
  description: string
  price: number
  stripePriceId: string
}

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)



export type NavLink = {
  title: string
  href: string
  icon?: keyof typeof Icons
}


export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export type DocsConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type MarketingConfig = {
  mainNav: MainNavItem[]
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type SubscriptionPlan = {
  name: string
  description: string
  stripePriceId: string
}
