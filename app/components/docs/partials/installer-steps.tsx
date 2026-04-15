import { cn } from "~/lib/utils";

interface InstallerStepsProps {
  className?: string;
}

export function InstallerSteps({ className }: InstallerStepsProps) {
  return (
    <div className={cn("my-6", className)}>
      <h2 className="text-2xl font-semibold tracking-tight scroll-m-20">
        What the Installer Does
      </h2>
      <p className="mt-4 leading-7 text-muted-foreground">
        When you run <code className="font-mono">bedrud install</code>, the
        following happens:
      </p>
      <table className="my-6 w-full border-collapse">
        <thead className="border-b border-border">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold">Step</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-border">
            <td className="px-4 py-2 text-sm">1</td>
            <td className="px-4 py-2 text-sm">
              Creates directories:{" "}
              <code className="font-mono">/etc/bedrud</code>,{" "}
              <code className="font-mono">/var/lib/bedrud</code>,{" "}
              <code className="font-mono">/var/log/bedrud</code>
            </td>
          </tr>
          <tr className="border-t border-border">
            <td className="px-4 py-2 text-sm">2</td>
            <td className="px-4 py-2 text-sm">
              Copies binary to{" "}
              <code className="font-mono">/usr/local/bin/bedrud</code>
            </td>
          </tr>
          <tr className="border-t border-border">
            <td className="px-4 py-2 text-sm">3</td>
            <td className="px-4 py-2 text-sm">
              Generates{" "}
              <code className="font-mono">/etc/bedrud/config.yaml</code> with
              your settings
            </td>
          </tr>
          <tr className="border-t border-border">
            <td className="px-4 py-2 text-sm">4</td>
            <td className="px-4 py-2 text-sm">
              Generates{" "}
              <code className="font-mono">/etc/bedrud/livekit.yaml</code> for
              media server
            </td>
          </tr>
          <tr className="border-t border-border">
            <td className="px-4 py-2 text-sm">5</td>
            <td className="px-4 py-2 text-sm">
              Creates two systemd services:{" "}
              <code className="font-mono">bedrud.service</code> and{" "}
              <code className="font-mono">livekit.service</code>
            </td>
          </tr>
          <tr className="border-t border-border">
            <td className="px-4 py-2 text-sm">6</td>
            <td className="px-4 py-2 text-sm">
              Enables and starts both services
            </td>
          </tr>
          <tr className="border-t border-border">
            <td className="px-4 py-2 text-sm">7</td>
            <td className="px-4 py-2 text-sm">
              Initializes SQLite database and certificate cache
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
