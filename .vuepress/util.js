const fs = require('fs');

function getFilesOf(directory) {
  const frontMatter = `/${directory}/`;

  return fs.readdirSync(directory).reduce((refineFiles, fileName) => {
    if (fileName === 'README.md') {
      refineFiles.unshift(`${frontMatter}`);
      return refineFiles;
    }

    refineFiles.push(`${frontMatter}${fileName.replace('.md', '')}`);

    return refineFiles;
  }, []);
}

module.exports = { getFilesOf };
