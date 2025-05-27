import { createInterface } from "node:readline";
import { commandExit } from "./command_exit.js";
import { getCommands } from "./commands.js";

export function cleanInput(input: string): string[] {
    // logic goes here
    let inputLowerCase = input.toLowerCase();
    return inputLowerCase.trim().split(/\s+/);
}

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex >",
  });
  
  rl.prompt();
  
  rl.on("line", (input: string) => {

    if (input.length === 0) {
      rl.prompt();
      return;
    }
    
    let inputArray = cleanInput(input);
    const commands = getCommands();
    const commandName = inputArray[0];
    
    if (commandName in commands) {
      commands[commandName].callback(commands);
    } else {
      console.log("Unknown command");
    }
    
    rl.prompt();
    
  });
}