




{
  name: "greeting",
  description: "sends a greeting",
  inputType: ApplicationCommandInputType.BUILT_IN_TEXT, // 1
  execute(args, context) {
    return { content: "whats good" }
  }
}


