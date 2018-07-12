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

  it('should translate navbar-togglers', () => {
    expect(translate(`
<button class="navbar-toggler">Foo</button>
<div class="navbar-toggler">Bar</div>
`).jsx).to.eql(`
<NavbarToggler>Foo</NavbarToggler>
<NavbarToggler tag="div">Bar</NavbarToggler>
`);
  });


  it('should translate navs, nav-items and nav-links', () => {
    expect(translate(`
<ul class="nav flex-column"></ul>
<ul class="nav flex-row"></ul>
<ul class="nav">
  <li class="nav-item">foo</li>
  <li class="nav-item"><a href="/bar" class="nav-link">bar</a></li>
</ul>
<nav class="navbar-nav">
  <a class="nav-link active" href="/foo">foo</a>
  <a class="nav-link disabled" href="/bar">bar</a>
</nav>
`).jsx).to.eql(`
<Nav vertical></Nav>
<Nav horizontal></Nav>
<Nav>
  <NavItem>foo</NavItem>
  <NavItem><NavLink href="/bar">bar</NavLink></NavItem>
</Nav>
<Nav tag="nav" navbar>
  <NavLink href="/foo" active>foo</NavLink>
  <NavLink href="/bar" disabled>bar</NavLink>
</Nav>
`);
  });
});
