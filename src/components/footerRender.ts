export default class FooterRender {
    template: string;

    constructor() {
        this.template = `
      <div class="footer__content">
<a   href="https://github.com/S4mm4ael" target="_blank">
<svg class="footer__logo" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
</a>
<a href="https://rs.school/js/" target="_blank">
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg class="footer__logo"
 id="Layer_1"
 viewBox="0 0 552.8 205.3"
 version="1.1"
 sodipodi:docname="rs_school.svg"
 inkscape:version="1.1.1 (3bf5ae0d25, 2021-09-20)"
 xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
 xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns="http://www.w3.org/2000/svg"
 xmlns:svg="http://www.w3.org/2000/svg"
 xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
 xmlns:cc="http://creativecommons.org/ns#"
 xmlns:dc="http://purl.org/dc/elements/1.1/">
<sodipodi:namedview
   id="namedview81"
   pagecolor="#ffffff"
   bordercolor="#666666"
   borderopacity="1.0"
   inkscape:pageshadow="2"
   inkscape:pageopacity="0.0"
   inkscape:pagecheckerboard="0"
   showgrid="false"
   inkscape:zoom="1.9645442"
   inkscape:cx="337.99189"
   inkscape:cy="170.77753"
   inkscape:window-width="1920"
   inkscape:window-height="1017"
   inkscape:window-x="1272"
   inkscape:window-y="-8"
   inkscape:window-maximized="1"
   inkscape:current-layer="Layer_1" />
<style
   id="style2">.st0{fill:#ffffff}.st1{clip-path:url(#SVGID_2_)}.st2{clip-path:url(#SVGID_4_)}.st3{clip-path:url(#SVGID_6_)}.st4{clip-path:url(#SVGID_8_)}.st5{fill:#fff;stroke:#000;stroke-width:4;stroke-miterlimit:10}.st6{clip-path:url(#SVGID_8_)}.st6,.st7{fill:none;stroke:#000;stroke-width:4;stroke-miterlimit:10}.st8,.st9{clip-path:url(#SVGID_10_)}.st9{fill:none;stroke:#000;stroke-width:4;stroke-miterlimit:10}</style>
<title
   id="title4">rs_school_js</title>
<path
   d="M285.4 68l26.3-1.7c.6 4.3 1.7 7.5 3.5 9.8 2.9 3.6 6.9 5.4 12.2 5.4 3.9 0 7-.9 9.1-2.8 2-1.5 3.2-3.9 3.2-6.4 0-2.4-1.1-4.7-3-6.2-2-1.8-6.7-3.6-14.1-5.2-12.1-2.7-20.8-6.3-25.9-10.9-5.1-4.3-8-10.6-7.8-17.3 0-4.6 1.4-9.2 4-13 3-4.3 7.1-7.7 12-9.6 5.3-2.3 12.7-3.5 22-3.5 11.4 0 20.1 2.1 26.1 6.4 6 4.2 9.6 11 10.7 20.3l-26 1.5c-.7-4-2.1-6.9-4.4-8.8s-5.3-2.8-9.2-2.8c-3.2 0-5.6.7-7.2 2-1.5 1.2-2.5 3-2.4 5 0 1.5.8 2.9 2 3.8 1.3 1.2 4.4 2.3 9.3 3.3 12.1 2.6 20.7 5.2 26 7.9 5.3 2.7 9.1 6 11.4 9.9 2.4 4 3.6 8.6 3.5 13.3 0 5.6-1.6 11.2-4.8 15.9-3.3 4.9-7.9 8.7-13.3 11-5.7 2.5-12.9 3.8-21.5 3.8-15.2 0-25.7-2.9-31.6-8.8S286.1 77 285.4 68zM6.3 97.6V8.2h46.1c8.5 0 15.1.7 19.6 2.2 4.4 1.4 8.3 4.3 10.9 8.2 2.9 4.3 4.3 9.3 4.2 14.5.3 8.8-4.2 17.2-11.9 21.6-3 1.7-6.3 2.9-9.7 3.5 2.5.7 5 1.9 7.2 3.3 1.7 1.4 3.1 3 4.4 4.7 1.5 1.7 2.8 3.6 3.9 5.6l13.4 25.9H63L48.2 70.2c-1.9-3.5-3.5-5.8-5-6.9-2-1.4-4.4-2.1-6.8-2.1H34v36.3H6.3zM34 44.4h11.7c2.5-.2 4.9-.6 7.3-1.2 1.8-.3 3.4-1.3 4.5-2.8 2.7-3.6 2.3-8.7-1-11.8-1.8-1.5-5.3-2.3-10.3-2.3H34v18.1zM0 174.2l26.3-1.7c.6 4.3 1.7 7.5 3.5 9.8 2.8 3.6 6.9 5.5 12.2 5.5 3.9 0 7-.9 9.1-2.8 2-1.6 3.2-3.9 3.2-6.4 0-2.4-1.1-4.7-3-6.2-2-1.8-6.7-3.6-14.2-5.2-12.1-2.7-20.8-6.3-25.9-10.9-5.1-4.3-8-10.6-7.8-17.3 0-4.6 1.4-9.2 4-13 3-4.3 7.1-7.7 12-9.6 5.3-2.3 12.7-3.5 22-3.5 11.4 0 20.1 2.1 26.1 6.4s9.5 11 10.6 20.3l-26 1.5c-.7-4-2.1-6.9-4.4-8.8-2.2-1.9-5.3-2.8-9.2-2.7-3.2 0-5.6.7-7.2 2.1-1.6 1.2-2.5 3-2.4 5 0 1.5.8 2.9 2 3.8 1.3 1.2 4.4 2.3 9.3 3.3 12.1 2.6 20.7 5.2 26 7.9 5.3 2.7 9.1 6 11.4 9.9 2.4 4 3.6 8.6 3.6 13.2 0 5.6-1.7 11.1-4.8 15.8-3.3 4.9-7.9 8.7-13.3 11-5.7 2.5-12.9 3.8-21.5 3.8-15.2 0-25.7-2.9-31.6-8.8-5.9-6-9.2-13.4-10-22.4z"
   id="path6"
   style="fill:#ffffff;fill-opacity:1" />
<path
   d="M133 167.2l24.2 7.3c-1.3 6.1-4 11.9-7.7 17-3.4 4.5-7.9 8-13 10.3-5.2 2.3-11.8 3.5-19.8 3.5-9.7 0-17.7-1.4-23.8-4.2-6.2-2.8-11.5-7.8-16-14.9-4.5-7.1-6.7-16.2-6.7-27.3 0-14.8 3.9-26.2 11.8-34.1s19-11.9 33.4-11.9c11.3 0 20.1 2.3 26.6 6.8 6.4 4.6 11.2 11.6 14.4 21l-24.4 5.4c-.6-2.1-1.5-4.2-2.7-6-1.5-2.1-3.4-3.7-5.7-4.9-2.3-1.2-4.9-1.7-7.5-1.7-6.3 0-11.1 2.5-14.4 7.6-2.5 3.7-3.8 9.6-3.8 17.6 0 9.9 1.5 16.7 4.5 20.4 3 3.7 7.2 5.5 12.7 5.5 5.3 0 9.3-1.5 12-4.4 2.7-3.1 4.7-7.4 5.9-13zm56.5-52.8h27.6v31.3h30.2v-31.3h27.8v89.4h-27.8v-36.2h-30.2v36.2h-27.6v-89.4z"
   id="path8"
   style="fill:#ffffff;fill-opacity:1" />
<path
   d="M271.3 159.1c0-14.6 4.1-26 12.2-34.1 8.1-8.1 19.5-12.2 34-12.2 14.9 0 26.3 4 34.4 12S364 144 364 158.4c0 10.5-1.8 19-5.3 25.7-3.4 6.6-8.7 12-15.2 15.6-6.7 3.7-15 5.6-24.9 5.6-10.1 0-18.4-1.6-25-4.8-6.8-3.4-12.4-8.7-16.1-15.2-4.1-7-6.2-15.7-6.2-26.2zm27.6.1c0 9 1.7 15.5 5 19.5 3.3 3.9 7.9 5.9 13.7 5.9 5.9 0 10.5-1.9 13.8-5.8s4.9-10.8 4.9-20.8c0-8.4-1.7-14.6-5.1-18.4-3.4-3.9-8-5.8-13.8-5.8-5.1-.2-10 2-13.4 5.9-3.4 3.9-5.1 10.4-5.1 19.5zm93.4-.1c0-14.6 4.1-26 12.2-34.1 8.1-8.1 19.5-12.2 34-12.2 14.9 0 26.4 4 34.4 12S485 144 485 158.4c0 10.5-1.8 19-5.3 25.7-3.4 6.6-8.7 12-15.2 15.6-6.7 3.7-15 5.6-24.9 5.6-10.1 0-18.4-1.6-25-4.8-6.8-3.4-12.4-8.7-16.1-15.2-4.1-7-6.2-15.7-6.2-26.2zm27.6.1c0 9 1.7 15.5 5 19.5 3.3 3.9 7.9 5.9 13.7 5.9 5.9 0 10.5-1.9 13.8-5.8 3.3-3.9 4.9-10.8 4.9-20.8 0-8.4-1.7-14.6-5.1-18.4-3.4-3.9-8-5.8-13.8-5.8-5.1-.2-10.1 2-13.4 5.9-3.4 3.9-5.1 10.4-5.1 19.5z"
   id="path10"
   style="fill:#ffffff;fill-opacity:1" />
<path
   d="M482.1 114.4h27.6v67.4h43.1v22H482v-89.4z"
   id="path12"
   style="fill:#ffffff;fill-opacity:1" />
<ellipse
   transform="rotate(-37.001 420.46 67.88)"
   class="st0"
   cx="420.5"
   cy="67.9"
   rx="63"
   ry="51.8"
   id="ellipse14" />
<defs
   id="defs17">
  <ellipse
     id="SVGID_1_"
     transform="rotate(-37.001 420.46 67.88)"
     cx="420.5"
     cy="67.9"
     rx="63"
     ry="51.8" />
</defs>
<clipPath
   id="SVGID_2_">
  <use
     xlink:href="#SVGID_1_"
     overflow="visible"
     id="use19" />
</clipPath>
<g
   class="st1"
   clip-path="url(#SVGID_2_)"
   id="g78">
  <path
     transform="rotate(-37.001 420.82 68.353)"
     class="st0"
     d="M330.9-14.2h179.8v165.1H330.9z"
     id="path22" />
  <g
     id="Layer_2_1_">
    <defs
       id="defs25">
      <path
         id="SVGID_3_"
         transform="rotate(-37.001 420.82 68.353)"
         d="M330.9-14.2h179.8v165.1H330.9z" />
    </defs>
    <clipPath
       id="SVGID_4_">
      <use
         xlink:href="#SVGID_3_"
         overflow="visible"
         id="use27" />
    </clipPath>
    <g
       id="Layer_1-2"
       class="st2"
       clip-path="url(#SVGID_4_)">
      <ellipse
         transform="rotate(-37.001 420.46 67.88)"
         class="st0"
         cx="420.5"
         cy="67.9"
         rx="63"
         ry="51.8"
         id="ellipse30" />
      <defs
         id="defs33">
        <ellipse
           id="SVGID_5_"
           transform="rotate(-37.001 420.46 67.88)"
           cx="420.5"
           cy="67.9"
           rx="63"
           ry="51.8" />
      </defs>
      <clipPath
         id="SVGID_6_">
        <use
           xlink:href="#SVGID_5_"
           overflow="visible"
           id="use35" />
      </clipPath>
      <g
         class="st3"
         clip-path="url(#SVGID_6_)"
         id="g70">
        <path
           transform="rotate(-37 420.799 68.802)"
           class="st0"
           d="M357.8 17h125.9v103.7H357.8z"
           id="path38" />
        <defs
           id="defs41">
          <path
             id="SVGID_7_"
             transform="rotate(-37 420.799 68.802)"
             d="M357.8 17h125.9v103.7H357.8z" />
        </defs>
        <clipPath
           id="SVGID_8_">
          <use
             xlink:href="#SVGID_7_"
             overflow="visible"
             id="use43" />
        </clipPath>
        <g
           class="st4"
           clip-path="url(#SVGID_8_)"
           id="g48">
          <ellipse
             transform="rotate(-37.001 420.46 67.88)"
             class="st5"
             cx="420.5"
             cy="67.9"
             rx="63"
             ry="51.8"
             id="ellipse46" />
        </g>
        <path
           transform="rotate(-37 420.799 68.802)"
           class="st6"
           d="M357.8 17h125.9v103.7H357.8z"
           clip-path="url(#SVGID_8_)"
           id="path50" />
        <ellipse
           transform="rotate(-37.001 420.46 67.88)"
           class="st7"
           cx="420.5"
           cy="67.9"
           rx="63"
           ry="51.8"
           id="ellipse52" />
        <path
           transform="rotate(-37 420.799 68.802)"
           class="st0"
           d="M357.8 17h125.9v103.7H357.8z"
           id="path54" />
        <defs
           id="defs57">
          <path
             id="SVGID_9_"
             transform="rotate(-37 420.799 68.802)"
             d="M357.8 17h125.9v103.7H357.8z" />
        </defs>
        <clipPath
           id="SVGID_10_">
          <use
             xlink:href="#SVGID_9_"
             overflow="visible"
             id="use59" />
        </clipPath>
        <g
           class="st8"
           clip-path="url(#SVGID_10_)"
           id="g64">
          <ellipse
             transform="rotate(-37.001 420.46 67.88)"
             class="st5"
             cx="420.5"
             cy="67.9"
             rx="63"
             ry="51.8"
             id="ellipse62" />
        </g>
        <path
           transform="rotate(-37 420.799 68.802)"
           class="st9"
           d="M357.8 17h125.9v103.7H357.8z"
           clip-path="url(#SVGID_10_)"
           id="path66" />
        <path
           transform="rotate(-37.001 420.82 68.353)"
           class="st7"
           d="M330.9-14.2h179.8v165.1H330.9z"
           id="path68" />
      </g>
      <ellipse
         transform="rotate(-37.001 420.46 67.88)"
         class="st7"
         cx="420.5"
         cy="67.9"
         rx="63"
         ry="51.8"
         id="ellipse72" />
      <path
         d="M392.4 61.3l10-7 12.3 17.5c2.1 2.8 3.7 5.8 4.9 9.1.7 2.5.5 5.2-.5 7.6-1.3 3-3.4 5.5-6.2 7.3-3.3 2.3-6.1 3.6-8.5 4-2.3.4-4.7 0-6.9-1-2.4-1.2-4.5-2.9-6.1-5.1l8.6-8c.7 1.1 1.6 2.1 2.6 2.9.7.5 1.5.8 2.4.8.7 0 1.4-.3 1.9-.7 1-.6 1.7-1.8 1.6-3-.3-1.7-1-3.4-2.1-4.7l-14-19.7zm30 11.1l9.1-7.2c1 1.2 2.3 2.1 3.7 2.6 2 .6 4.1.2 5.8-1.1 1.2-.8 2.2-1.9 2.6-3.3.6-1.8-.4-3.8-2.2-4.4-.3-.1-.6-.2-.9-.2-1.2-.1-3.3.4-6.4 1.7-5.1 2.1-9.1 2.9-12.1 2.6-2.9-.3-5.6-1.8-7.2-4.3-1.2-1.7-1.8-3.7-1.9-5.7 0-2.3.6-4.6 1.9-6.5 1.9-2.7 4.2-5 7-6.8 4.2-2.9 7.9-4.3 11.1-4.3 3.2 0 6.2 1.5 9 4.6l-9 7.1c-1.8-2.3-5.2-2.8-7.5-1l-.3.3c-1 .6-1.7 1.5-2.1 2.6-.3.8-.1 1.7.4 2.4.4.5 1 .9 1.7.9.8.1 2.2-.3 4.2-1.2 5-2.1 8.8-3.3 11.4-3.7 2.2-.4 4.5-.2 6.6.7 1.9.8 3.5 2.2 4.6 3.9 1.4 2 2.2 4.4 2.3 6.9.1 2.6-.6 5.1-2 7.3-1.8 2.7-4.1 5-6.8 6.8-5.5 3.8-10 5.4-13.6 4.8-3.9-.6-7.1-2.6-9.4-5.5z"
         id="path74" />
    </g>
  </g>
</g>
<metadata
   id="metadata898">
  <rdf:RDF>
    <cc:Work
       rdf:about="">
      <dc:title>rs_school_js</dc:title>
    </cc:Work>
  </rdf:RDF>
</metadata>
</svg>
</a>
</div>
</div>
    `;
    }

    render() {
        const footer: HTMLElement = document.createElement('footer');
        footer.innerHTML = this.template;
        document.body?.append(footer);
    }
}
