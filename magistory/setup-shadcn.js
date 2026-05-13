const { execSync } = require('child_process');
const readline = require('readline');

// Automate shadcn initialization
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function runCommand(command) {
  try {
    execSync(command, { stdio: 'inherit', cwd: __dirname });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Run shadcn init with automated responses
console.log('Starting shadcn initialization...');
runCommand('npx shadcn@latest init -c magistory --yes');
<task_progress>
- [x] Resolved 404 error by running Next.js from magistory directory
- [x] Stop running development server
- [ ] Install shadcn/ui
- [ ] Create Button component
- [ ] Create Card component
- [ ] Test the new components
</task_progress>