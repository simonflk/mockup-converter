const { expect } = require('chai');
const translate = require('../index');

describe('translator navigation', () => {
  it('should translate navbars', () => {
    expect(translate(`
<nav class="navbar">
</nav>
<header role="navigation" class="navbar">
</header>
`).jsx).to.eql(`
<Navbar>
</Navbar>
<Navbar tag="header">
</Navbar>
`);
  });
});
