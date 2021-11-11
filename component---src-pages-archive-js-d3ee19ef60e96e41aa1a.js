(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    nRki: function(e, t, a) {
      'use strict';
      a.r(t);
      let n;
      let l;
      let r;
      let i;
      const c = a('MUpH');
      const o = a('q1tI');
      const s = a.n(o);
      const m = a('TJpk');
      const h = a('nLfd');
      const d = a('20nU');
      const f = a('Kvkj');
      const p = a('g67X');
      const u = a('vOnD');
      const b = a('InJ6');
      const g = b.h.colors;
      const E = b.h.fonts;
      const x = b.h.fontSizes;
      const v = Object(u.c)(b.d).withConfig({
        displayName: 'archive__StyledMainContainer',
        componentId: 'sc-1shh8jg-0',
      })(['']);
      const w = u.c.div.withConfig({
        displayName: 'archive__StyledTableContainer',
        componentId: 'sc-1shh8jg-1',
      })(
        ['margin:100px -20px;', ';'],
        b.f.tablet(n || (n = Object(c.a)(['\n    margin: 100px -10px;\n  ']))),
      );
      const y = u.c.table.withConfig({
        displayName: 'archive__StyledTable',
        componentId: 'sc-1shh8jg-2',
      })(
        [
          'width:100%;border-collapse:collapse;.hide-on-mobile{',
          ';}tbody tr{transition:',
          ';&:hover,&:focus{background-color:',
          ';}}th,td{cursor:default;line-height:1.5;padding:10px 20px;',
          ';}th{text-align:left;}td{&.year{width:10%;',
          ';}&.title{padding-top:15px;color:',
          ';font-size:',
          ';font-weight:700;}&.company{width:15%;padding-top:15px;font-size:',
          ';}&.tech{font-size:',
          ';font-family:',
          ';.separator{margin:0 5px;}span{display:inline-block;}}&.links{span{display:flex;align-items:center;a{',
          ';}a + a{margin-left:10px;}svg{width:20px;height:20px;}}}}',
        ],
        b.f.tablet(l || (l = Object(c.a)(['\n      display: none;\n    ']))),
        b.h.transition,
        g.lightNavy,
        b.f.tablet(r || (r = Object(c.a)(['\n      padding: 10px;\n    ']))),
        b.f.tablet(i || (i = Object(c.a)(['\n        font-size: ', ';\n      '])), x.sm),
        g.lightestSlate,
        x.xl,
        x.lg,
        x.xs,
        E.SFMono,
        b.g.flexCenter,
      );
      t.default = function(e) {
        const t = e.location;
        const a = e.data.allMarkdownRemark.edges;
        const n = Object(o.useRef)(null);
        const l = Object(o.useRef)(null);
        const r = Object(o.useRef)([]);
        return (
          Object(o.useEffect)(function() {
            h.a.reveal(n.current, Object(d.srConfig)()),
            h.a.reveal(l.current, Object(d.srConfig)()),
            r.current.forEach(function(e, t) {
              return h.a.reveal(e, Object(d.srConfig)(10 * t));
            });
          }, []),
          s.a.createElement(
            f.i,
            { location: t },
            s.a.createElement(
              m.Helmet,
              null,
              s.a.createElement('title', null, 'Archive | Sunil Kumar Choudari'),
              s.a.createElement('link', {
                rel: 'canonical',
                href: 'https://brittanychiang.com/archive',
              }),
            ),
            s.a.createElement(
              v,
              null,
              s.a.createElement(
                'header',
                { ref: n },
                s.a.createElement('h1', { className: 'big-title' }, 'Archive'),
                s.a.createElement(
                  'p',
                  { className: 'subtitle' },
                  'A big list of things I’ve worked on',
                ),
              ),
              s.a.createElement(
                w,
                { ref: l },
                s.a.createElement(
                  y,
                  null,
                  s.a.createElement(
                    'thead',
                    null,
                    s.a.createElement(
                      'tr',
                      null,
                      s.a.createElement('th', null, 'Year'),
                      s.a.createElement('th', null, 'Title'),
                      s.a.createElement('th', { className: 'hide-on-mobile' }, 'Made at'),
                      s.a.createElement('th', { className: 'hide-on-mobile' }, 'Built with'),
                      s.a.createElement('th', null, 'Link'),
                    ),
                  ),
                  s.a.createElement(
                    'tbody',
                    null,
                    a.length > 0 &&
                      a.map(function(e, t) {
                        const a = e.node.frontmatter;
                        const n = a.date;
                        const l = a.github;
                        const i = a.external;
                        const c = a.title;
                        const o = a.company;
                        return s.a.createElement(
                          'tr',
                          {
                            key: t,
                            ref: function(e) {
                              return (r.current[t] = e);
                            },
                          },
                          s.a.createElement(
                            'td',
                            { className: 'overline year' },
                            `${  new Date(n).getFullYear()}`,
                          ),
                          s.a.createElement('td', { className: 'title' }, c),
                          s.a.createElement(
                            'td',
                            { className: 'company hide-on-mobile' },
                            o
                              ? s.a.createElement('span', null, o)
                              : s.a.createElement('span', null, '—'),
                          ),
                          s.a.createElement(
                            'td',
                            { className: 'links' },
                            s.a.createElement(
                              'span',
                              null,
                              i &&
                                s.a.createElement(
                                  'a',
                                  {
                                    href: i,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': 'External Link',
                                  },
                                  s.a.createElement(p.a, { name: 'External' }),
                                ),
                              l &&
                                s.a.createElement(
                                  'a',
                                  {
                                    href: l,
                                    target: '_blank',
                                    rel: 'nofollow noopener noreferrer',
                                    'aria-label': 'GitHub Link',
                                  },
                                  s.a.createElement(p.a, { name: 'GitHub' }),
                                ),
                            ),
                          ),
                        );
                      }),
                  ),
                ),
              ),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-archive-js-d3ee19ef60e96e41aa1a.js.map
