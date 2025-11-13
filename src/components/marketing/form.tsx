import { SUPPORTED_LANGUAGES } from "@/constants/countries";
import { Plus } from "lucide-react";
import Container from "../global/container";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MagicCard } from "../ui/magic-card";

const Form = () => {
    return (
        <div id="contact" className="relative flex flex-col items-center justify-center max-w-2xl py-20 mx-auto">
            <Container delay={0.2}>
                <MagicCard
                    gradientFrom="#38bdf8"
                    gradientTo="#3b82f6"
                    gradientColor="rgba(59,130,246,0.1)"
                    className="p-6 lg:p-6 w-full overflow-hidden relative"
                >
                     <div className="absolute top-0 left-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                    <div className="flex flex-col items-center justify-center w-full mx-auto text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-medium !leading-snug mb-1">
                            Quer conhecer mais sobre essa solução/serviço?
                        </h2>
                        <p className="mb-1 text-muted-foreground">
                            Preencha o formulário abaixo!​
                        </p>
                        <p className="mb-4 text-xs text-muted-foreground font-semibold">
                            Exclusivo para ERP Datasul Totvs®
                        </p>
                    </div>
                    <form className="space-y-4 w-full max-w-md mx-auto">
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="nome">Nome</label>
                            <Input id="nome" name="nome" type="text" required className="h-8" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="email">E-mail Corporativo</label>
                            <Input id="email" name="email" type="email" required className="h-8" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="telefone">Telefone</label>
                            <Input id="telefone" name="telefone" type="tel" required className="h-8" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="empresa">Empresa</label>
                            <Input id="empresa" name="empresa" type="text" required className="h-8" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1" htmlFor="segmento">Selecione o segmento de atuação da sua empresa</label>
                            <Select name="segmento" required>
                                <SelectTrigger className="h-8">
                                    <SelectValue placeholder="Selecione..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="industrial">Industrial</SelectItem>
                                    <SelectItem value="servicos">Serviços</SelectItem>
                                    <SelectItem value="comercio">Comércio</SelectItem>
                                    <SelectItem value="agro">Agro</SelectItem>
                                    <SelectItem value="outro">Outro</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button type="submit" className="w-full">
                            Enviar
                        </Button>
                    </form>
                </MagicCard>
            </Container>
        </div>
    )
};

export default Form
