import { cn } from "~/lib/utils";

interface CreateAdminProps {
  className?: string;
  createOption?: boolean;
}

export function CreateAdmin({
  className,
  createOption = false,
}: CreateAdminProps) {
  return (
    <div className={cn("my-6", className)}>
      <h2 className="text-2xl font-semibold tracking-tight scroll-m-20">
        Promote User to Admin
      </h2>
      <p className="mt-4 leading-7 text-muted-foreground">
        Register via the web UI at your server URL, then promote the user to
        admin:
      </p>
      {createOption ? (
        <>
          <p className="mt-4 leading-7 text-muted-foreground">
            Alternatively, create a new admin user directly:
          </p>
          <pre className="my-6 overflow-x-auto rounded-md bg-muted p-4">
            <code className="text-sm">
              sudo ./bedrud user create --email admin@example.com --password
              secret --name "Admin"
              {"\n"}
              sudo ./bedrud user promote --email admin@example.com
            </code>
          </pre>
        </>
      ) : (
        <pre className="my-6 overflow-x-auto rounded-md bg-muted p-4">
          <code className="text-sm">
            sudo ./bedrud user promote --email admin@example.com
          </code>
        </pre>
      )}
    </div>
  );
}
