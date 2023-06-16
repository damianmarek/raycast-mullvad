import { runAppleScript } from 'run-applescript';
import { showHUD } from "@raycast/api";

export default async function main() {
  await runAppleScript('do shell script "mullvad disconnect"')
  await showHUD("Disconnected from Mullvad");
}
