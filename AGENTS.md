# Photobooth Project - Agent Guidelines

## Build/Development Commands
- **Start server**: `bun run index.ts`
- **Run with hot reload**: `bun --watch index.ts`
- **Type checking**: `bun tsc --noEmit`
- **No test framework configured** - add tests if needed

## Code Style Guidelines
- **Runtime**: Bun/TypeScript with ES modules
- **File naming**: kebab-case for files, PascalCase for types
- **Imports**: Use ES6 import syntax, no default exports
- **Formatting**: 2-space indentation, consistent with existing code
- **Error handling**: Return proper HTTP status codes (400, 404, etc.)
- **File operations**: Use Bun.file() and Bun.write() for I/O
- **Server patterns**: Use Bun.serve() with async fetch handlers
- **Response format**: Return Response objects with appropriate status
- **File uploads**: Handle formData, validate file existence before processing