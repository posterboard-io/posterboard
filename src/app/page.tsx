import Link from "next/link"
import TitleSectionLanding from "~/components/pb/landing/title-section"
import LandingCountUpJobs from "~/components/pb/landing/landing-count-up-jobs"
import FeatureGrid from "~/components/pb/landing/feature-grid"

export default async function Home() {
  return (    
    <div className="flex flex-col min-h-screen bg-grid-slate-200/50">   
      <section id="hero" className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <TitleSectionLanding />
      </section> 
        <hr className="border-t border-foreground/10" />
      <section id="features" className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
          <FeatureGrid />
      </section>
        <hr className="border-t border-foreground/10" />
      <section id="countup" className="container py-8 md:py-12 lg:py-24" 
        style={{ background: "radial-gradient(at bottom, #ff8f3e, transparent 70%)" 
      }}>
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Develop Your Career, One Commit at a Time.
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            High quality jobs, from verified high quality companies. 
            We&apos;re here to help you find your next job.            
          </p>
          <LandingCountUpJobs />          
        </div>        
      </section>    
    </div>
  );
}
