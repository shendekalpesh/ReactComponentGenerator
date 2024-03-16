const fs = require('fs');
const components_to_generate = [
  //Add component or pages to generate.
  'Home',
  'About',
  'Contact'
];

const outputDir = './components';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

components_to_generate.forEach((componentName) => {
  const jsxContent = `
import React from 'react';

const ${componentName} = () => {
  return (<section>
    
  </section>);
};

export default ${componentName};
`;

  const filePath = `${outputDir}/${componentName}.jsx`;
  fs.writeFileSync(filePath, jsxContent);

  console.log(`Created ${componentName}.jsx`);
});

console.log('JSX files generated successfully!');
