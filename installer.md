# Bedrud Installer Documentation

One-command install for all platforms.

```bash
# macOS / Linux
curl -fsSL https://get.bedrud.org | bash

# Windows (PowerShell)
irm https://get.bedrud.org/install.ps1 | iex
```

---

## Table of Contents

- [What It Does](#what-it-does)
- [Requirements](#requirements)
- [Flags & Options](#flags--options)
- [Environment Variables](#environment-variables)
- [Platform Support](#platform-support)
- [Edge Case Detection](#edge-case-detection)
- [Install Flow](#install-flow)
- [PATH & Shell Configuration](#path--shell-configuration)
- [Offline / Air-Gapped Installs](#offline--air-gapped-installs)
- [Uninstall](#uninstall)
- [Troubleshooting](#troubleshooting)

---

## What It Does

1. Detects your OS, CPU architecture, and special platform variants
2. Downloads the correct pre-built binary from [GitHub Releases](https://github.com/bedrud-ir/bedrud/releases)
3. Installs it to `~/bin` (or custom directory)
4. Adds the install directory to your `PATH` via shell config
5. Runs `bedrud completions` to set up shell tab-completion
6. Prints next steps

The entire process runs without `sudo` — everything installs under your home directory.

---

## Requirements

### macOS / Linux

| Dependency | Required | Why |
|------------|----------|-----|
| `curl`     | Yes      | Download the archive |
| `unzip`    | One of   | Extract `.zip` archives |
| `tar`      | One of   | Extract `.tar.xz` archives (fallback) |

At least **one** of `unzip` or `tar` must be present. If both exist, the installer prefers `.zip`.

### Windows

- PowerShell 5.1+ (ships with Windows 10/11)
- No extra dependencies

---

## Flags & Options

### Bash Installer (`install.sh`)

```
Usage: curl -fsSL https://get.bedrud.org | bash -s -- [options]
```

| Flag | Argument | Default | Description |
|------|----------|---------|-------------|
| `--install-dir <dir>` | Directory path | `~/bin` | Where to place the `bedrud` binary |
| `--version <ver>` | Version tag | `latest` | Install a specific release version (e.g. `v1.2.0`) |
| `--skip-shell` | — | off | Do not modify shell RC files or `PATH` |
| `--debug` | — | off | Install the debug/profile build (includes symbols, profiling data) |
| `-h`, `--help` | — | — | Print usage information and exit |

**Examples:**

```bash
# Default install (latest version, ~/bin)
curl -fsSL https://get.bedrud.org | bash

# Pin to a specific version
curl -fsSL https://get.bedrud.org | bash -s -- --version v1.2.0

# Custom install location
curl -fsSL https://get.bedrud.org | bash -s -- --install-dir /usr/local/bin

# System-wide install (requires sudo for /usr/local/bin creation)
curl -fsSL https://get.bedrud.org | sudo bash -s -- --install-dir /usr/local/bin

# CI / automation — skip shell config
curl -fsSL https://get.bedrud.org | bash -s -- --skip-shell

# Debug build with custom dir
curl -fsSL https://get.bedrud.org | bash -s -- --debug --install-dir ~/dev-bin

# Download first, inspect, then run
curl -fsSL https://get.bedrud.org -o install.sh
less install.sh
bash install.sh --version v1.0.0
```

### PowerShell Installer (`install.ps1`)

```
Usage: irm https://get.bedrud.org/install.ps1 | iex
```

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `-InstallDir <path>` | String | `$HOME\bin` | Where to place `bedrud.exe` |
| `-Version <ver>` | String | `latest` | Install a specific release version |
| `-SkipPath` | Switch | `$false` | Do not add install dir to user `PATH` |
| `-DebugBuild` | Switch | `$false` | Install the debug/profile build |
| `-Help` | Switch | `$false` | Print usage information |

**Examples:**

```powershell
# Default install
irm https://get.bedrud.org/install.ps1 | iex

# Specific version, custom dir
irm https://get.bedrud.org/install.ps1 -OutFile install.ps1
.\install.ps1 -Version v1.2.0 -InstallDir C:\Tools

# Skip PATH modification
irm https://get.bedrud.org/install.ps1 | iex -SkipPath
```

---

## Environment Variables

| Variable | Default | Bash | PS | Description |
|----------|---------|------|----|-------------|
| `BEDRUD_INSTALL` | `~/bin` | Yes | No | Override install directory. Equivalent to `--install-dir` |
| `BEDRUD_REPO` | `bedrud-ir/bedrud` | Yes | Yes | Override GitHub repo. For forks or mirrors |

**`BEDRUD_REPO`** changes the download URL:

```
# Default
https://github.com/bedrud-ir/bedrud/releases/latest/download/bedrud_linux-x64.zip

# With BEDRUD_REPO=myorg/mybedrud
https://github.com/myorg/mybedrud/releases/latest/download/bedrud_linux-x64.zip
```

**Examples:**

```bash
# Install from a fork
BEDRUD_REPO=myorg/bedrud-fork curl -fsSL https://get.bedrud.org | bash

# Custom install dir via env
BEDRUD_INSTALL=/opt/bedrud curl -fsSL https://get.bedrud.org | bash
```

```powershell
$env:BEDRUD_REPO = "myorg/bedrud-fork"
irm https://get.bedrud.org/install.ps1 | iex
```

---

## Platform Support

The installer maps your OS and CPU to a **target name** used to find the correct binary.

### Supported Targets

| Target Name | OS | Architecture | Variant |
|-------------|-----|-------------|---------|
| `darwin-x64` | macOS | Intel (x86_64) | Standard |
| `darwin-x64-baseline` | macOS | Intel (no AVX2) | Baseline |
| `darwin-aarch64` | macOS | Apple Silicon (M1/M2/M3/M4) | Standard |
| `linux-x64` | Linux | x86_64 (glibc) | Standard |
| `linux-x64-baseline` | Linux | x86_64 (no AVX2) | Baseline |
| `linux-x64-musl` | Linux | x86_64 (Alpine/musl) | musl |
| `linux-x64-musl-baseline` | Linux | x86_64 Alpine (no AVX2) | musl + baseline |
| `linux-aarch64` | Linux | ARM64 (glibc) | Standard |
| `linux-aarch64-musl` | Linux | ARM64 (Alpine/musl) | musl |
| `windows-x64` | Windows | x86_64 | Standard |
| `windows-aarch64` | Windows | ARM64 | Standard |

Any target can have `-profile` appended (via `--debug`) for a debug/profile build.

### OS Detection Logic

```
uname -s → "Darwin"  → darwin
           "Linux"   → linux
           "FreeBSD" → freebsd
           "MINGW*"  → redirect to PowerShell script
           "MSYS*"   → redirect to PowerShell script
```

### Architecture Detection

```
uname -m → "x86_64" | "amd64"  → x64
           "aarch64" | "arm64"  → aarch64
           "armv7l"  | "armv7"  → armv7
```

---

## Edge Case Detection

The installer automatically detects and handles three platform variants.

### 1. Alpine Linux (musl libc)

**Detection:** `/etc/alpine-release` file exists.

**Effect:** Appends `-musl` to the target name. Alpine uses musl libc instead of glibc — the standard Linux binary will fail with a "not found" or "no such file or directory" error on Alpine without this.

```
linux-x64 → linux-x64-musl
linux-aarch64 → linux-aarch64-musl
```

### 2. Rosetta 2 (macOS Intel emulation on Apple Silicon)

**Detection:** `sysctl -n sysctl.proc_translated` returns `1`.

**Effect:** Switches from `darwin-x64` to `darwin-aarch64` to use the native ARM binary. Running the x64 binary under Rosetta works but is slower.

```
darwin-x64 → darwin-aarch64
```

### 3. AVX2 Baseline (x86_64 CPUs without AVX2)

**Detection:**
- Linux: `grep avx2 /proc/cpuinfo` finds no match
- macOS: `sysctl -a | grep machdep.cpu.features` lacks `AVX2`

**Effect:** Appends `-baseline` to use a build compiled for older CPUs. Older Intel/AMD chips (pre-2013) lack AVX2 instructions and will crash with `SIGILL` on the standard build.

```
linux-x64 → linux-x64-baseline
darwin-x64 → darwin-x64-baseline
```

Note: Rosetta 2 detection runs **before** AVX2 detection. If Rosetta is detected, the target switches to `darwin-aarch64` and AVX2 is never checked (ARM always has the equivalent).

### 4. Debug / Profile Build

**Detection:** `--debug` flag passed.

**Effect:** Appends `-profile` to target name. This build includes debug symbols and profiling instrumentation. Larger binary, slower, but produces useful performance profiles.

```
linux-x64 → linux-x64-profile
linux-aarch64-musl → linux-aarch64-musl-profile
```

### Variant Application Order

Variants are applied in this specific order:

```
1. Base target     →  linux-x64
2. Alpine musl     →  linux-x64-musl
3. Rosetta 2       →  (switches darwin-x64 to darwin-aarch64, skips AVX2)
4. AVX2 baseline   →  linux-x64-musl-baseline
5. Debug profile   →  linux-x64-musl-baseline-profile
```

---

## Install Flow

Step-by-step breakdown of what the installer does:

```
┌──────────────────────────────────────────────────────────┐
│ 1. WINDOWS CHECK                                         │
│    uname matches MINGW/MSYS/CYGWIN/Windows_NT?           │
│    → Print PowerShell command, exit                      │
├──────────────────────────────────────────────────────────┤
│ 2. DEPENDENCY CHECK                                      │
│    curl required. unzip OR tar required.                 │
│    → Exit with error if missing                          │
├──────────────────────────────────────────────────────────┤
│ 3. ARGUMENT PARSING                                      │
│    Parse flags. Max 4 args allowed.                      │
│    → --install-dir, --version, --skip-shell, --debug     │
├──────────────────────────────────────────────────────────┤
│ 4. PLATFORM DETECTION                                    │
│    OS via uname -s, Arch via uname -m                    │
│    → Target = "os-arch"                                  │
├──────────────────────────────────────────────────────────┤
│ 5. VARIANT DETECTION                                     │
│    Alpine? → -musl                                       │
│    Rosetta 2? → switch to ARM native                     │
│    No AVX2? → -baseline                                  │
│    --debug? → -profile                                   │
│    → Final target name                                   │
├──────────────────────────────────────────────────────────┤
│ 6. DOWNLOAD                                              │
│    Try .zip first (if unzip available)                   │
│    Fallback to .tar.xz (if tar available)                │
│    URL: github.com/{repo}/releases/{ver}/bedrud_{tgt}.*  │
├──────────────────────────────────────────────────────────┤
│ 7. EXTRACT & INSTALL                                     │
│    mktemp dir, extract archive, find binary              │
│    mv → $INSTALL_DIR/bedrud, chmod +x                    │
│    rm -rf temp dir (trap EXIT cleanup)                   │
├──────────────────────────────────────────────────────────┤
│ 8. VERIFY                                                │
│    Run: bedrud --version                                 │
│    Print installed version                               │
├──────────────────────────────────────────────────────────┤
│ 9. PATH CHECK                                            │
│    Already in PATH? → Skip                               │
│    Not in PATH + --skip-shell? → Print manual command    │
│    Not in PATH? → Detect shell, update RC file           │
├──────────────────────────────────────────────────────────┤
│ 10. SHELL CONFIG                                         │
│     Detect: fish / zsh / bash                            │
│     Append PATH export to RC file (idempotent)           │
│     Skip if already configured                           │
├──────────────────────────────────────────────────────────┤
│ 11. COMPLETIONS                                          │
│     Run: bedrud completions                              │
│     Silent failure if not supported yet                  │
├──────────────────────────────────────────────────────────┤
│ 12. DONE                                                 │
│     Print success message + reload instructions          │
└──────────────────────────────────────────────────────────┘
```

### Download URL Construction

```
# Latest version
https://github.com/bedrud-ir/bedrud/releases/latest/download/bedrud_{TARGET}.zip

# Pinned version
https://github.com/bedrud-ir/bedrud/releases/download/v1.2.0/bedrud_{TARGET}.zip

# Fallback (.tar.xz)
https://github.com/bedrud-ir/bedrud/releases/latest/download/bedrud_{TARGET}.tar.xz
```

### Archive Fallback Logic

The installer tries archives in this order:

1. **`.zip`** — if `unzip` is available (preferred)
2. **`.tar.xz`** — if `tar` is available (fallback)

This ensures compatibility with whatever the CI produces. If both fail, the installer exits with an error listing the URL to check manually.

---

## PATH & Shell Configuration

When `--skip-shell` is not set, the installer modifies your shell configuration to add the install directory to `PATH`.

### Which RC File?

| Shell | RC File | Notes |
|-------|---------|-------|
| **fish** | `~/.config/fish/config.fish` | Respects `XDG_CONFIG_HOME` |
| **zsh** | `$ZDOTDIR/.zshrc` (default `~/.zshrc`) | Respects `ZDOTDIR` |
| **bash** (macOS) | `~/.bash_profile`, then `~/.bashrc` | Tries first writable |
| **bash** (Linux) | `~/.bashrc`, then `~/.bash_profile` | Tries first writable |
| **unknown** | — | Prints manual instructions |

### What Gets Added

**Bash / Zsh:**

```bash
# bedrud
export PATH="$HOME/bin:$PATH"  # bedrud
```

**Fish:**

```fish
# bedrud
set --export PATH $HOME/bin $PATH  # bedrud
```

**Windows (PowerShell):**

The installer uses `[Environment]::SetEnvironmentVariable("PATH", ..., "User")` to persist the PATH change at the Windows registry level. No RC file modification needed.

### Idempotency

The `# bedrud` comment marker is used to detect existing configuration. If found, the installer skips writing — safe to re-run.

### Manual PATH Setup

If the installer can't write to your RC file (permissions, unusual shell), it prints:

```bash
  Add to PATH manually:
    export PATH="$HOME/bin:$PATH"
```

### Reload Shell

After install, open a new terminal or run:

```bash
# bash
source ~/.bashrc

# zsh
source ~/.zshrc

# fish
source ~/.config/fish/config.fish
```

---

## Offline / Air-Gapped Installs

### Method 1: Download and Transfer

```bash
# On an internet-connected machine, download the archive
curl -fsSL -o bedrud.zip \
  https://github.com/bedrud-ir/bedrud/releases/latest/download/bedrud_linux-x64.zip

# Transfer to target machine via scp, USB, etc.
scp bedrud.zip airgapped-server:/tmp/

# On the air-gapped machine
unzip -o /tmp/bedrud.zip -d /tmp/bedrud-extracted
mv /tmp/bedrud-extracted/bedrud ~/bin/
chmod +x ~/bin/bedrud
```

### Method 2: Self-Hosted Mirror

```bash
# Point installer at your mirror
BEDRUD_REPO=mycompany/bedrud-mirror curl -fsSL https://get.bedrud.org | bash
```

The installer downloads from:

```
https://github.com/{BEDRUD_REPO}/releases/{version}/bedrud_{target}.{ext}
```

Set `BEDRUD_REPO` to any GitHub repo that mirrors the release artifacts with the same naming convention.

### Method 3: Direct Binary

If you can't use the installer at all:

1. Go to [Releases](https://github.com/bedrud-ir/bedrud/releases)
2. Download the archive for your platform
3. Extract and move to a directory in your `PATH`

---

## Uninstall

```bash
# Remove the binary
rm ~/bin/bedrud

# Remove PATH from your shell RC (edit manually)
# Look for lines containing "# bedrud" and remove them:
#   ~/.bashrc, ~/.bash_profile, ~/.zshrc, or ~/.config/fish/config.fish

# Or use bedrud's built-in uninstall (Debian systems with systemd)
bedrud uninstall
```

Windows:

```powershell
Remove-Item "$env:USERPROFILE\bin\bedrud.exe"
# Remove from PATH via System Properties → Environment Variables
```

---

## Troubleshooting

### `command not found: bedrud` after install

You need to reload your shell:

```bash
source ~/.bashrc    # or ~/.zshrc, or restart terminal
```

Or the install directory isn't in PATH. Check:

```bash
echo $PATH | tr ':' '\n' | grep "$HOME/bin"
```

If empty, add manually:

```bash
echo 'export PATH="$HOME/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### `unzip is required` error

Install unzip:

```bash
# Debian / Ubuntu
sudo apt install unzip

# Fedora / RHEL
sudo dnf install unzip

# Alpine
apk add unzip

# macOS
# unzip is pre-installed
```

### `Failed to download bedrud` error

1. Check your internet connection
2. Verify the target exists: visit [Releases](https://github.com/bedrud-ir/bedrud/releases)
3. Try a different version: `--version v1.0.0`
4. Your platform may not have a pre-built binary yet

### Alpine: `not found` or `no such file or directory`

You're running the glibc build on musl. The installer should detect Alpine automatically, but if it didn't:

```bash
curl -fsSL https://get.bedrud.org | bash -s -- --install-dir ~/bin
# Check: the URL should contain "-musl"
```

### macOS: Running x64 binary under Rosetta (slow)

Force native ARM:

```bash
arch -arm64 curl -fsSL https://get.bedrud.org | arch -arm64 bash
```

### Windows: "running scripts is disabled on this system"

```powershell
# Temporarily allow scripts for this session
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
irm https://get.bedrud.org/install.ps1 | iex
```

### `sudo` install

```bash
# sudo changes $HOME, so set install dir explicitly
curl -fsSL https://get.bedrud.org | sudo bash -s -- --install-dir /usr/local/bin
```

### Verify install

```bash
bedrud --version
which bedrud
```
