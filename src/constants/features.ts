import {
    ChartColumnBigIcon,
    DatabaseIcon,
    TrendingUpIcon,
    WandSparklesIcon,
    ZapIcon,
    FileTextIcon,
    ShieldCheckIcon,
    CheckCircleIcon,
    SettingsIcon,
    GlobeIcon,
    GiftIcon
} from "lucide-react";

export const FEATURES = [
    {
        title: "AGILIDADE OPERACIONAL",
        description: "Automatiza o processo de registro de entrada de NF´s e executa consulta e download automático dos arquivos XML de NF-e e CT-e, além de permitir o recebimento de XML de NFS-e.",
        icon: ZapIcon,
    },
    {
        title: "CONFIABILIDADE DAS TRANSAÇÕES",
        description: "Atendimento às regras fiscais da SEFAZ para baixa de arquivos autorizados, utilizando certificado digital A1 ou A3, permitindo mitigar o risco fiscal e automatizar as operações de validação dos arquivos XML’s.",
        icon: ShieldCheckIcon,
    },
    {
        title: "CONTROLE DE RECEBIMENTO FISCAL",
        description: "Armazenamento dos XML´s e emissão de relatórios gerenciais com indicadores para controle, conciliação e auditoria.",
        icon: DatabaseIcon,
    },
    {
        title: "COMPLIANCE E GOVERNANÇA",
        description: "Normas e diretrizes da empresa seguidas de forma corretas e sistematizadas, fornecendo dados confiáveis para tomada de decisão mais assertivas.",
        icon: CheckCircleIcon,
    },
    {
        title: "INTEGRAÇÃO AO FISCO",
        description: "Verifica se os webservices da SEFAZ estão em operação e realiza o manifesto destinatário de forma automatizada.",
        icon: GlobeIcon,
    },
    {
        title: "OUTROS BENEFÍCIOS",
        description: "Emissão de Danfe para conferência antecipada, serviço de mensageria, recuperação rápida e precisa do XML, eliminação de erros de digitação e implantação rápida.",
        icon: GiftIcon,
    }
]