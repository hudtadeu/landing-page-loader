import Container from "../global/container";

const Companies = () => {
    return (
        <div id="companies" className="relative flex flex-col items-center justify-center w-full py-20 mt-16 companies overflow-hidden">
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <h4 className="text-2xl lg:text-4xl font-medium">
                        Empresas atendidas pela automação fiscal
                    </h4>
                </div>
            </Container>

            <Container delay={0.1}>
                <div className="relative w-full overflow-hidden pt-16">
                    <div
                        className="marquee flex items-center gap-0 max-w-none text-muted-foreground transition-all"
                        style={{ animation: "marquee 30s linear infinite" }}>
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex flex-row items-center gap-0">
                                {/* Tear */}
                                <div className="company-logo-wrapper">
                                    <img src="/images/tearlogo.png" alt="Tear" className="company-logo" />
                                </div>
                                {/* Sodecia */}
                                <div className="company-logo-wrapper">
                                    <img src="/images/sodecialogo.png" alt="Sodecia" className="company-logo" />
                                </div>
                                {/* Sedyon Intech */}
                                <div className="company-logo-wrapper">
                                    <img src="/images/seoyonlogo.png" alt="Sedyon Intech" className="company-logo" />
                                </div>
                                {/* Forno de Minas */}
                                <div className="company-logo-wrapper">
                                    <img src="/images/fornominaslogo.png" alt="Forno de Minas" className="company-logo" />
                                </div>
                                {/* Onduline */}
                                <div className="company-logo-wrapper">
                                    <img src="/images/ondulinelogo.png" alt="Onduline" className="company-logo" />
                                </div>
                                {/* Grupo FAPE */}
                                <div className="company-logo-wrapper">
                                    <img src="/images/fapelogo.png.webp" alt="Grupo FAPE" className="company-logo" />
                                </div>
                                {/* DLE */}
                                <div className="company-logo-wrapper">
                                    <img src="/images/dlelogo.png" alt="DLE" className="company-logo" />
                                </div>
                                {/* Cíclope Automotive */}
                                <div className="company-logo-wrapper">
                                    <img src="/images/ciclopelogo.png" alt="Cíclope Automotive" className="company-logo" />
                                </div>
                                {/* Equiplex */}
                                <div className="company-logo-wrapper">
                                    <img src="/images/equiplexlogo.png" alt="Equiplex" className="company-logo" />
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Marquee animation CSS + logo grid styles */}
                    <style>{`
                        @keyframes marquee {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-33.333%); }
                        }
                        .marquee {
                            min-width: 300%;
                        }
                        .company-logo-wrapper {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 64px;
                            width: 120px;
                            margin: 0 16px;
                            /* Prevent overflow and keep logos centered */
                        }
                        .company-logo {
                            max-height: 48px;
                            max-width: 100px;
                            width: auto;
                            height: auto;
                            object-fit: contain;
                            display: block;
                            margin: 0 auto;
                            /* Prevent stretching and keep aspect ratio */
                        }
                    `}</style>
                </div>
            </Container>
        </div>
    )
};

export default Companies
