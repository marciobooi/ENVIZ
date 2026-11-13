import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { execSync } from 'node:child_process';
import { readdirSync, renameSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';

// The build output page is called enviz.html instead of index.html
const renameIndexToEnviz = () => ({
  name: 'rename-index-to-enviz',
  enforce: 'post',
  generateBundle(_, bundle) {
    const page = bundle['index.html'];
    if (page) {
      delete bundle['index.html'];
      page.fileName = 'enviz.html';
      bundle['enviz.html'] = page;
    }
  },
});

// After the build, zip the contents of dist and leave only dist/enviz.zip, ready to send.
// Uses PowerShell on Windows and `zip` elsewhere, so no extra dependency is needed.
const zipDist = () => {
  let outDir = 'dist';
  return {
    name: 'zip-dist',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle: {
      order: 'post',
      sequential: true,
      handler() {
        const zipPath = resolve('enviz.zip');
        rmSync(zipPath, { force: true });
        const dir = resolve(outDir);
        // Top-level names listed one by one (not "."): entries then have no "./" prefix, which makes
        // Windows Explorer show the zip as empty.
        const names = readdirSync(dir).map((n) => `"${n}"`).join(' ');
        const command =
          process.platform === 'win32'
            ? // Windows' own tar (full path: Git Bash puts a GNU tar first, which cannot write zips).
              // Unlike Compress-Archive it writes "/" in entry names, so the zip also opens correctly on Linux servers.
              `"${process.env.SystemRoot}\\System32\\tar.exe" -a -cf "${zipPath}" -C "${dir}" ${names}`
            : `cd "${dir}" && zip -qr "${zipPath}" ${names}`;
        execSync(command, { stdio: 'inherit' });
        // Leave only the zip inside dist
        for (const name of readdirSync(dir)) rmSync(join(dir, name), { recursive: true, force: true });
        renameSync(zipPath, join(dir, 'enviz.zip'));
        console.log(`Created ${outDir}/enviz.zip`);
      },
    },
  };
};

export default defineConfig({
  plugins: [react(), renameIndexToEnviz(), zipDist()],
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@ecl': '/node_modules/@ecl',
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  base: './',
});
