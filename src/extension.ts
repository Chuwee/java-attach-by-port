import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {

  const disposable = vscode.commands.registerCommand(
    "javaAttach.attachByPort",
    async () => {

      const portInput = await vscode.window.showInputBox({
        prompt: "Enter JDWP debug port",
        placeHolder: "5005",
        validateInput: value =>
          /^\d+$/.test(value) ? null : "Port must be a number"
      });

      if (!portInput) {
        return;
      }

      const port = Number(portInput);

      const debugConfig: vscode.DebugConfiguration = {
        type: "java",
        request: "attach",
        name: `Attach Java :${port}`,
        hostName: "127.0.0.1",
        port
      };

      try {
        await vscode.debug.startDebugging(undefined, debugConfig);
      } catch (err: any) {
        vscode.window.showErrorMessage(
          `Failed to attach debugger: ${err?.message ?? err}`
        );
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
