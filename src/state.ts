import { createInterface, type Interface } from "readline";
import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State) => void;
  };
  
  export type State = {
    commands: Record<string, CLICommand>;
    readline: Interface;
  };

  export function initState(): State {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex >",
      });

   const commandRegistry: Record<string, CLICommand> = {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
  };
  
  return {
    commands : commandRegistry,
    readline : rl,
  }
    
  }