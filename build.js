const build = require('extra-build');

const owner  = 'nodef';
const srcts  = 'index.ts';
const LOCATIONS = [
  'src/index.ts',
];




// Get keywords for main/sub package.
function keywords(ds) {
  var m = build.readMetadata('.');
  var s = new Set([...m.keywords, ...ds.map(d => d.name)]);
  return Array.from(s);
}


// Publish root package to NPM, GitHub.
function publishRoot(ds, ver, typ) {
  var _package = build.readDocument('package.json');
  var _readme  = build.readDocument('README.md');
  var m  = build.readMetadata('.');
  var md = build.readFileText('README.md');
  m.version  = ver;
  m.keywords = keywords(ds);
  if (typ) {
    m.name = `${m.name}.${typ}`;
    m.description.replace(/\.$/, `{${typ}}.`);
    md.replace(/(unpkg\.com\/)(\S+?)(\/\))/, `$1$2.${typ}$3`);
  }
  build.writeMetadata('.', m);
  build.writeFileText('README.md', md);
  build.publish('.');
  try { build.publishGithub('.', owner); }
  catch {}
  build.writeDocument(_package);
  build.writeDocument(_readme);
}


// Deploy root package to NPM, GitHub.
function deployRoot(ds, ver) {
  var m   = build.readMetadata('.');
  var sym = build.symbolname(m.name);
  build.bundleScript(`.build/${srcts}`);
  publishRoot(ds, ver, '');
  build.webifyScript('index.mjs', 'index.mjs', {format: 'esm'});
  build.webifyScript('index.js',  'index.js',  {format: 'cjs', symbol: sym});
  publishRoot(ds, ver, 'web');
}


// Deploy root, sub packages to NPM, GitHub.
function deployAll(ds) {
  var m   = build.readMetadata('.');
  var ver = build.nextUnpublishedVersion(m.name, m.version);
  build.exec(`tsc`);
  build.updateGithubRepoDetails({topics: keywords(ds)});
  build.generateDocs(`src/${srcts}`);
  build.publishDocs();
  deployRoot(ds, ver);
}


// Generate wiki for all exported symbols.
function generateWiki() {
  // createWikiFiles();
  // generateWikiFiles();
}


// Get README index descriptions.
function readmeDescription(d) {
  var rkind = /namespace|function/i;
  var sname = /a?sync$/i;
  if (!rkind.test(d.kind)) return '';
  if (sname.test(d.name) && d.name!=='spawnAsync') return '';
  var a = d.description.replace(/The.+method/, 'This method');
  a = a.replace(', with command-line arguments in ', ' and ');
  a = a.replace(/(\S)`(.*?)`/, '$1 `$2`');
  return a;
}


// Sort docs details by original order.
function compareLocation(a, b) {
  if (a.kind!==b.kind) return 0;
  var alocn = a.location.replace(/.*?@types\/node.*?\:/, 'src/_file.ts:');
  var blocn = b.location.replace(/.*?@types\/node.*?\:/, 'src/_file.ts:');
  var [afile] = alocn.split(':');
  var [bfile] = blocn.split(':');
  return LOCATIONS.indexOf(afile) - LOCATIONS.indexOf(bfile) || alocn.localeCompare(blocn);
}


// Update README.
function updateReadme(ds) {
  var m  = build.readMetadata('.');
  var repo = m.name;
  var ds = ds.slice().sort(compareLocation);
  var dm = new Map(ds.map(d => [d.name, d]));
  var txt = build.readFileText('README.md');
  txt = build.wikiUpdateIndex(txt, dm, readmeDescription);
  txt = build.wikiUpdateLinkReferences(txt, dm, {owner, repo});
  build.writeFileText('README.md', txt);
}


function main(a) {
  var p  = build.loadDocs([`src/${srcts}`]);
  var ds = p.children.map(build.docsDetails);
  if (a[2] === 'deploy') deployAll(ds);
  else if (a[2] === 'wiki') generateWiki(ds);
  else if (a[2] === 'readme') updateReadme(ds);
  else build.bundleScript(`.build/${srcts}`);
}
main(process.argv);
