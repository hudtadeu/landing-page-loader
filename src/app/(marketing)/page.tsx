import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import Companies from "@/components/marketing/companies";
import CTA from "@/components/marketing/cta";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Social from "@/components/marketing/social";
import Form from "@/components/marketing/form";
import Questions from "@/components/marketing/questions";
//import Pricing from "@/components/marketing/pricing";

const HomePage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Hero />
            <Companies />
            <Features />
            <Analysis />
            <Social />
            <Questions />
            <Form />
            <CTA />
            
        </Wrapper>
    )
};

export default HomePage
