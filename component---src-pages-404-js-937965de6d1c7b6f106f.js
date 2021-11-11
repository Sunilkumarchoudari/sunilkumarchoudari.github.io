(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    w2l6: function(e, t, n) {
      'use strict';
      n.r(t);
      let o;
      let c;
      let a;
      let i;
      const l = n('MUpH');
      const s = n('q1tI');
      const f = n.n(s);
      const m = n('Wbzz');
      const r = n('VeD8');
      const p = n('pQ8y');
      const u = n('Kvkj');
      const d = n('vOnD');
      const b = n('InJ6');
      const h = b.h.colors;
      const g = b.h.fonts;
      const y = b.h.navDelay;
      const w = Object(d.c)(b.d).withConfig({
        displayName: 'sc-404__StyledMainContainer',
        componentId: 'sc-105mcyo-0',
      })(['', ';flex-direction:column;'], b.g.flexCenter);
      const j = d.c.h1.withConfig({ displayName: 'sc-404__StyledTitle', componentId: 'sc-105mcyo-1' })(
        ['color:', ';font-family:', ';font-size:12vw;line-height:1;', ' ', ';'],
        h.green,
        g.SFMono,
        b.f.bigDesktop(o || (o = Object(l.a)(['font-size: 200px;']))),
        b.f.phablet(c || (c = Object(l.a)(['font-size: 120px;']))),
      );
      const O = d.c.h2.withConfig({
        displayName: 'sc-404__StyledSubtitle',
        componentId: 'sc-105mcyo-2',
      })(
        ['font-size:3vw;font-weight:400;', ';', ';'],
        b.f.bigDesktop(a || (a = Object(l.a)(['font-size: 50px;']))),
        b.f.phablet(i || (i = Object(l.a)(['font-size: 30px;']))),
      );
      const v = Object(d.c)(m.Link).withConfig({
        displayName: 'sc-404__StyledHomeButton',
        componentId: 'sc-105mcyo-3',
      })(['', ';margin-top:40px;'], b.g.bigButton);
      t.default = function(e) {
        const t = e.location;
        const n = Object(s.useState)(!1);
        const o = n[0];
        const c = n[1];
        return (
          Object(s.useEffect)(function() {
            const e = setTimeout(function() {
              return c(!0);
            }, y);
            return function() {
              return clearTimeout(e);
            };
          }, []),
          f.a.createElement(
            u.i,
            { location: t },
            f.a.createElement(
              r.a,
              { component: null },
              o &&
                f.a.createElement(
                  p.a,
                  { timeout: 500, classNames: 'fade' },
                  f.a.createElement(
                    w,
                    { className: 'fillHeight' },
                    f.a.createElement(j, null, '404'),
                    f.a.createElement(O, null, 'Page Not Found'),
                    f.a.createElement(v, { to: '/' }, 'Go Home'),
                  ),
                ),
            ),
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-937965de6d1c7b6f106f.js.map
