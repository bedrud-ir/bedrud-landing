import { cn } from "~/lib/utils";

interface SystemdServicesProps {
  className?: string;
}

export function SystemdServices({ className }: SystemdServicesProps) {
  return (
    <div className={cn("my-6", className)}>
      <h2 className="text-2xl font-semibold tracking-tight scroll-m-20">
        Systemd Services
      </h2>
      <p className="mt-4 leading-7 text-muted-foreground">
        The installer creates two systemd services:
      </p>
      <table className="my-6 w-full border-collapse">
        <thead className="border-b border-border">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold">
              Service
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold">
              Command
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold">
              Purpose
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-border">
            <td className="px-4 py-2 text-sm">
              <code className="font-mono">bedrud.service</code>
            </td>
            <td className="px-4 py-2 text-sm">
              <code className="font-mono">
                bedrud --run --config /etc/bedrud/config.yaml
              </code>
            </td>
            <td className="px-4 py-2 text-sm">API + web</td>
          </tr>
          <tr className="border-t border-border">
            <td className="px-4 py-2 text-sm">
              <code className="font-mono">livekit.service</code>
            </td>
            <td className="px-4 py-2 text-sm">
              <code className="font-mono">
                bedrud --livekit --config /etc/bedrud/livekit.yaml
              </code>
            </td>
            <td className="px-4 py-2 text-sm">Media server</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
