# Pokedex CLI

A command-line interface (CLI) application that simulates a Pokedex, allowing users to explore Pokemon locations, catch Pokemon, and manage their collection.

## Features

- Explore different Pokemon locations
- Catch Pokemon with a chance-based system
- View detailed information about caught Pokemon
- List all caught Pokemon in your Pokedex
- Navigate through location pages
- Caching system for faster data retrieval

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pokedex
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

## Usage

Start the application:
```bash
npm start
```

### Available Commands

- `help` - Displays a list of available commands
- `map` - Shows the next page of available locations
- `mapb` - Shows the previous page of locations
- `explore <location>` - Explore a specific location to find Pokemon
- `catch <pokemon>` - Attempt to catch a Pokemon
- `inspect <pokemon>` - View detailed information about a caught Pokemon
- `pokedex` - List all Pokemon you've caught
- `exit` - Exit the application

### Example Usage

1. View available locations:
```
pokedex > map
```

2. Explore a location:
```
pokedex > explore pallet-town
```

3. Try to catch a Pokemon:
```
pokedex > catch pikachu
```

4. View your caught Pokemon:
```
pokedex > pokedex
```

5. Inspect a specific Pokemon:
```
pokedex > inspect pikachu
```

## Development

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Build and run the application
- `npm test` - Run tests

## Technical Details

- Built with TypeScript
- Uses the PokeAPI for Pokemon data
- Implements a caching system for improved performance
- Command-line interface using Node.js readline

## License

ISC 