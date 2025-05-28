import { createInterface } from "node:readline";
import { commandExit } from "./command_exit.js";
import { State } from "./state.js";

export function cleanInput(input: string): string[] {
    // logic goes here
    let inputLowerCase = input.toLowerCase();
    return inputLowerCase.trim().split(/\s+/);
}

export function startREPL(state: State) {
  const rl = state.readline;
  
  rl.prompt();
  
  rl.on("line", (input: string) => {

    if (input.length === 0) {
      rl.prompt();
      return;
    }
    
    let inputArray = cleanInput(input);
    const commands = state.commands;
    const commandName = inputArray[0];
    
    if (commandName in commands) {
      commands[commandName].callback(state);
    } else {
      console.log("Unknown command");
    }
    
    rl.prompt();
    
  });
}