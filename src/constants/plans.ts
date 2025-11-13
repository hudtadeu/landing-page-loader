export type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    annuallyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "standard",
        title: "Padrão",
        desc: "Ideal para empresas que desejam automatizar a entrada e organização dos documentos fiscais eletrônicos (NF-e, NFS-e e CT-e) com integração ao ERP Datasul TOTVS®.",
        monthlyPrice: 29,
        annuallyPrice: 306,
        buttonText: "Atualizar para Padrão",
        features: [
            "Armazenamento de XML de NF-e, NFS-e e CT-e",
            "Integração básica com ERP Datasul",
            "Dashboard fiscal simplificado",
            "2 usuários",
            "Suporte por email"
        ],
        link: "#"
    },
    {
        id: "mastermind",
        title: "Mastermind",
        desc: "Para empresas que precisam de automação fiscal avançada, controle total dos documentos eletrônicos e recursos extras para compliance.",
        monthlyPrice: 79,
        annuallyPrice: 834,
        badge: "Mais Popular",
        buttonText: "Atualizar para Mastermind",
        features: [
            "Armazenamento avançado de XML",
            "Relatórios fiscais detalhados",
            "Integração completa com ERP Datasul",
            "Automação de processos fiscais",
            "Suporte prioritário 24/7",
            "Até 10 usuários"
        ],
        link: "#"
    },
    // {
    //     id: "enterprise",
    //     title: "Enterprise",
    //     desc: "Full-scale AI marketing solution for large organizations",
    //     monthlyPrice: 199,
    //     annuallyPrice: 2101,
    //     badge: "Custom AI Solutions",
    //     buttonText: "Contact Sales",
    //     features: [
    //         "Unlimited AI content",
    //         "Custom AI model training",
    //         "Advanced automation workflows",
    //         "Multi-brand management",
    //         "API access",
    //         "Unlimited team members",
    //         "24/7 priority support",
    //         "Dedicated success manager",
    //     ],
    //     link: "https://stripe.com/enterprise-plan-link"
    // }
];

export const PLANS_FAQ = [
    {
        id: 1,
        question: "Como funciona a geração de conteúdo por IA?",
        answer: "Nossa IA gera conteúdo de marketing de alta qualidade em vários formatos, incluindo posts para redes sociais, campanhas de email e artigos de blog, mantendo a voz da sua marca."
    },
    {
        id: 2,
        question: "Posso gerenciar múltiplas marcas ou clientes?",
        answer: "Sim! O plano Scale Pro suporta até 5 marcas, enquanto o Enterprise oferece capacidades ilimitadas de gerenciamento de marcas."
    },
    {
        id: 3,
        question: "Há desconto para faturamento anual?",
        answer: "Sim, você pode economizar 15% escolhendo o faturamento anual ao invés do mensal para qualquer um dos nossos planos."
    },
    {
        id: 4,
        question: "Vocês oferecem preços especiais para empreiteiros?",
        answer: "Sim, oferecemos tarifas especiais para empreiteiros independentes e pequenas empresas de construção. Entre em contato com nossa equipe de vendas para mais informações."
    },
    {
        id: 5,
        question: "Como funciona a integração BIM?",
        answer: "Nosso plano Enterprise inclui integração BIM completa, permitindo visualizar e gerenciar modelos 3D, coordenar com membros da equipe e acompanhar mudanças em tempo real."
    },
    {
        id: 6,
        question: "Que tipo de suporte vocês oferecem?",
        answer: "Oferecemos suporte por email para planos Starter, suporte prioritário para planos Professional e suporte dedicado 24/7 com gerente de conta pessoal para planos Enterprise."
    },
    {
        id: 7,
        question: "Posso atualizar ou fazer downgrade do meu plano?",
        answer: "Sim, você pode alterar seu plano a qualquer momento. Se você atualizar, será feito um rateio pelo restante do seu período de faturamento. Downgrades entram em vigor no próximo ciclo de faturamento."
    },
    {
        id: 8,
        question: "O acesso móvel está disponível?",
        answer: "Sim, todos os planos incluem acesso ao nosso aplicativo móvel para iOS e Android, permitindo gerenciar projetos em movimento."
    },
    {
        id: 9,
        question: "Que medidas de segurança vocês têm em vigor?",
        answer: "Oferecemos segurança padrão da indústria para todos os planos, com recursos adicionais como SSO, logs de auditoria e políticas de segurança personalizadas disponíveis no plano Enterprise."
    }
];

export const PLANS_TABLE = [
    {
        id: 1,
        title: 'Iniciante de Crescimento',
        priceMonthly: '$29',
        priceYearly: "$290",
        buttonText: 'Iniciar teste grátis',
        usage: {
            members: '2 membros',
            contentGeneration: '1.000 palavras/mês',
            socialChannels: '3 canais',
            brands: '1 marca',
        },
        features: [
            'Geração básica de conteúdo IA',
            'Agendamento de redes sociais',
            'Calendário de conteúdo',
            'Análises básicas',
            'Templates de email marketing',
            'Automação básica',
            'Acesso ao app móvel',
            'Suporte da comunidade',
        ],
    },
    {
        id: 2,
        title: 'Scale Pro',
        priceMonthly: '$79',
        priceYearly: "$790",
        buttonText: 'Escalar agora',
        usage: {
            members: '5 membros',
            contentGeneration: '10.000 palavras/mês',
            socialChannels: 'Todas as plataformas',
            brands: '5 marcas',
        },
        features: [
            'Geração avançada de conteúdo IA',
            'Treinamento de IA personalizado',
            'Automação avançada',
            'Rastreamento de campanhas',
            'Análises de performance',
            'Testes A/B',
            'Suporte prioritário',
            'Acesso à API',
            'Relatórios avançados',
        ],
    },
    {
        id: 3,
        title: 'Enterprise IA',
        priceMonthly: '$199',
        priceYearly: "$1990",
        buttonText: 'Contatar vendas',
        usage: {
            members: 'Ilimitado',
            contentGeneration: 'Ilimitado',
            socialChannels: 'Ilimitado',
            brands: 'Ilimitado',
        },
        features: [
            'Soluções de IA personalizadas',
            'Automação empresarial',
            'Gerenciamento multi-marca',
            'Segurança avançada',
            'Integrações personalizadas',
            'Suporte dedicado',
            'Treinamento personalizado',
            'Análises empresariais',
            'Fluxos de trabalho personalizados',
        ],
    },
];
