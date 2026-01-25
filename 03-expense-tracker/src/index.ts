#!/usr/bin/env node
import { Command } from "commander";
import { addExpense } from "./commands/add.js";
import { deleteExpense } from "./commands/delete.js";
import { listExpenses } from "./commands/list.js";
import { summary } from "./commands/summary.js";
import { updateExpense } from "./commands/update.js";

const program = new Command();

program
  .command("add")
  .requiredOption("--description <string>")
  .requiredOption("--amount <number>")
  .action((opts) => addExpense(opts.description, Number(opts.amount)));

program
  .command("update")
  .requiredOption("--id <number>")
  .option("--description <string>")
  .option("--amount <number>")
  .action((opts) =>
    updateExpense(
      Number(opts.id),
      opts.description,
      opts.amount && Number(opts.amount),
    ),
  );

program
  .command("delete")
  .requiredOption("--id <number>")
  .action((opts) => deleteExpense(Number(opts.id)));

program.command("list").action(listExpenses);

program
  .command("summary")
  .option("--month <number>")
  .action((opts) => summary(opts.month && Number(opts.month)));

program.parse();
