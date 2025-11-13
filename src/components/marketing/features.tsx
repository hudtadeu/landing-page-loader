import { FEATURES } from "@/constants";
import { cn } from "@/lib";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const Features = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Solução completa para <br /> <span className="font-subheading italic">gestão fiscal</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Automatize seus processos fiscais com nossa solução integrada ao Datasul TOTVS®. Tenha mais agilidade, segurança e conformidade em todas as suas operações.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 relative overflow-visible">

                {FEATURES.map((feature, index) => (
                    <Container key={feature.title} delay={0.1 + index * 0.1} className="relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="p-4 lg:p-6 lg:rounded-3xl"
                            gradientColor="rgba(59,130,246,0.1)"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {feature.description}
                            </p>

                            <div className="mt-6 w-full flex items-center justify-center py-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                                <feature.icon className="size-16 text-primary/70" />
                            </div>
                        </MagicCard>
                    </Container>
                ))}
            </div>
        </div>
    )
};

export default Features
