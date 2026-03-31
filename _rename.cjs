const fs = require('fs');
const path = require('path');
let count = 0;
function renameAll(dir, fromExt, toExt) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir, { withFileTypes: true }).forEach(f => {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) renameAll(full, fromExt, toExt);
    else if (f.name.endsWith(fromExt)) {
      fs.renameSync(full, full.slice(0, -fromExt.length) + toExt);
      count++;
      console.log(full + ' -> ' + toExt);
    }
  });
}
renameAll('D:/dreamit-web/presentation/src', '.jsx', '.tsx');
renameAll('D:/dreamit-web/presentation/src', '.js', '.ts');
console.log('Total renamed:', count);
