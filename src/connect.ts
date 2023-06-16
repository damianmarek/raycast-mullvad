import { runAppleScript } from 'run-applescript';
import { showHUD } from "@raycast/api";

export default async function main() {
  await runAppleScript('do shell script "mullvad connect"')
  await showHUD("Connected to Mullvad");
}
