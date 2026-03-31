const { execSync } = require('child_process');
try {
  const r = execSync('npx tsc --noEmit 2>&1', { cwd: 'D:/dreamit-web/presentation', encoding: 'utf8', timeout: 60000 });
  console.log(r);
  console.log('NO ERRORS');
} catch (e) {
  const out = (e.stdout || '') + (e.stderr || '');
  console.log(out.slice(0, 8000));
  console.log('===ERRORS FOUND===');
}
