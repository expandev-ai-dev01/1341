# Sistema de Avaliação de Candidatos .NET

Sistema para avaliação de candidatos a vagas de desenvolvedor .NET com banco de 100 perguntas de múltipla escolha.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Axios 1.7.7
- Zustand 5.0.1
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   └── router.tsx         # Configuração de rotas
├── assets/                # Recursos estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e lógica compartilhada
│   ├── components/       # Componentes UI reutilizáveis
│   ├── lib/              # Configurações de bibliotecas
│   ├── types/            # Tipos TypeScript globais
│   └── utils/            # Funções utilitárias
├── domain/               # Domínios de negócio (a serem implementados)
└── pages/                # Páginas da aplicação
    ├── layouts/          # Layouts compartilhados
    ├── Home/             # Página inicial
    └── NotFound/         # Página 404
```

## Instalação

```bash
npm install
```

## Configuração

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Configure as variáveis de ambiente:
```
VITE_API_URL=http://localhost:4000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Funcionalidades

- ✅ Estrutura base configurada
- ⏳ Seleção de Nível de Senioridade
- ⏳ Banco de Perguntas
- ⏳ Geração de Testes
- ⏳ Aplicação de Testes
- ⏳ Correção Automática
- ⏳ Relatório de Desempenho
- ⏳ Histórico de Avaliações

## Arquitetura

O projeto segue uma arquitetura modular baseada em domínios:

- **Core**: Componentes e lógica compartilhada
- **Domain**: Lógica de negócio organizada por domínio funcional
- **Pages**: Componentes de página que orquestram domínios

## Padrões de Código

- TypeScript strict mode habilitado
- Componentes funcionais com hooks
- Props tipadas com interfaces
- Separação de lógica em hooks customizados
- Estilização com TailwindCSS
- Gerenciamento de estado com TanStack Query e Zustand

## Próximos Passos

1. Implementar domínio de perguntas
2. Implementar domínio de testes
3. Implementar domínio de avaliações
4. Criar páginas de funcionalidades
5. Integrar com backend

## Licença

Private