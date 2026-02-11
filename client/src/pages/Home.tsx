/**
 * AgroPet Dog House - Landing Page
 * Design Philosophy: Rustic Modernism
 * - Texturas orgânicas com geometria limpa
 * - Layout diagonal assimétrico
 * - Cores do logo: laranja (#FF8C00), marrom (#8B4513), verde (#4CAF50)
 * - Tipografia: Fredoka (display) + Outfit (body)
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Dog, 
  Sprout, 
  Heart, 
  Award, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  ShoppingBag,
  Stethoscope,
  Wheat,
  Star
} from "lucide-react";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663347573134/zNntCxuimwMXrwEL.png" 
              alt="AgroPet Dog House Logo" 
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Diferenciais
            </button>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Contato
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section - Text left, Image right layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                Cuidado Completo para Seus{" "}
                <span className="text-primary">Animais</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Petshop e Agropecuária com produtos de qualidade, 
                atendimento especializado e amor pelos animais.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  onClick={() => scrollToSection('contato')}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Fale Conosco
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={() => scrollToSection('servicos')}
                >
                  Nossos Serviços
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <img 
                src="/logo2.png"
                alt="AgroPet Dog House - Logo e Casa de Cachorro" 
                className="w-full h-auto rounded-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <Dog className="h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para pets e agropecuária com qualidade e dedicação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Petshop Card */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary rounded-2xl">
              <div 
                className="h-64 bg-cover bg-center relative overflow-hidden"
                style={{
                  backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/XZgAs3vtYeT2knIcdiabpj/sandbox/Z3iq7K4vzAo3E4dOjOZMKF-img-2_1770818706000_na1fn_c2VydmljZXMtcGV0cw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWFpnQXMzdnRZZVQya25JY2RpYWJwai9zYW5kYm94L1ozaXE3SzR2ekFvM0U0ZE9qT1pNS0YtaW1nLTJfMTc3MDgxODcwNjAwMF9uYTFmbl9jMlZ5ZG1salpYTXRjR1YwY3cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XGcpj6A0IlhbWJ0kq4zu10iWjIsixnSn3awdsQAjI2-~K0DQE4WrJGANIGR6oYVFe~vKNUA5KyAk0RfbSaO7fLnMn1Rtwlmel3OVsDyCeoJVvwscemdl~cbr9leOPBwvmsbziSfa7cah~AK6HpcPR-dWvKW~gpQwILIgMMPSAJDmJOGpsW0ecjn0xZD6rRThaJFL2t6CCUbVUrUsXkDySsRi~J4ydVjhRKZLAIHLPTw56tcJ4AzR1K51gVvHXmVJU7ph9SBbjDNj0Qk1NsYCN4JXrX-BUUrNbJ4oAgIjkCbbfbIRPaCTRZcRiEPQ~7gw9S8sMn5Guc8Ml9Egkf-gDQ__')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-card/95 to-transparent group-hover:from-primary/90 transition-all duration-500" />
                <div className="absolute bottom-4 left-4">
                  <Dog className="h-12 w-12 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Petshop</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Produtos e serviços especializados para o bem-estar do seu pet. 
                  Rações premium, acessórios, brinquedos e muito mais.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-foreground">
                    <Heart className="h-5 w-5 text-primary" />
                    <span>Rações e alimentação balanceada</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <Stethoscope className="h-5 w-5 text-primary" />
                    <span>Produtos veterinários</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                    <span>Acessórios e brinquedos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Agropecuária Card */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-2 hover:border-secondary rounded-2xl">
              <div 
                className="h-64 bg-cover bg-center relative overflow-hidden"
                style={{
                  backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/XZgAs3vtYeT2knIcdiabpj/sandbox/Z3iq7K4vzAo3E4dOjOZMKF-img-3_1770818708000_na1fn_c2VydmljZXMtYWdybw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWFpnQXMzdnRZZVQya25JY2RpYWJwai9zYW5kYm94L1ozaXE3SzR2ekFvM0U0ZE9qT1pNS0YtaW1nLTNfMTc3MDgxODcwODAwMF9uYTFmbl9jMlZ5ZG1salpYTXRZV2R5YncucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Qrm57Q4--zilBr20SyT3ua3QMBD4qLEH8XqWqywnRU2XlcyngghXrgckZGloLdwCcfagW6~KLnQR603kdssFM8ISy9r4UNq4tEsHwOz~Fvfd896FZfr~M87zIOcXJaoWnK1LoQuPvxDR2Vpze2AUy91tGa~zAlyE84BUvtQ1bHxrrpbOxpQSLymiXEC3XPpjP67rILhA-JMASWDVaSfK9u1I7IdGJflYCl5RwmUJS5cippSOcruQZV90rkpP5pEVMVzh0WgHtAZTge4u~utKCmgpG2NWRq6ZKqZcx-NucnYyBkbwhFsVynusi9LDMJxKKR~gVCB2pOG-TmxtruTcWQ__')`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-card/95 to-transparent group-hover:from-secondary/90 transition-all duration-500" />
                <div className="absolute bottom-4 left-4">
                  <Sprout className="h-12 w-12 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-3xl font-bold text-foreground">Agropecuária</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Insumos e produtos agropecuários de alta qualidade para sua 
                  propriedade rural. Tudo que você precisa em um só lugar.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-foreground">
                    <Wheat className="h-5 w-5 text-secondary" />
                    <span>Rações para animais de produção</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <Sprout className="h-5 w-5 text-secondary" />
                    <span>Sementes e insumos agrícolas</span>
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <Award className="h-5 w-5 text-secondary" />
                    <span>Ferramentas e equipamentos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section - With organic background pattern */}
      <section 
        id="sobre" 
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/XZgAs3vtYeT2knIcdiabpj/sandbox/Z3iq7K4vzAo3E4dOjOZMKF-img-4_1770818703000_na1fn_YWJvdXQtYmFja2dyb3VuZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWFpnQXMzdnRZZVQya25JY2RpYWJwai9zYW5kYm94L1ozaXE3SzR2ekFvM0U0ZE9qT1pNS0YtaW1nLTRfMTc3MDgxODcwMzAwMF9uYTFmbl9ZV0p2ZFhRdFltRmphMmR5YjNWdVpBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=B0h-bw41UZHQw-2wGLIUvI3j4o~Y0cagnIdc6iaLQIAMdEzwk6gGeJ8~aR2bvZXr2FpgBBGwqpOjV1GMy2-RkWsUivVyZrfB1TudrSfhC0-jtdIDGhUxPnZAq9q7FkevJac0TxuBKUs4bQokOdbXz7vmYTn8IVmSNr5ejmacGWKCIEKxCadXbE-toliUWhxVpF4qVvZlXK0nOH7YX-vcGrnoH9nyMG9TUAM98Qfqfs-6zvMBc7bc1Gvubldo8Kz5uey8dVzoNL1mZBAPApO7-91GZ1hEcvJueSbnMs2mvgSpPJ1w8fmbog0SfSP9QLH5kpdC-nwAeTCQ1XQtu6AQcg__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a AgroPet Dog House
            </h2>
            <p className="text-xl text-foreground leading-relaxed">
              Somos uma empresa dedicada ao cuidado completo de animais, unindo 
              a expertise em produtos para pets com soluções agropecuárias de qualidade. 
              Nossa missão é oferecer produtos confiáveis, atendimento especializado 
              e preços justos para todos os amantes de animais.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com anos de experiência no mercado, construímos nossa reputação 
              baseada em confiança, qualidade e amor genuíno pelos animais. 
              Cada produto é cuidadosamente selecionado para garantir o melhor 
              para seus companheiros.
            </p>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="diferenciais" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O que nos torna a melhor escolha para você e seus animais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary rounded-2xl">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Award className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Qualidade Garantida
              </h3>
              <p className="text-muted-foreground">
                Produtos selecionados das melhores marcas do mercado
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-secondary rounded-2xl">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-secondary/10 rounded-full">
                  <Heart className="h-12 w-12 text-secondary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Atendimento Humanizado
              </h3>
              <p className="text-muted-foreground">
                Equipe especializada pronta para ajudar você
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent rounded-2xl">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Clock className="h-12 w-12 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Horário Flexível
              </h3>
              <p className="text-muted-foreground">
                Aberto em horários convenientes para você
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary rounded-2xl">
              <div className="mb-4 flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Star className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Preços Competitivos
              </h3>
              <p className="text-muted-foreground">
                Melhor custo-benefício da região
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Entre em Contato
                </h2>
                <p className="text-xl text-muted-foreground">
                  Estamos prontos para atender você e seus animais. 
                  Visite nossa loja ou entre em contato!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua Principal, 123 - Centro<br />
                      Cidade - Estado, CEP 00000-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Telefone</h3>
                    <p className="text-muted-foreground">
                      (00) 0000-0000<br />
                      (00) 90000-0000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">E-mail</h3>
                    <p className="text-muted-foreground">
                      contato@agropetdoghouse.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Horário de Funcionamento</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 14h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/XZgAs3vtYeT2knIcdiabpj/sandbox/Z3iq7K4vzAo3E4dOjOZMKF-img-5_1770818707000_na1fn_Y29udGFjdC1pbGx1c3RyYXRpb24.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWFpnQXMzdnRZZVQya25JY2RpYWJwai9zYW5kYm94L1ozaXE3SzR2ekFvM0U0ZE9qT1pNS0YtaW1nLTVfMTc3MDgxODcwNzAwMF9uYTFmbl9ZMjl1ZEdGamRDMXBiR3gxYzNSeVlYUnBiMjQucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Wm7kR1TNnP8jyU1ok1GMQC9kNl2w7knH1BdcMlvQPEazk1Ylgk5SalS7JDApbKsrX1anvHTuKaetjHaJde1~KpT7Zxr6y3MZJSSERRtPYMhW3cYRLSm~WZ6R-Ogcp0PPdviI3NVP94geZq007GntyTRkw~aH641Pf3nLndgXx0bK2EDTMnK5m7AV3q1~3TWg-X5Wg4ulm2AThfY6~86sJ~eZBMLzCJHcHS11ZOsxMGjpmHFXj218eLqTOaGmqZOVPcRFnJhICIjDbCNe50G4IWWAB7~QXbbHcpWATlz1nqmtRCB7gzIE5B99Z34N5-kYoju0f~DsLtBM-E33L7adbQ__"
                alt="AgroPet Dog House Store" 
                className="w-full h-auto rounded-2xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663347573134/zNntCxuimwMXrwEL.png" 
                alt="AgroPet Dog House Logo" 
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-accent-foreground/80">
                Cuidado completo para seus animais desde 2020
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('servicos')}
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('sobre')}
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                  >
                    Sobre Nós
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contato')}
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
              <p className="text-accent-foreground/80">
                Siga-nos nas redes sociais para novidades e promoções!
              </p>
            </div>
          </div>
          <div className="border-t border-accent-foreground/20 pt-8 text-center text-accent-foreground/60">
            <p>&copy; 2026 AgroPet Dog House. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
