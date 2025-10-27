# Sistema de Avaliação de Candidatos .Net - Backend API

## Description

Backend REST API for the .Net Candidate Assessment System. This system allows evaluators to assess candidates for .Net developer positions by selecting seniority levels (junior, mid-level, senior) and automatically generating customized tests from a bank of 100 multiple-choice questions.

## Features

- Seniority level selection (Junior, Mid-level, Senior)
- Question bank with 100 multiple-choice questions
- Automatic test generation based on seniority level
- Test application with intuitive interface
- Automatic correction and scoring (1-10 scale)
- Performance reports with correct/incorrect answers
- Assessment history tracking

## Technology Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Architecture**: REST API
- **Storage**: In-memory (no database persistence)

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   ├── v1/                 # Version 1 routes
│   └── index.ts            # Main router
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── tests/                  # Global test utilities
└── server.ts               # Application entry point
```

## Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env with your configuration
```

## Development

```bash
# Run in development mode with hot reload
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate test coverage report
npm run test:coverage

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## Build and Production

```bash
# Build for production
npm run build

# Start production server
npm start
```

## API Documentation

### Base URL

- Development: `http://localhost:3000/api/v1`
- Production: `https://api.yourdomain.com/api/v1`

### Health Check

```
GET /health
```

Returns server health status.

### API Endpoints

Detailed API documentation will be available after feature implementation.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|----------|
| NODE_ENV | Environment mode | development |
| PORT | Server port | 3000 |
| API_VERSION | API version | v1 |
| CORS_ORIGINS | Allowed CORS origins | localhost:3000,localhost:3001,localhost:5173 |
| CACHE_TTL | Cache time-to-live (seconds) | 3600 |
| CACHE_CHECK_PERIOD | Cache check period (seconds) | 600 |

## Testing

The project uses Jest for testing with the following structure:

- Unit tests: Colocated with source files (`.test.ts`)
- Integration tests: Colocated with source files (`Integration.ts`)
- Shared utilities: Global `tests/` directory

## Code Standards

- **Indentation**: 2 spaces
- **Quotes**: Single quotes
- **Semicolons**: Always
- **Line length**: Maximum 120 characters
- **TypeScript**: Strict mode enabled

## Contributing

Please follow the established code standards and ensure all tests pass before submitting changes.

## License

ISC